import { Link } from "react-router-dom";
import ThemedFigure from "./ThemedFigure";

type QualitativeProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

const failures = [
  {
    title: "Fine-grained evidence can still be missed",
    desc: "For the blueberry box the model summarises both movement intervals it was handed, but misses the final relocation from the counter to storage next to the fridge — and carries the outdated location forward.",
  },
  {
    title: "Tracking errors can corrupt the remembered state",
    desc: "In the same example it conflates the queried box with the blueberries being washed, and concludes the container is in the person's hands. The interaction was found; the target identity was not held.",
  },
  {
    title: "Spatial reasoning remains a downstream bottleneck",
    desc: "For the food processor lid the model tracks every movement correctly and recovers that the lid was left on the counter — then maps that location into the wrong quadrant, answering front-right instead of back-right.",
  },
];

export default function Qualitative({ ref, visible }: QualitativeProps) {
  return (
    <section
      ref={ref}
      className={`fade-up ${visible ? "in" : ""} mx-auto max-w-275 px-5 py-14 sm:px-8 sm:py-20`}
    >
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
          What the failures look like
        </span>
      </div>

      <h2 className="mb-6 max-w-3xl font-serif text-[clamp(28px,3vw,40px)] font-bold leading-tight text-slate-950 dark:text-[#f0f2f8]">
        Three ways the chain breaks
      </h2>

      <p className="mb-10 max-w-3xl text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 dark:text-[#5a6a88]">
        Reading Qwen-3.6-27B&apos;s reasoning traces, with temporal cues
        provided and thinking enabled, shows where along the chain the answer
        goes wrong — something the aggregate numbers cannot.
      </p>

      <ThemedFigure
        light="/qualitative.jpg"
        dark="/qualitative-dark.jpg"
        alt="Two qualitative examples with reasoning traces. In the first, the model misses the blueberry box's final relocation and misidentifies it. In the second, it tracks the food processor lid correctly but fails the camera-relative 3D reasoning."
        width={2200}
        height={1407}
      >
        <figcaption className="mt-4 text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
          <span className="font-medium text-slate-800 dark:text-[#c5d0e8]">
            Figure 8.
          </span>{" "}
          Temporal cues in blue, keyframes and Q&amp;A, then the reasoning
          trace. Correct steps in green, incorrect in red.
        </figcaption>
      </ThemedFigure>

      <div className="mt-12 grid gap-x-10 gap-y-8 sm:mt-14 sm:grid-cols-3">
        {failures.map((failure) => (
          <div key={failure.title}>
            <h3 className="mb-2 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
              {failure.title}
            </h3>
            <p className="text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
              {failure.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-3xl text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 dark:text-[#5a6a88]">
        The{" "}
        <Link
          to="/questions"
          className="font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
        >
          question viewer
        </Link>{" "}
        lets you walk any anchor yourself — the video up to the query time, the
        object&apos;s trajectory, and the kitchen in 3D.
      </p>
    </section>
  );
}
