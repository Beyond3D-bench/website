/**
 * Benchmark results, transcribed from the paper.
 *
 * Table 2 — VLM accuracy (%) on Beyond3D
 * Figure 6 — Visibility-state estimation
 * Figure 4 — Performance across temporal conditions
 */

export type Setting = "text" | "video";
export type Family = "general" | "specialized";

export type Column = {
  key: string;
  label: string;
  group: string;
  questions: number;
};

/** Column order used by every `scores` array below. */
export const COLUMNS: Column[] = [
  { key: "macro", label: "Macro avg.", group: "", questions: 9000 },
  {
    key: "visibility",
    label: "Visibility check",
    group: "Visual grounding",
    questions: 2000,
  },
  {
    key: "lastVisible",
    label: "Last visible time",
    group: "Temporal grounding",
    questions: 1000,
  },
  {
    key: "lastPlacement",
    label: "Last placement time",
    group: "Temporal grounding",
    questions: 1000,
  },
  {
    key: "fixture",
    label: "Nearest fixture",
    group: "Scene localization",
    questions: 1000,
  },
  {
    key: "ocDirection",
    label: "Object–camera direction",
    group: "3D spatial perception",
    questions: 1000,
  },
  {
    key: "ocDistance",
    label: "Object–camera distance",
    group: "3D spatial perception",
    questions: 1000,
  },
  {
    key: "ooDirection",
    label: "Object–object direction",
    group: "3D spatial perception",
    questions: 1000,
  },
  {
    key: "ooDistance",
    label: "Object–object distance",
    group: "3D spatial perception",
    questions: 1000,
  },
];

export const CHANCE = [29.7, 50.0, 20.0, 20.0, 22.7, 25.0, 33.3, 33.3, 33.3];

export type ModelRow = {
  model: string;
  size: string;
  family: Family;
  setting: Setting;
  scores: number[];
};

export const RESULTS: ModelRow[] = [
  // ── Text only ──────────────────────────────────────────────
  {
    model: "Qwen-3.6",
    size: "35B-A3B",
    family: "general",
    setting: "text",
    scores: [31.0, 50.0, 20.9, 21.2, 33.4, 24.6, 32.5, 32.6, 33.0],
  },
  {
    model: "Qwen-3.6",
    size: "27B",
    family: "general",
    setting: "text",
    scores: [31.7, 49.5, 17.8, 19.0, 40.2, 25.0, 33.6, 34.3, 34.1],
  },
  {
    model: "Qwen-3.5",
    size: "9B",
    family: "general",
    setting: "text",
    scores: [31.5, 50.0, 21.1, 21.8, 36.5, 25.9, 32.6, 32.0, 32.1],
  },
  {
    model: "Qwen-3-VL",
    size: "8B",
    family: "general",
    setting: "text",
    scores: [30.2, 50.4, 19.5, 20.4, 25.1, 25.6, 33.8, 34.0, 32.7],
  },
  {
    model: "InternVL-3.5",
    size: "8B",
    family: "general",
    setting: "text",
    scores: [30.8, 50.2, 21.5, 20.3, 27.2, 25.2, 33.2, 35.9, 32.8],
  },
  {
    model: "VLM-3R",
    size: "7B",
    family: "specialized",
    setting: "text",
    scores: [31.0, 50.0, 21.3, 19.4, 34.5, 24.6, 31.8, 33.7, 33.0],
  },
  {
    model: "Spatial-MLLM",
    size: "6B",
    family: "specialized",
    setting: "text",
    scores: [30.0, 49.4, 22.4, 19.8, 22.2, 25.1, 32.7, 34.1, 34.0],
  },
  {
    model: "Cambrian-P",
    size: "7B",
    family: "specialized",
    setting: "text",
    scores: [31.9, 51.1, 19.7, 18.0, 41.3, 25.0, 33.4, 33.5, 33.3],
  },
  {
    model: "SenseNova-SI",
    size: "8B",
    family: "specialized",
    setting: "text",
    scores: [29.0, 51.2, 18.0, 18.1, 20.7, 26.0, 33.7, 31.3, 33.1],
  },

  // ── Video + text ───────────────────────────────────────────
  {
    model: "Qwen-3.6",
    size: "35B-A3B",
    family: "general",
    setting: "video",
    scores: [39.6, 66.3, 23.3, 29.4, 51.3, 33.7, 35.9, 41.1, 35.6],
  },
  {
    model: "Qwen-3.6",
    size: "27B",
    family: "general",
    setting: "video",
    scores: [42.2, 68.4, 30.4, 39.4, 50.0, 34.6, 34.9, 43.6, 36.2],
  },
  {
    model: "Qwen-3.5",
    size: "9B",
    family: "general",
    setting: "video",
    scores: [38.6, 59.3, 28.2, 30.5, 47.9, 33.4, 39.2, 34.7, 35.8],
  },
  {
    model: "Qwen-3-VL",
    size: "8B",
    family: "general",
    setting: "video",
    scores: [36.0, 59.8, 21.3, 25.7, 48.2, 32.7, 33.6, 31.5, 35.2],
  },
  {
    model: "InternVL-3.5",
    size: "8B",
    family: "general",
    setting: "video",
    scores: [35.8, 60.4, 21.8, 20.7, 38.9, 31.4, 42.6, 35.8, 34.9],
  },
  {
    model: "VLM-3R",
    size: "7B",
    family: "specialized",
    setting: "video",
    scores: [37.2, 58.8, 23.9, 23.2, 49.8, 35.6, 34.4, 35.6, 36.5],
  },
  {
    model: "Spatial-MLLM",
    size: "6B",
    family: "specialized",
    setting: "video",
    scores: [31.6, 53.3, 22.8, 19.2, 29.5, 24.6, 34.8, 34.0, 34.8],
  },
  {
    model: "Cambrian-P",
    size: "7B",
    family: "specialized",
    setting: "video",
    scores: [33.5, 52.2, 20.0, 17.5, 50.5, 27.3, 33.4, 33.9, 33.2],
  },
  {
    model: "SenseNova-SI",
    size: "8B",
    family: "specialized",
    setting: "video",
    scores: [35.4, 57.9, 20.6, 22.9, 44.4, 29.8, 32.9, 34.9, 39.8],
  },
];

/**
 * Figure 6 — visibility check split by the ground-truth state of the target.
 * Video + text setting; 1,000 out-of-sight anchors and 1,000 visible controls.
 *
 * The two halves should average to the Visibility Check column of Table 2.
 * Eight of the nine models check out; Spatial-MLLM averages 50.8 against the
 * 53.3 in the table, so one of its two figures below is misread from the
 * figure and needs confirming against the source data.
 */
export type VisibilitySplit = {
  model: string;
  notVisible: number;
  visible: number;
};

export const VISIBILITY_SPLIT: VisibilitySplit[] = [
  { model: "Qwen-3.6-35B", notVisible: 48.7, visible: 83.8 },
  { model: "Qwen-3.6-27B", notVisible: 71.8, visible: 65.0 },
  { model: "Qwen-3.5", notVisible: 57.1, visible: 61.4 },
  { model: "Qwen-3-VL", notVisible: 76.3, visible: 43.2 },
  { model: "InternVL-3.5", notVisible: 87.8, visible: 32.9 },
  { model: "VLM-3R", notVisible: 41.3, visible: 76.3 },
  { model: "Spatial-MLLM", notVisible: 18.2, visible: 83.3 },
  { model: "Cambrian-P", notVisible: 12.0, visible: 92.3 },
  { model: "SenseNova-SI", notVisible: 53.3, visible: 62.5 },
];

/**
 * Figure 4 — macro accuracy averaged over the nine evaluated models,
 * split by out-of-sight horizon and by query time.
 */
export type TemporalBucket = {
  label: string;
  range: string;
  accuracy: number;
};

/**
 * Figure 3 — evaluation-set statistics, transcribed from the figure's own data
 * files (data/evaluation_set_statistics/horizon.dat and movement.dat).
 * `sec` is the bin centre; bins are 3 s wide.
 */
export type HorizonBin = { sec: number; count: number };

export const HORIZON_BINS: HorizonBin[] = [
  { sec: 1.5, count: 125 },
  { sec: 4.5, count: 98 },
  { sec: 7.5, count: 79 },
  { sec: 10.5, count: 57 },
  { sec: 13.5, count: 84 },
  { sec: 16.5, count: 57 },
  { sec: 19.5, count: 26 },
  { sec: 22.5, count: 28 },
  { sec: 25.5, count: 19 },
  { sec: 28.5, count: 20 },
  { sec: 31.5, count: 106 },
  { sec: 34.5, count: 45 },
  { sec: 37.5, count: 27 },
  { sec: 40.5, count: 68 },
  { sec: 43.5, count: 29 },
  { sec: 46.5, count: 15 },
  { sec: 49.5, count: 27 },
  { sec: 52.5, count: 16 },
  { sec: 55.5, count: 10 },
  { sec: 58.5, count: 8 },
  { sec: 61.5, count: 12 },
  { sec: 64.5, count: 1 },
  { sec: 67.5, count: 6 },
  { sec: 70.5, count: 8 },
  { sec: 73.5, count: 5 },
  { sec: 76.5, count: 7 },
  { sec: 79.5, count: 5 },
  { sec: 82.5, count: 4 },
  { sec: 85.5, count: 3 },
  { sec: 88.5, count: 5 },
];

export type MovementBin = { moves: number; count: number };

export const MOVEMENT_BINS: MovementBin[] = [
  { moves: 1, count: 392 },
  { moves: 2, count: 308 },
  { moves: 3, count: 155 },
  { moves: 4, count: 64 },
  { moves: 5, count: 40 },
  { moves: 6, count: 19 },
  { moves: 7, count: 6 },
  { moves: 8, count: 5 },
  { moves: 9, count: 4 },
  { moves: 10, count: 5 },
  { moves: 11, count: 2 },
];

export const HORIZON_BUCKETS: TemporalBucket[] = [
  { label: "Short", range: "2–10 s", accuracy: 40.4 },
  { label: "Medium", range: "11–30 s", accuracy: 34.8 },
  { label: "Long", range: "> 30 s", accuracy: 31.9 },
];

/**
 * Figure 4 (left) — macro accuracy per model across out-of-sight horizons,
 * from data/performance_across_temporal_conditions/horizon_curves.dat.
 */
export const HORIZON_LABELS = ["2–10 s", "11–30 s", "> 30 s"];

export type ModelCurve = { model: string; values: number[] };

export const HORIZON_CURVES: ModelCurve[] = [
  { model: "Qwen-3.6-27B", values: [48.61, 41.48, 37.76] },
  { model: "Qwen-3.5-9B", values: [44.29, 36.64, 34.13] },
  { model: "Qwen-3.6-35B", values: [44.18, 35.25, 32.71] },
  { model: "InternVL-3.5", values: [42.53, 39.0, 36.19] },
  { model: "Qwen-3-VL", values: [42.08, 37.12, 34.99] },
  { model: "VLM-3R", values: [38.66, 34.12, 32.34] },
  { model: "SenseNova-SI", values: [36.41, 36.82, 31.25] },
  { model: "Cambrian-P", values: [35.21, 26.31, 23.91] },
  { model: "Spatial-MLLM", values: [31.87, 26.43, 23.43] },
];

export const HORIZON_RANDOM = 29.72;

/**
 * Figure 7 — the temporal-cue ablation on Qwen-3.6-27B, from the figure's own
 * pgfplotstable. Errors are 95% bootstrapped confidence intervals.
 */
export type CuePoint = {
  label: string;
  range: string;
  baseline: number;
  baselineErr: [number, number];
  cue: number;
  cueErr: [number, number];
};

export const TEMPORAL_CUE_BY_HORIZON: CuePoint[] = [
  {
    label: "Short",
    range: "2–10 s",
    baseline: 53.3,
    baselineErr: [2.8, 2.75],
    cue: 57.76,
    cueErr: [2.7, 2.7],
  },
  {
    label: "Medium",
    range: "11–30 s",
    baseline: 43.84,
    baselineErr: [2.5, 2.5],
    cue: 48.1,
    cueErr: [2.55, 2.5],
  },
  {
    label: "Long",
    range: "> 30 s",
    baseline: 38.42,
    baselineErr: [2.35, 2.4],
    cue: 43.81,
    cueErr: [2.4, 2.45],
  },
];

/** Paired improvement per question type, in percentage points. */
export type CueGain = { label: string; gain: number; err: number };

export const TEMPORAL_CUE_GAINS: CueGain[] = [
  { label: "Visibility", gain: 7.5, err: 2.7 },
  { label: "Nearest fixture", gain: 3.2, err: 2.0 },
  { label: "Object–camera direction", gain: 8.4, err: 2.6 },
  { label: "Object–camera distance", gain: 2.5, err: 1.2 },
  { label: "Object–object direction", gain: 1.9, err: 2.7 },
  { label: "Object–object distance", gain: 4.7, err: 1.7 },
];

export const QUERY_TIME_BUCKETS: TemporalBucket[] = [
  { label: "Early", range: "0–149 s", accuracy: 34.9 },
  { label: "Middle", range: "150–299 s", accuracy: 38.4 },
  { label: "Late", range: "300–600 s", accuracy: 36.6 },
];
