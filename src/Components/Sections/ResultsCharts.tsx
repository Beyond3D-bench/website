import {
  HORIZON_BUCKETS,
  HORIZON_CURVES,
  HORIZON_LABELS,
  HORIZON_RANDOM,
  QUERY_TIME_BUCKETS,
  TEMPORAL_CUE_BY_HORIZON,
  TEMPORAL_CUE_GAINS,
  VISIBILITY_SPLIT,
} from "../Results/Data";
import type { TemporalBucket } from "../Results/Data";

const MACRO_CHANCE = 29.7;

function Swatch({ color }: { color: string }) {
  return (
    <span
      className="inline-block h-2.5 w-2.5 shrink-0 rounded-[2px]"
      style={{ background: color }}
    />
  );
}

/**
 * Figure 6 — the visibility check split by whether the target really is
 * out of sight. Two series, so identity is carried by the legend and by the
 * direct labels, never by colour alone.
 */
export function VisibilityChart() {
  return (
    <figure className="viz m-0">
      <figcaption className="mb-1 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
        Models do not agree on what &ldquo;not visible&rdquo; looks like
      </figcaption>

      <p className="mb-5 max-w-2xl text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
        Visibility-check accuracy, split by the ground-truth state of the
        target. A robust model would score well on both. Instead most lean hard
        one way: InternVL-3.5 assumes the object is gone, Cambrian-P assumes it
        is still there.
      </p>

      <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-slate-600 dark:text-[#8899b8]">
        <span className="inline-flex items-center gap-2">
          <Swatch color="var(--series-1)" />
          Target is not visible
        </span>
        <span className="inline-flex items-center gap-2">
          <Swatch color="var(--series-2)" />
          Target is visible
        </span>
        <span className="ml-auto font-mono text-[11px] text-slate-400 dark:text-[#3a4560]">
          Video + text · accuracy %
        </span>
      </div>

      <div className="flex flex-col gap-3.5">
        {VISIBILITY_SPLIT.map((row) => {
          const gap = Math.abs(row.notVisible - row.visible);

          return (
            <div
              key={row.model}
              className="group grid grid-cols-[minmax(96px,132px)_1fr] items-center gap-3 rounded-md py-1 transition-colors hover:bg-blue-500/5 sm:gap-4"
            >
              <div className="truncate text-[12px] text-slate-700 dark:text-[#8899b8]">
                {row.model}
              </div>

              <div className="relative flex flex-col gap-0.5">
                <Bar
                  value={row.notVisible}
                  color="var(--series-1)"
                  label={`${row.model}: ${row.notVisible.toFixed(1)}% correct when the target is not visible`}
                />
                <Bar
                  value={row.visible}
                  color="var(--series-2)"
                  label={`${row.model}: ${row.visible.toFixed(1)}% correct when the target is visible`}
                />

                <span
                  className="pointer-events-none absolute -top-1 right-0 rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-500 opacity-0 shadow-sm transition-opacity group-hover:opacity-100 dark:border-[#1e2a40] dark:bg-[#0d1320] dark:text-[#8899b8]"
                  aria-hidden="true"
                >
                  {gap.toFixed(1)} pt gap
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

type BarProps = {
  value: number;
  color: string;
  label: string;
};

function Bar({ value, color, label }: BarProps) {
  return (
    <div className="flex items-center gap-2" title={label}>
      <div
        className="h-2.5 rounded-r-[4px]"
        style={{ width: `${value}%`, background: color }}
      />
      <span className="font-mono text-[11px] tabular-nums text-slate-500 dark:text-[#5a6a88]">
        {value.toFixed(1)}
      </span>
    </div>
  );
}

/**
 * Figure 4 (left) — per-model macro accuracy across horizons. Nine series is
 * past the point where colour can tell them apart, so this is drawn as
 * emphasis: the leading model in the accent hue, the rest as context.
 */
export function HorizonCurves() {
  const [best, ...rest] = HORIZON_CURVES;

  // Plot geometry, in viewBox units.
  const w = 420;
  const h = 240;
  const pad = { top: 16, right: 16, bottom: 34, left: 38 };
  const yMin = 20;
  const yMax = 50;

  const x = (i: number) =>
    pad.left + (i / (HORIZON_LABELS.length - 1)) * (w - pad.left - pad.right);
  const y = (v: number) =>
    pad.top + (1 - (v - yMin) / (yMax - yMin)) * (h - pad.top - pad.bottom);

  const path = (values: number[]) =>
    values.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ");

  return (
    <figure className="viz m-0">
      <figcaption className="mb-1 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
        Every model degrades as the horizon grows
      </figcaption>
      <p className="mb-5 max-w-2xl text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
        Macro accuracy against how long the target had been out of sight. The
        longer the object has been gone, the more intervening activity a model
        must hold the state across — and every one of the nine falls. Averaged
        over models, 40.4% at short horizons down to 31.9% at long ones.
      </p>

      <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-slate-600 dark:text-[#8899b8]">
        <span className="inline-flex items-center gap-2">
          <Swatch color="var(--series-1)" />
          {best.model} (best)
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-0.5 w-3 bg-slate-300 dark:bg-[#2a3a56]" />
          Eight other models
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-px w-3 border-t border-dashed border-slate-400 dark:border-[#4a5870]" />
          Chance
        </span>
      </div>

      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full"
        role="img"
        aria-label="Line chart of macro accuracy against out-of-sight horizon for nine models; all decline from short to long horizons."
      >
        {[20, 30, 40, 50].map((tick) => (
          <g key={tick}>
            <line
              x1={pad.left}
              x2={w - pad.right}
              y1={y(tick)}
              y2={y(tick)}
              stroke="var(--viz-grid)"
              strokeWidth={0.75}
            />
            <text
              x={pad.left - 7}
              y={y(tick) + 3.5}
              textAnchor="end"
              className="fill-slate-400 dark:fill-[#3a4560]"
              fontSize={9}
              fontFamily="ui-monospace, monospace"
            >
              {tick}
            </text>
          </g>
        ))}

        <line
          x1={pad.left}
          x2={w - pad.right}
          y1={y(HORIZON_RANDOM)}
          y2={y(HORIZON_RANDOM)}
          stroke="var(--viz-baseline)"
          strokeWidth={1}
          strokeDasharray="4 3"
        />

        {rest.map((curve) => (
          <path
            key={curve.model}
            d={path(curve.values)}
            fill="none"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-slate-300 dark:stroke-[#2a3a56]"
          >
            <title>
              {curve.model}: {curve.values.map((v) => v.toFixed(1)).join(" → ")}
            </title>
          </path>
        ))}

        <path
          d={path(best.values)}
          fill="none"
          stroke="var(--series-1)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>
            {best.model}: {best.values.map((v) => v.toFixed(1)).join(" → ")}
          </title>
        </path>

        {best.values.map((v, i) => (
          <circle
            key={HORIZON_LABELS[i]}
            cx={x(i)}
            cy={y(v)}
            r={3.5}
            fill="var(--series-1)"
          />
        ))}

        {HORIZON_LABELS.map((label, i) => (
          <text
            key={label}
            x={x(i)}
            y={h - 12}
            textAnchor={i === 0 ? "start" : i === 2 ? "end" : "middle"}
            className="fill-slate-500 dark:fill-[#4a5870]"
            fontSize={10}
          >
            {label}
          </text>
        ))}
      </svg>

      <div className="mt-2 font-mono text-[10px] text-slate-400 dark:text-[#3a4560]">
        Out-of-sight horizon · macro accuracy %
      </div>
    </figure>
  );
}

/**
 * Figure 7 — the temporal-cue ablation on Qwen-3.6-27B. Two panels: accuracy
 * with and without the cue across horizons, and the paired per-task gain.
 */
export function AblationChart() {
  const gainMax = 12;

  return (
    <figure className="viz m-0">
      <figcaption className="mb-1 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
        Naming the movement intervals lifts everything downstream
      </figcaption>
      <p className="mb-6 max-w-2xl text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
        Qwen-3.6-27B, given a textual cue listing the intervals in which the
        target was actually moved. Accuracy rises at every horizon, and every
        question type improves — which places temporal retrieval upstream of the
        rest. Bars show 95% bootstrapped confidence intervals.
      </p>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-slate-600 dark:text-[#8899b8]">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-0.5 w-3 bg-slate-300 dark:bg-[#2a3a56]" />
              Baseline
            </span>
            <span className="inline-flex items-center gap-2">
              <Swatch color="var(--series-1)" />
              With temporal cue
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {TEMPORAL_CUE_BY_HORIZON.map((point) => (
              <div key={point.label}>
                <div className="mb-2 flex items-baseline justify-between text-[12px]">
                  <span className="text-slate-700 dark:text-[#8899b8]">
                    {point.label}
                    <span className="ml-2 font-mono text-[11px] text-slate-400 dark:text-[#3a4560]">
                      {point.range}
                    </span>
                  </span>
                  <span className="font-mono tabular-nums text-slate-500 dark:text-[#5a6a88]">
                    {point.baseline.toFixed(1)} → {point.cue.toFixed(1)}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <div
                    className="h-2.5 rounded-r-[4px] bg-slate-300 dark:bg-[#2a3a56]"
                    style={{ width: `${(point.baseline / 65) * 100}%` }}
                    title={`Baseline, ${point.label.toLowerCase()} horizon: ${point.baseline.toFixed(1)}%`}
                  />
                  <div
                    className="h-2.5 rounded-r-[4px]"
                    style={{
                      width: `${(point.cue / 65) * 100}%`,
                      background: "var(--series-1)",
                    }}
                    title={`With temporal cue, ${point.label.toLowerCase()} horizon: ${point.cue.toFixed(1)}%`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 font-mono text-[10px] text-slate-400 dark:text-[#3a4560]">
            Macro accuracy % by out-of-sight horizon
          </div>
        </div>

        <div>
          <div className="mb-4 text-[12px] text-slate-600 dark:text-[#8899b8]">
            Gain per question type, in percentage points
          </div>

          <div className="flex flex-col gap-3.5">
            {TEMPORAL_CUE_GAINS.map((gain) => {
              const crossesZero = gain.gain - gain.err <= 0;

              return (
                <div
                  key={gain.label}
                  className="grid grid-cols-[minmax(88px,148px)_1fr] items-center gap-3"
                >
                  <div className="truncate text-[12px] text-slate-700 dark:text-[#8899b8]">
                    {gain.label}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="relative h-3 flex-1">
                      <div
                        className="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-r-[4px]"
                        style={{
                          width: `${(gain.gain / gainMax) * 100}%`,
                          background: crossesZero
                            ? "var(--viz-baseline)"
                            : "var(--series-1)",
                        }}
                        title={`${gain.label}: +${gain.gain} points (95% CI ±${gain.err})`}
                      />
                      <div
                        className="absolute top-1/2 h-px -translate-y-1/2 bg-slate-400 dark:bg-[#4a5870]"
                        style={{
                          left: `${((gain.gain - gain.err) / gainMax) * 100}%`,
                          width: `${((2 * gain.err) / gainMax) * 100}%`,
                        }}
                      />
                    </div>

                    <span className="w-11 shrink-0 text-right font-mono text-[11px] tabular-nums text-slate-500 dark:text-[#5a6a88]">
                      +{gain.gain.toFixed(1)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 font-mono text-[10px] text-slate-400 dark:text-[#3a4560]">
            Grey where the confidence interval reaches zero
          </div>
        </div>
      </div>
    </figure>
  );
}

/**
 * Macro accuracy averaged over the nine models, by out-of-sight horizon and by
 * query time. One series each, so a single hue is correct.
 */
export function TemporalChart() {
  return (
    <figure className="viz m-0">
      <figcaption className="mb-1 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
        Difficulty tracks the horizon, not the video length
      </figcaption>

      <p className="mb-6 max-w-2xl text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
        Macro accuracy averaged over the nine evaluated models. Accuracy falls
        monotonically as the target stays out of sight for longer, but varies
        non-monotonically with how far into the video the question is asked.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
        <BucketPanel
          title="Out-of-sight horizon"
          buckets={HORIZON_BUCKETS}
        />
        <BucketPanel title="Query time" buckets={QUERY_TIME_BUCKETS} />
      </div>
    </figure>
  );
}

type BucketPanelProps = {
  title: string;
  buckets: TemporalBucket[];
};

/** Bars run 0–50%, with a dashed marker at the 29.7% chance rate. */
function BucketPanel({ title, buckets }: BucketPanelProps) {
  const scale = 50;

  return (
    <div>
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.06em] text-slate-500 dark:text-[#4a5870]">
        {title}
      </div>

      <div className="relative flex flex-col gap-4">
        <div
          className="pointer-events-none absolute inset-y-0 z-10 border-l border-dashed"
          style={{
            left: `${(MACRO_CHANCE / scale) * 100}%`,
            borderColor: "var(--viz-baseline)",
          }}
        />

        {buckets.map((bucket) => (
          <div key={bucket.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-2 text-[12px]">
              <span className="text-slate-700 dark:text-[#8899b8]">
                {bucket.label}
                <span className="ml-2 font-mono text-[11px] text-slate-400 dark:text-[#3a4560]">
                  {bucket.range}
                </span>
              </span>
              <span className="font-mono tabular-nums text-slate-500 dark:text-[#5a6a88]">
                {bucket.accuracy.toFixed(1)}
              </span>
            </div>

            <div
              className="h-2.5 rounded-r-[4px]"
              style={{
                width: `${(bucket.accuracy / scale) * 100}%`,
                background: "var(--series-1)",
              }}
              title={`${bucket.label} (${bucket.range}): ${bucket.accuracy.toFixed(1)}% macro accuracy`}
            />
          </div>
        ))}
      </div>

      <div className="mt-3 font-mono text-[10px] text-slate-400 dark:text-[#3a4560]">
        Dashed line — {MACRO_CHANCE}% chance
      </div>
    </div>
  );
}
