import { HORIZON_BINS, MOVEMENT_BINS } from "../Results/Data";

type StatisticsProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

/** Horizon stratification boundaries used when sampling the evaluation set. */
const HORIZON_BOUNDARIES = [
  { at: 10, label: "short" },
  { at: 30, label: "medium" },
];

const HORIZON_MAX_SEC = 90;

function HorizonChart() {
  const peak = Math.max(...HORIZON_BINS.map((b) => b.count));

  return (
    <figure className="viz m-0">
      <figcaption className="mb-1 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
        Out-of-sight horizon
      </figcaption>
      <p className="mb-6 text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
        How long the target had already been out of sight when the question is
        asked. Sampling is balanced across short (2–10 s), medium (11–30 s) and
        long (&gt; 30 s) horizons.
      </p>

      <div className="relative h-40 sm:h-48">
        {HORIZON_BOUNDARIES.map((boundary) => (
          <div
            key={boundary.at}
            className="absolute inset-y-0 z-10 border-l border-dashed"
            style={{
              left: `${(boundary.at / HORIZON_MAX_SEC) * 100}%`,
              borderColor: "var(--viz-baseline)",
            }}
          />
        ))}

        <div className="flex h-full items-end gap-px">
          {HORIZON_BINS.map((bin) => (
            <div
              key={bin.sec}
              className="min-w-0 flex-1 rounded-t-[2px]"
              style={{
                height: `${(bin.count / peak) * 100}%`,
                background: "var(--series-1)",
              }}
              title={`${bin.sec - 1.5}–${bin.sec + 1.5} s: ${bin.count} query anchors`}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 flex justify-between font-mono text-[10px] text-slate-400 dark:text-[#3a4560]">
        <span>0 s</span>
        <span>30 s</span>
        <span>60 s</span>
        <span>90 s</span>
      </div>
      <div className="mt-3 font-mono text-[10px] text-slate-400 dark:text-[#3a4560]">
        Dashed lines — horizon boundaries · 333 short · 333 medium · 334 long
      </div>
    </figure>
  );
}

function MovementChart() {
  const peak = Math.max(...MOVEMENT_BINS.map((b) => b.count));

  return (
    <figure className="viz m-0">
      <figcaption className="mb-1 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
        Target moves before the query
      </figcaption>
      <p className="mb-6 text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
        How many times the target had already been relocated. Seventy percent of
        anchors involve one or two moves, with a tail reaching eleven — so a
        model must keep updating the object&apos;s state, not just remember one
        placement.
      </p>

      {/* Bars are direct children of a fixed-height row: a percentage height
          only resolves against a parent with a definite height. */}
      <div className="mt-5 flex h-40 items-end gap-1.5 sm:h-48 sm:gap-2">
        {MOVEMENT_BINS.map((bin) => (
          <div
            key={bin.moves}
            className="relative min-w-0 flex-1 rounded-t-[3px]"
            style={{
              height: `${(bin.count / peak) * 100}%`,
              background: "var(--series-1)",
            }}
            title={`${bin.moves} move${bin.moves === 1 ? "" : "s"}: ${bin.count} query anchors`}
          >
            <span className="absolute -top-4.5 left-1/2 -translate-x-1/2 font-mono text-[9px] tabular-nums text-slate-400 dark:text-[#3a4560]">
              {bin.count}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex gap-1.5 sm:gap-2">
        {MOVEMENT_BINS.map((bin) => (
          <span
            key={bin.moves}
            className="min-w-0 flex-1 text-center font-mono text-[10px] text-slate-400 dark:text-[#3a4560]"
          >
            {bin.moves}
          </span>
        ))}
      </div>
      <div className="mt-3 font-mono text-[10px] text-slate-400 dark:text-[#3a4560]">
        Number of moves before the query time
      </div>
    </figure>
  );
}

export default function Statistics({ ref, visible }: StatisticsProps) {
  return (
    <section
      ref={ref}
      className={`fade-up ${visible ? "in" : ""} mx-auto max-w-275 px-5 py-14 sm:px-8 sm:py-20`}
    >
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
          The evaluation set
        </span>
      </div>

      <h2 className="mb-4 font-serif text-[clamp(28px,3vw,40px)] font-bold text-slate-950 dark:text-[#f0f2f8]">
        What the 1,000 anchors look like
      </h2>

      <p className="mb-12 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 dark:text-[#5a6a88]">
        The evaluation set spans 135 videos, nine participants, nine kitchens,
        581 target instances and 561 reference objects. At query time 900
        targets are outside the camera&apos;s field of view and 100 are
        geometrically occluded. A further 1,000 visible anchors serve as
        positive controls for the visibility check.
      </p>

      <div className="grid gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-16">
        <HorizonChart />
        <MovementChart />
      </div>
    </section>
  );
}
