# scripts

Both scripts are development tools. The site itself is self-contained: they
write their output into the repo, and nothing at runtime reads anything outside
it.

## build-question-data.mjs

Regenerates the question-viewer data under `src/Components/Json/PXX/` from the
VQA export.

```
npm run build-questions
# or, with options:
node ./scripts/build-question-data.mjs [--input <jsonl>] [--per-video N] [--dry-run]
```

Defaults to `/Users/ivo/Documents/ETHZ/3DVision/vqa/clean_no_cue.jsonl` and four
trajectories per video (`--per-video 0` takes all of them).

It only emits the ten videos listed in `VIDEO_META`, because those are the ones
that also have a room model in `public/models/`, camera tracks in
`public/Camera/`, and the team's two YouTube uploads. Only
`oos_staged_trajectory` records are used — the `visible_staged_trajectory`
controls have a single step and no geometry.

The YouTube URLs live nowhere but in the files this script overwrites, so they
are pinned in `VIDEO_META` and cross-checked against the committed files before
anything is written. Adding a video means adding its two URLs there by hand.

Output is deterministic: re-running produces byte-identical files. The script
asserts, before writing, that every step kept the metadata its panel needs and
that each `raw_correct_fixture` resolves to a real node in the `.glb`.

## split-framewise-jsonl.mjs

```
node ./scripts/split-framewise-jsonl.mjs
```

Splits each `src/Components/Camera/PXX/<video-id>/framewise_info.jsonl` into
20 MiB parts under `public/Camera/PXX/<video-id>/framewise_info/`, with a
`manifest.json`, so no single asset exceeds Cloudflare's 25 MiB limit. Re-run it
after adding camera data for a new video.

The `.jsonl` inputs are deliberately not committed — only the chunked output the
app fetches is. With no inputs present the script finds nothing and exits
cleanly. Copy a video's `.jsonl` back from
`hd-epic-annotations/Intermediate_data/PXX/<video-id>/` to re-split it.
