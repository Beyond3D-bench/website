/**
 * Table 1 — comparison with related spatial and memory benchmarks,
 * transcribed from sec/related.tex.
 */

export type Mark = "yes" | "partial" | "no";

export type ComparisonColumn = {
  key: string;
  label: string;
  title: string;
  /** The two columns where Beyond3D is the only ✓ — the reason it exists. */
  decisive?: boolean;
};

export const COMPARISON_COLUMNS: ComparisonColumn[] = [
  { key: "ego", label: "Ego.", title: "Egocentric input" },
  { key: "3d", label: "3D", title: "Explicit 3D spatial reasoning" },
  { key: "temLoc", label: "Tem-Loc.", title: "Temporal localization" },
  { key: "spaUpd", label: "Spa-Upd.", title: "Spatial-state update" },
  { key: "diag", label: "Diag.", title: "Multi-level diagnostic decomposition" },
  {
    key: "updOos",
    label: "Upd-OOS",
    title: "Updated target queried after loss of visibility",
    decisive: true,
  },
  {
    key: "geoVis",
    label: "Geo-Vis.",
    title: "Geometry-aware visibility",
    decisive: true,
  },
];

export type ComparisonRow = {
  name: string;
  group: string;
  marks: Mark[];
  ours?: boolean;
};

const Y: Mark = "yes";
const P: Mark = "partial";
const N: Mark = "no";

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    group: "Temporal and object memory",
    name: "EgoTempo",
    marks: [Y, N, P, P, N, N, N],
  },
  {
    group: "Temporal and object memory",
    name: "EgoMemReason",
    marks: [Y, N, P, P, N, N, N],
  },
  {
    group: "Static 3D spatial reasoning",
    name: "VSI-Bench",
    marks: [Y, Y, N, N, N, N, N],
  },
  {
    group: "Dynamic spatial state reasoning",
    name: "EOC-Bench",
    marks: [Y, N, Y, Y, N, N, N],
  },
  {
    group: "Dynamic spatial state reasoning",
    name: "HD-EPIC",
    marks: [Y, Y, Y, Y, N, N, N],
  },
  {
    group: "Dynamic spatial state reasoning",
    name: "EgoDynamic4D",
    marks: [Y, Y, P, Y, N, N, N],
  },
  {
    group: "Dynamic spatial state reasoning",
    name: "UCS-Bench",
    marks: [Y, Y, P, P, P, P, N],
  },
  {
    group: "Dynamic spatial state reasoning",
    name: "SCP-Bench",
    marks: [N, N, N, P, P, N, N],
  },
  {
    group: "Dynamic spatial state reasoning",
    name: "Ego4D-VQ3D",
    marks: [Y, Y, Y, N, N, N, N],
  },
  {
    group: "Dynamic spatial state reasoning",
    name: "SpaMEM",
    marks: [N, Y, Y, Y, Y, P, P],
  },
  {
    group: "Dynamic spatial state reasoning",
    name: "Beyond3D (ours)",
    marks: [Y, Y, Y, Y, Y, Y, Y],
    ours: true,
  },
];
