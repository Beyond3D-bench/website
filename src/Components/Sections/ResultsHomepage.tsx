import React from "react";
import ResultsTable from "./ResultsTable";
import { AblationChart, HorizonCurves } from "./ResultsCharts";

type ResultsProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

const headline = [
  { value: "42.2%", label: "Best macro accuracy" },
  { value: "29.7%", label: "Chance" },
  { value: "31.9%", label: "Best without video" },
  { value: "9", label: "Models evaluated" },
];

const findings = [
  {
    title: "Video helps, but never enough",
    desc: "Adding the video prefix lifts macro accuracy for every model, by 1.6 to 10.5 points. The gains concentrate in visibility check (+9.4 on average) and nearest fixture (+14.4); temporal and spatial questions move far less.",
  },
  {
    title: "Difficulty is uneven across the chain",
    desc: "Relative to chance, models do best on nearest fixture (45.6% vs 22.7%) and visual grounding (59.6% vs 50.0%). Temporal grounding clears chance by only 4.5 points and 3D spatial perception by 3.6.",
  },
  {
    title: "Spatial specialization does not pay off here",
    desc: "General-purpose models lead. This is not a scale effect: Qwen-3.5 at 9B reaches 38.6%, above every comparably sized spatially specialized model (31.6–37.2%). Weak temporal grounding bottlenecks their 3D ability.",
  },
  {
    title: "Spatial answers fall back on visible evidence",
    desc: "Despite balanced ground-truth classes, camera-direction predictions skew toward the front quadrants and both distance tasks favour the nearest bin — the configurations the current frame happens to support.",
  },
];

const ablations = [
  {
    title: "Temporal cue",
    desc: "Prepending the intervals in which the target was actually moved improves every downstream question type, at every out-of-sight horizon. Locating the state-changing interaction is a real upstream bottleneck, not a symptom of weak 3D reasoning.",
  },
  {
    title: "Visibility cue",
    desc: "Adding an explicit statement that the target is not visible at query time lifts nearest-fixture accuracy by 8 points, but moves the four 3D spatial tasks by only 0 to 2.4. Knowing the object is gone helps recover where it is; it does not fix the geometry.",
  },
];

export default function Results({ ref, visible }: ResultsProps) {
  return (
    <section
      id="results"
      ref={ref}
      className={`
        fade-up ${visible ? "in" : ""}
        scroll-mt-4 px-5 py-14 sm:px-8 sm:py-20
      `}
    >
      <div className="mx-auto max-w-275">
        <div className="mb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Results
          </span>
        </div>

        <h2 className="mb-4 font-serif text-[clamp(28px,3vw,40px)] font-bold text-slate-950 dark:text-[#f0f2f8]">
          Out-of-sight reasoning is far from solved
        </h2>

        <p className="mb-10 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 dark:text-[#5a6a88]">
          We evaluate nine general-purpose and spatially specialized VLMs on all
          9,000 questions, using each author&apos;s released checkpoint without
          task-specific fine-tuning. Every model receives the 1 fps video prefix
          up to the query time; models with shorter context limits see a
          uniformly subsampled version of it, always including the query frame.
        </p>

        <div className="mb-12 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-7">
          {headline.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="min-w-0 shrink-0">
                <div className="mb-0.5 font-mono text-[17px] font-medium text-slate-900 dark:text-[#c5d0e8]">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.06em] text-slate-500 dark:text-[#4a5870]">
                  {stat.label}
                </div>
              </div>

              {i < headline.length - 1 && (
                <div className="hidden h-8 w-px shrink-0 bg-slate-200 sm:block dark:bg-[#1e2a40]" />
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="mb-6 max-w-3xl text-[13px] leading-6 text-slate-500 dark:text-[#4a5870]">
          Multiple-choice accuracy in percent. Macro average weights each
          question type equally, since the visibility check carries twice as
          many questions as the others. The best score per column is
          highlighted.
        </p>

        <ResultsTable />

        {/* ── FAILURE MODES ──────────────────────────────────── */}
        <h3 className="mb-8 mt-16 font-serif text-[clamp(22px,2.2vw,28px)] font-bold text-slate-950 sm:mt-20 dark:text-[#f0f2f8]">
          Where the accuracy goes
        </h3>

        <div className="mb-16 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {findings.map((finding) => (
            <div key={finding.title}>
              <h4 className="mb-2 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
                {finding.title}
              </h4>
              <p className="text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
                {finding.desc}
              </p>
            </div>
          ))}
        </div>

        <HorizonCurves />

        {/* ── ABLATIONS ──────────────────────────────────────── */}
        <h3 className="mb-4 mt-16 font-serif text-[clamp(22px,2.2vw,28px)] font-bold text-slate-950 sm:mt-20 dark:text-[#f0f2f8]">
          Handing the model the missing evidence
        </h3>

        <p className="mb-8 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 dark:text-[#5a6a88]">
          Two interventions on Qwen-3.6-27B, the strongest model in the main
          evaluation, isolate how much of the error is upstream retrieval rather
          than spatial reasoning.
        </p>

        <div className="mb-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {ablations.map((ablation) => (
            <div key={ablation.title}>
              <h4 className="mb-2 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
                {ablation.title}
              </h4>
              <p className="text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
                {ablation.desc}
              </p>
            </div>
          ))}
        </div>

        <AblationChart />
      </div>
    </section>
  );
}
