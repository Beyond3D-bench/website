#!/usr/bin/env node
/**
 * Regenerates the question-viewer data under src/Components/Json/PXX/ from the
 * VQA export.
 *
 *   node scripts/build-question-data.mjs [--input <jsonl>] [--per-video N] [--dry-run]
 *
 * The export holds 2,000 trajectories across P01-P09, but the site can only
 * render a video for which it already has a room model, camera tracks, and the
 * team's two YouTube uploads. That is P01 and P04, and the ten videos listed in
 * VIDEO_META below.
 *
 * Only `oos_staged_trajectory` records are used. The `visible_staged_trajectory`
 * controls carry a single visibility step and no geometry, so they would render
 * as an empty panel.
 */

import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, "..");
const JSON_ROOT = path.join(REPO_ROOT, "src", "Components", "Json");
const CAMERA_ROOT = path.join(REPO_ROOT, "public", "Camera");
const MODELS_ROOT = path.join(REPO_ROOT, "public", "models");

const DEFAULT_INPUT = "/Users/ivo/Documents/ETHZ/3DVision/vqa/clean_no_cue.jsonl";
const TARGET_QUESTION_CLASS = "oos_staged_trajectory";
const VIDEO_FPS = 30;

/**
 * The 1 FPS sampled upload and the full-rate upload are the team's own YouTube
 * videos. They exist nowhere but in the files this script overwrites, so they
 * are pinned here and cross-checked against the committed files before writing.
 */
const VIDEO_META = {
  "P01-20240202-110250": {
    sampledUrl: "https://www.youtube.com/watch?v=Ny0ZIMgJrW8",
    fullUrl:
      "https://www.youtube.com/watch?v=49EiUzdzwfk&list=PLN5Krxli5ta_d_Q5sTa1HjuDrF1ATvciV&index=29",
  },
  "P01-20240202-161354": {
    sampledUrl: "https://youtu.be/o86ELADbUsE",
    fullUrl: "https://youtu.be/5DvV0QiO0g4",
  },
  "P01-20240202-161948": {
    sampledUrl: "https://youtu.be/Rd6G5nKyet0",
    fullUrl: "https://youtu.be/wEKMA9AkIwA",
  },
  "P01-20240202-171220": {
    sampledUrl: "https://youtu.be/POdQjynS9zo",
    fullUrl: "https://youtu.be/RLZJ2QUvqx8",
  },
  "P01-20240202-195538": {
    sampledUrl: "https://youtu.be/jmd33OXtZmM",
    fullUrl: "https://youtu.be/HGmiJ5Colv8",
  },
  "P01-20240203-132119": {
    sampledUrl: "https://www.youtube.com/watch?v=J6F6VP6-qZw",
    fullUrl: "https://www.youtube.com/watch?v=dX1WtAax4zY",
  },
  "P04-20240414-162242": {
    sampledUrl: "https://youtu.be/jZDL1oNv-rc",
    fullUrl: "https://youtu.be/d4ksz-FHMXg",
  },
  "P04-20240414-165333": {
    sampledUrl: "https://youtu.be/v3v2-W6DjBs",
    fullUrl: "https://youtu.be/1JVjhUHWqHM",
  },
  "P04-20240414-175337": {
    sampledUrl: "https://youtu.be/JMnuKHXt5gY",
    fullUrl: "https://youtu.be/tQ9mT9ro2NQ",
  },
  "P04-20240415-181212": {
    sampledUrl: "https://youtu.be/6kQpiCj1dD4",
    fullUrl: "https://youtu.be/h0Q3M44s6ho",
  },
};

const VIDEO_IDS = Object.keys(VIDEO_META);

/**
 * Reviewed out by hand. Their entries stay in VIDEO_META so the YouTube URLs
 * are not lost if they are ever brought back.
 */
const EXCLUDED_VIDEOS = new Set([
  "P01-20240202-161948",
  "P04-20240414-175337",
]);

/**
 * Individual anchors reviewed out by hand, keyed by the short trajectory id.
 * Applied after selection, never before: filtering the pool first would let the
 * horizon quantiles backfill the freed slots with unreviewed anchors.
 */
const EXCLUDED_TRAJECTORIES = new Set([
  "oos_staged_h9p0_1025",
  "oos_staged_h18p0_380",
  "oos_staged_h29p0_430",
  "oos_staged_h66p0_423",
  "oos_staged_h69p0_258",
  "oos_staged_h69p0_478",
  "oos_staged_h13p0_365",
  "oos_staged_h33p0_186",
]);

const shortKey = (trajectoryId) => trajectoryId.split("__").pop();

/** Bulky provenance the viewer never reads. Everything `mcq_*` goes too. */
const DROPPED_METADATA_KEYS = new Set([
  "mcq_choice_metadata",
  "acceptable_answer_metadata",
  "fixture_type_pool",
  "counter_area_choices",
  "debug",
  "distance_debug",
]);

/** Record-level keys the viewer never reads; gold_history_messages dominates size. */
const DROPPED_RECORD_KEYS = new Set([
  "doc_id",
  "gold_history_messages",
  "include_gold_history",
  "mode",
  "steps",
  "temporal_cue_metadata",
  "video_path",
]);

/**
 * Fields each step must still carry after pruning. A silent loss here is the
 * expensive kind: the panel renders, but the 3D scene or a marker quietly
 * vanishes.
 */
const REQUIRED_METADATA = {
  1: ["status", "is_visible"],
  2: ["sampled_last_visible_time_sec", "sampled_last_visible_time_token"],
  3: [
    "last_placement_time_sec",
    "last_placement_time_token",
    "normalized_projected_pixel",
    "world_coordinates",
    "status",
  ],
  4: ["raw_correct_fixture", "correct_fixture", "reference_time_sec"],
  "5a": ["correct_label", "world_coordinates", "status"],
  "5b": ["distance_bucket", "distance_m", "object_x_world_coordinates"],
  "5c": [
    "object_y_name",
    "object_y_world_coordinates",
    "object_y_normalized_projected_pixel",
    "object_x_world_coordinates",
  ],
  "5d": [
    "object_y_name",
    "object_y_normalized_projected_pixel",
    "distance_bucket",
    "distance_m",
  ],
};

function parseArgs(argv) {
  const args = { input: DEFAULT_INPUT, perVideo: 4, dryRun: false };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--input") args.input = argv[++i];
    else if (arg === "--per-video") args.perVideo = Number(argv[++i]);
    else throw new Error(`Unknown argument: ${arg}`);
  }

  if (!Number.isInteger(args.perVideo) || args.perVideo < 0) {
    throw new Error("--per-video must be a non-negative integer (0 = all)");
  }

  return args;
}

const userIdOf = (videoId) => videoId.slice(0, 3);
const targetPathOf = (videoId) =>
  path.join(JSON_ROOT, userIdOf(videoId), `${videoId}.tsx`);

/**
 * Guards against this table drifting from what is committed. The script
 * overwrites its own source of truth, so a mismatch has to be fatal.
 */
function verifyVideoMeta() {
  for (const videoId of VIDEO_IDS) {
    if (EXCLUDED_VIDEOS.has(videoId)) continue;

    const file = targetPathOf(videoId);
    if (!fs.existsSync(file)) {
      console.warn(`  ! ${videoId}: no committed file to verify against`);
      continue;
    }

    const source = fs.readFileSync(file, "utf8");
    const block = source.slice(source.indexOf("export const VIDEO"));

    for (const key of ["sampledUrl", "fullUrl"]) {
      const found = block.match(new RegExp(`${key}:\\s*\\n?\\s*"([^"]+)"`))?.[1];
      const expected = VIDEO_META[videoId][key];

      if (found !== expected) {
        throw new Error(
          `${videoId}: committed ${key} is\n  ${found}\nbut VIDEO_META says\n  ${expected}\n` +
            `Update VIDEO_META in this script before regenerating.`,
        );
      }
    }
  }
}

/**
 * Every committed file says `duration: 220`, which is wrong for all ten videos.
 * The frame count in the camera manifest is the real length: the player
 * self-corrects once YouTube reports, but the scrubber and every timeline
 * marker render against this value first.
 */
function durationOf(videoId) {
  const manifest = path.join(
    CAMERA_ROOT,
    userIdOf(videoId),
    videoId,
    "framewise_info",
    "manifest.json",
  );

  if (!fs.existsSync(manifest)) {
    console.warn(`  ! ${videoId}: no camera manifest, falling back to 220 s`);
    return 220;
  }

  const { totalLines } = JSON.parse(fs.readFileSync(manifest, "utf8"));
  return Math.round((totalLines / VIDEO_FPS) * 10) / 10;
}

/**
 * Mirrors KitchenScene's `transformFixture`: "P01_counter.009" -> "counter009".
 */
function transformFixture(fixture) {
  return fixture.replace(/^.*?_/, "").replace(".", "");
}

/** Mirrors three.js PropertyBinding.sanitizeNodeName, which GLTFLoader applies. */
function sanitizeNodeName(name) {
  return name.replace(/\s/g, "_").replace(/[\][.:/]/g, "");
}

/** Reads the JSON chunk out of a .glb header to list its node names. */
function loadGlbNodeNames(userId) {
  const file = path.join(MODELS_ROOT, `${userId}_final.glb`);
  if (!fs.existsSync(file)) return null;

  const fd = fs.openSync(file, "r");
  try {
    const header = Buffer.alloc(20);
    fs.readSync(fd, header, 0, 20, 0);

    if (header.toString("utf8", 0, 4) !== "glTF") {
      throw new Error(`${file} is not a binary glTF`);
    }

    const chunkLength = header.readUInt32LE(12);
    const chunk = Buffer.alloc(chunkLength);
    fs.readSync(fd, chunk, 0, chunkLength, 20);

    const gltf = JSON.parse(chunk.toString("utf8"));
    return new Set(
      (gltf.nodes ?? [])
        .map((node) => node.name)
        .filter(Boolean)
        .map(sanitizeNodeName),
    );
  } finally {
    fs.closeSync(fd);
  }
}

function roundTo(value, digits) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

/** Float noise like 0.009391574136723889 helps nobody in the JSON tab. */
function precisionFor(key) {
  if (key === "distance_m") return 4;
  if (/_sec$/.test(key)) return 3;
  if (/coordinates|vector|pixel|threshold|fraction|score/.test(key)) return 6;
  return null;
}

/** Drops nulls, drops unread provenance, and rounds floats. */
function prune(key, value) {
  if (value === null || value === undefined) return undefined;

  if (Array.isArray(value)) {
    const digits = precisionFor(key);
    if (digits !== null && value.every((v) => typeof v === "number")) {
      return value.map((v) => roundTo(v, digits));
    }
    return value
      .map((item) => prune(key, item))
      .filter((item) => item !== undefined);
  }

  if (typeof value === "object") {
    const out = {};
    for (const [childKey, childValue] of Object.entries(value)) {
      if (DROPPED_METADATA_KEYS.has(childKey)) continue;
      if (childKey.startsWith("mcq_")) continue;

      const pruned = prune(childKey, childValue);
      if (pruned !== undefined) out[childKey] = pruned;
    }
    return out;
  }

  if (typeof value === "number") {
    const digits = precisionFor(key);
    return digits !== null ? roundTo(value, digits) : value;
  }

  return value;
}

const asStepNumber = (step) => (/^\d+$/.test(String(step)) ? Number(step) : step);

/**
 * Aria RGB frames are 1408x1408. The export normalizes most projected pixels
 * but leaves step 1's raw, and VideoPlayer only draws the normalized ones — so
 * without this the visibility step gets no overlay dot. Verified exact against
 * every pair the export does normalize.
 */
const SOURCE_PIXEL_SIZE = 1408;

function withNormalizedPixels(metadata) {
  for (const [raw, normalized] of [
    ["projected_pixel", "normalized_projected_pixel"],
    ["object_y_projected_pixel", "object_y_normalized_projected_pixel"],
  ]) {
    const pixel = metadata[raw];
    if (!Array.isArray(pixel) || metadata[normalized]) continue;

    metadata[normalized] = pixel.map(
      (value) => Math.round((value / SOURCE_PIXEL_SIZE) * 1e6) / 1e6,
    );
  }

  return metadata;
}

function reshapeStep(step, isBranch) {
  const out = {
    step: asStepNumber(step.step),
    question_class: step.step_question_class,
    question: step.question,
    choices: step.choices,
  };

  if (step.correct_idx !== null && step.correct_idx !== undefined) {
    out.correct_idx = step.correct_idx;
  }
  if (Array.isArray(step.acceptable_idxs) && step.acceptable_idxs.length > 0) {
    out.acceptable_idxs = step.acceptable_idxs;
  }
  if (step.target_text != null) out.target_text = step.target_text;
  if (typeof step.skipped === "boolean") out.skipped = step.skipped;

  if (isBranch) {
    out.depends_on_steps = (step.depends_on_steps ?? []).map(asStepNumber);
    out.branch_group = step.branch_group;
  }

  out.answer_metadata = withNormalizedPixels(
    prune("answer_metadata", step.answer_metadata ?? {}),
  );

  return out;
}

/**
 * The export dropped generation_info's anchor_* fields, which VideoPlayer uses
 * to label the reference-object dot and KitchenScene uses as its last-resort
 * anchor. Step 5c's object Y *is* that anchor, so rebuild them from it rather
 * than teaching two components to cope with their absence.
 */
function deriveAnchor(branchSteps) {
  const source =
    branchSteps.find((s) => s.step === "5c") ??
    branchSteps.find((s) => s.step === "5d");
  const meta = source?.answer_metadata;
  if (!meta?.object_y_world_coordinates) return null;

  const anchor = {
    anchor_assoc_id: meta.object_y_assoc_id,
    anchor_name: meta.object_y_name,
    anchor_world_coordinates: meta.object_y_world_coordinates,
    anchor_projected_pixel: meta.object_y_projected_pixel ?? meta.object_y_pixel,
    anchor_normalized_projected_pixel: meta.object_y_normalized_projected_pixel,
    anchor_reference_time_sec: meta.object_y_reference_time_sec,
    anchor_status: meta.object_y_status ?? "in_view",
    anchor_source: `derived_from_step${source.step}_object_y`,
  };

  return Object.fromEntries(
    Object.entries(anchor).filter(([, value]) => value !== undefined),
  );
}

function reshapeRecord(record) {
  const incremental = [];
  const branch = [];

  for (const step of record.steps) {
    if (step.branch_group) branch.push(reshapeStep(step, true));
    else incremental.push(reshapeStep(step, false));
  }

  const trajectory = {};
  for (const [key, value] of Object.entries(record)) {
    if (DROPPED_RECORD_KEYS.has(key)) continue;
    const pruned = prune(key, value);
    if (pruned !== undefined) trajectory[key] = pruned;
  }

  const anchor = deriveAnchor(branch);
  if (anchor) Object.assign(trajectory.generation_info, anchor);

  trajectory.incremental_steps = incremental;
  trajectory.branch_groups = { post_step4: branch };

  return trajectory;
}

function describe(record) {
  const steps = Object.fromEntries(record.steps.map((step) => [step.step, step]));

  return {
    record,
    trajectory_id: record.trajectory_id,
    object_a_name: record.object_a_name,
    horizon_sec: Number(record.horizon_sec),
    lastVisible: steps["2"]?.answer_metadata?.sampled_last_visible_time_sec,
    lastPlacement: steps["3"]?.answer_metadata?.last_placement_time_sec,
    // Why the object is not visible at query time: out_of_view or occluded.
    status: steps["1"]?.answer_metadata?.status,
  };
}

/**
 * Keep only anchors where the object was put down before it was last seen, so
 * the placement is something the model could actually have observed.
 */
function isEligible(candidate) {
  return (
    candidate.lastPlacement != null &&
    candidate.lastVisible != null &&
    candidate.lastPlacement < candidate.lastVisible
  );
}

/**
 * Picks evenly across the horizon range so each video shows both a short and a
 * long out-of-sight gap, then pulls in occluded anchors (rare, and the more
 * interesting failure of visibility) and finally swaps duplicate objects for
 * the nearest-horizon alternative.
 *
 * Fully deterministic — re-running must produce byte-identical files.
 */
function selectTrajectories(pool, perVideo) {
  const sorted = [...pool].sort(
    (a, b) =>
      a.horizon_sec - b.horizon_sec ||
      a.trajectory_id.localeCompare(b.trajectory_id),
  );

  const total = sorted.length;
  const count = perVideo > 0 ? Math.min(perVideo, total) : total;
  if (count === 0) return [];

  const used = new Set();
  const picked = [];

  for (let i = 0; i < count; i += 1) {
    let index = count === 1 ? 0 : Math.round((i * (total - 1)) / (count - 1));
    while (used.has(index)) index = (index + 1) % total;
    used.add(index);
    picked.push(index);
  }

  // Occluded anchors are scarce, so make sure any this video has get in — the
  // horizon quantiles alone would only catch them by luck.
  const nearestHorizon = (target) => (a, b) =>
    Math.abs(a.record.horizon_sec - target) -
      Math.abs(b.record.horizon_sec - target) ||
    a.record.trajectory_id.localeCompare(b.record.trajectory_id);

  const occludedIndexes = sorted
    .map((record, index) => ({ record, index }))
    .filter(({ record }) => record.status === "occluded");

  for (const { index } of occludedIndexes) {
    if (used.has(index)) continue;

    // Displace whichever pick is closest in horizon, so the spread barely moves.
    const slot = picked
      .map((pickIndex, slotIndex) => ({ record: sorted[pickIndex], slotIndex }))
      .filter(({ record }) => record.status !== "occluded")
      .sort(nearestHorizon(sorted[index].horizon_sec))[0];

    if (!slot) break;

    used.delete(picked[slot.slotIndex]);
    used.add(index);
    picked[slot.slotIndex] = index;
  }

  const seenNames = new Set();
  for (let i = 0; i < picked.length; i += 1) {
    const current = sorted[picked[i]];
    // Never trade away an occluded anchor just to vary the object name.
    if (current.status === "occluded") {
      seenNames.add(current.object_a_name);
      continue;
    }
    if (!seenNames.has(current.object_a_name)) {
      seenNames.add(current.object_a_name);
      continue;
    }

    const alternative = sorted
      .map((record, index) => ({ record, index }))
      .filter(
        ({ record, index }) =>
          !used.has(index) && !seenNames.has(record.object_a_name),
      )
      .sort(
        (a, b) =>
          Math.abs(a.record.horizon_sec - current.horizon_sec) -
            Math.abs(b.record.horizon_sec - current.horizon_sec) ||
          a.record.trajectory_id.localeCompare(b.record.trajectory_id),
      )[0];

    if (alternative) {
      used.delete(picked[i]);
      used.add(alternative.index);
      picked[i] = alternative.index;
      seenNames.add(alternative.record.object_a_name);
    } else {
      seenNames.add(current.object_a_name);
    }
  }

  return picked.sort((a, b) => a - b).map((index) => sorted[index]);
}

function assertTrajectory(trajectory, glbNodes, videoId) {
  const fail = (message) => {
    throw new Error(`${videoId} / ${trajectory.trajectory_id}: ${message}`);
  };

  const steps = [
    ...trajectory.incremental_steps,
    ...trajectory.branch_groups.post_step4,
  ];

  if (steps.length !== 8) fail(`expected 8 steps, got ${steps.length}`);

  if (typeof trajectory.generation_info?.fixture_at_query !== "string") {
    fail("generation_info.fixture_at_query is missing");
  }

  for (const step of steps) {
    const key = String(step.step);
    if (!step.question_class) fail(`step ${key} has no question_class`);
    if (!Array.isArray(step.choices) || step.choices.length === 0) {
      fail(`step ${key} has no choices`);
    }
    if (typeof step.correct_idx !== "number") {
      fail(`step ${key} has no correct_idx`);
    }

    for (const field of REQUIRED_METADATA[key] ?? []) {
      if (step.answer_metadata?.[field] === undefined) {
        fail(`step ${key} lost answer_metadata.${field} during pruning`);
      }
    }
  }

  const fixture = trajectory.incremental_steps.find(
    (step) => String(step.step) === "4",
  )?.answer_metadata?.raw_correct_fixture;

  if (glbNodes && !glbNodes.has(transformFixture(fixture))) {
    fail(
      `fixture ${fixture} -> ${transformFixture(fixture)} is not a node in ` +
        `${userIdOf(videoId)}_final.glb`,
    );
  }
}

function renderModule(videoId, trajectoryMap, meta) {
  const video = {
    id: videoId,
    label: videoId,
    sampledUrl: meta.sampledUrl,
    fullUrl: meta.fullUrl,
    duration: meta.duration,
  };

  const videoLines = Object.entries(video)
    .map(([key, value]) => `  ${key}: ${JSON.stringify(value)},`)
    .join("\n");

  return `// Generated by scripts/build-question-data.mjs — do not edit by hand.
// Source: ${path.basename(meta.input)}, ${meta.generatedAt}.
import type { TrajectoryData, VideoEntry } from "../Types";

const TRAJECTORY: Record<string, TrajectoryData> = ${JSON.stringify(
    trajectoryMap,
    null,
    2,
  )};

export const VIDEO: VideoEntry = {
${videoLines}
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};
`;
}

async function collectCandidates(input) {
  const wanted = new Set(VIDEO_IDS);
  const byVideo = new Map(VIDEO_IDS.map((id) => [id, []]));

  const rl = readline.createInterface({
    input: fs.createReadStream(input),
    crlfDelay: Infinity,
  });

  let lines = 0;
  for await (const line of rl) {
    if (!line.trim()) continue;
    lines += 1;

    const record = JSON.parse(line);
    if (!wanted.has(record.video_id)) continue;
    if (record.question_class !== TARGET_QUESTION_CLASS) continue;

    byVideo.get(record.video_id).push(record);
  }

  console.log(`  read ${lines} records from ${path.basename(input)}`);
  return byVideo;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(args.input)) {
    throw new Error(`Input not found: ${args.input}`);
  }

  console.log("Verifying committed YouTube metadata...");
  verifyVideoMeta();

  console.log(`Reading ${args.input}...`);
  const byVideo = await collectCandidates(args.input);

  const glbNodes = {
    P01: loadGlbNodeNames("P01"),
    P04: loadGlbNodeNames("P04"),
  };

  const generatedAt = new Date().toISOString().slice(0, 10);
  const rows = [];
  let totalTrajectories = 0;
  let totalBytes = 0;

  let totalOccluded = 0;

  for (const videoId of VIDEO_IDS) {
    const target = targetPathOf(videoId);
    const drop = (reason, extra = {}) => {
      if (!args.dryRun && fs.existsSync(target)) fs.rmSync(target);
      rows.push({ video: videoId, picked: 0, dropped: true, reason, ...extra });
    };

    if (EXCLUDED_VIDEOS.has(videoId)) {
      drop("excluded by hand");
      continue;
    }

    const candidates = byVideo.get(videoId).map(describe);
    const pool = candidates.filter(isEligible);
    const selected = selectTrajectories(pool, args.perVideo).filter(
      (candidate) => !EXCLUDED_TRAJECTORIES.has(shortKey(candidate.trajectory_id)),
    );

    if (selected.length === 0) {
      drop(
        pool.length === 0
          ? "no anchor has its last placement before its last visible time"
          : "every selected anchor was excluded by hand",
        { pool: candidates.length, eligible: pool.length },
      );
      continue;
    }

    const trajectoryMap = {};
    for (const { record } of selected) {
      const trajectory = reshapeRecord(record);
      assertTrajectory(trajectory, glbNodes[userIdOf(videoId)], videoId);

      // Keys are the short suffix after "__", matching the old dropdown labels.
      const key = trajectory.trajectory_id.split("__").pop();
      if (trajectoryMap[key]) {
        throw new Error(`${videoId}: duplicate trajectory key ${key}`);
      }
      trajectoryMap[key] = trajectory;
    }

    const source = renderModule(videoId, trajectoryMap, {
      ...VIDEO_META[videoId],
      duration: durationOf(videoId),
      input: args.input,
      generatedAt,
    });

    if (!args.dryRun) {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, source, "utf8");
    }

    const occluded = selected.filter((c) => c.status === "occluded").length;
    totalTrajectories += selected.length;
    totalOccluded += occluded;
    totalBytes += Buffer.byteLength(source);

    rows.push({
      video: videoId,
      pool: candidates.length,
      eligible: pool.length,
      picked: selected.length,
      occluded,
      horizons: selected.map((c) => c.horizon_sec).join(", "),
      objects: selected.map((c) => c.object_a_name).join(", "),
      kb: Math.round(Buffer.byteLength(source) / 1024),
    });
  }

  const written = rows.filter((row) => !row.dropped);
  console.log(
    `\n${args.dryRun ? "Would write" : "Wrote"} ${written.length} files:\n`,
  );

  for (const row of rows) {
    if (row.dropped) {
      console.log(`  ${row.video}  DROPPED — ${row.reason}`);
      continue;
    }

    console.log(
      `  ${row.video}  pool=${String(row.pool).padStart(2)}  ` +
        `eligible=${String(row.eligible).padStart(2)}  picked=${row.picked}` +
        `${row.occluded ? ` (${row.occluded} occluded)` : ""}  ` +
        `${String(row.kb).padStart(3)} KB`,
    );
    console.log(`    horizons: ${row.horizons} s`);
    console.log(`    objects:  ${row.objects}`);
  }

  const occludedShare = totalTrajectories
    ? Math.round((totalOccluded / totalTrajectories) * 1000) / 10
    : 0;

  console.log(
    `\n  ${totalTrajectories} trajectories, ${totalTrajectories * 8} questions, ` +
      `${Math.round(totalBytes / 1024)} KB of source.` +
      `\n  ${totalOccluded} occluded anchors (${occludedShare}%); ` +
      `the rest are out of view.`,
  );
}

main().catch((error) => {
  console.error(`\nbuild-question-data failed: ${error.message}`);
  process.exit(1);
});
