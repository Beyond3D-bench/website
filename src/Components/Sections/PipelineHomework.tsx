import ThemedFigure from "./ThemedFigure";

type PipelineProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function Pipeline({ ref, visible }: PipelineProps) {
  const steps = [
    {
      n: "1",
      title: "Visibility tracks",
      desc: "Each object gets a 1 fps track built from HD-EPIC annotations and the kitchen digital twin: a nine-point footprint reprojected through the Aria fisheye model, occlusion rays cast against the scene mesh, then OWLv2 detection confirming what a frame really shows.",
    },
    {
      n: "2",
      title: "Query anchor selection",
      desc: "An anchor is kept only where the target was relocated earlier and is stationary but out of view or occluded at query time. 1,000 anchors are balanced across query time and out-of-sight horizon, then manually verified.",
    },
    {
      n: "3",
      title: "Question generation",
      desc: "Every anchor is expanded into eight templated multiple-choice questions with rule-based distractors, spanning visual grounding, temporal grounding, scene localization, and 3D spatial perception. 1,000 visible controls bring the set to 9,000.",
    },
    {
      n: "4",
      title: "VLM evaluation",
      desc: "Models receive the 1 fps video prefix up to the query time and must answer without visual access to the target. Across nine VLMs the best reaches 42.2% macro accuracy against 29.7% chance.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`
        fade-up ${visible ? "in" : ""}
        px-5 py-14 sm:px-8 sm:py-20
      `}
    >
      <div className="mx-auto max-w-275">
        <div className="mb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Construction
          </span>
        </div>

        <h2
          className="
            mb-12 font-serif text-[clamp(28px,3vw,40px)] font-bold
            text-slate-950 dark:text-[#f0f2f8]
          "
        >
          From video to benchmark
        </h2>

        <ThemedFigure
          className="mb-12 sm:mb-14"
          light="/pipeline.png"
          dark="/pipeline-dark.svg"
          alt="Benchmark construction. Stage one infers visibility tracks through a view check, an occlusion check against the scene mesh, and a detection check. Stage two turns valid out-of-sight anchors into 9,000 questions."
          width={2000}
          height={1624}
          imageClassName="mx-auto max-w-3xl"
        >
          <figcaption className="mt-4 text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
            <span className="font-medium text-slate-800 dark:text-[#c5d0e8]">
              Figure 2.
            </span>{" "}
            The three-stage visibility check is what lets us assert a target is
            genuinely invisible rather than probably invisible: an object must
            fail the field-of-view test, or be blocked by the scene mesh, or go
            unconfirmed by the detector. Only anchors labelled out of view or
            occluded become questions.
          </figcaption>
        </ThemedFigure>

        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n}>
              <div
                className="
                  mb-4 font-mono text-[32px] font-medium leading-none
                  text-slate-300 dark:text-[#1a2540]
                "
              >
                {step.n}
              </div>

              <div className="mb-2 text-sm font-medium text-slate-800 dark:text-[#c5d0e8]">
                {step.title}
              </div>

              <div className="text-[13px] leading-7 text-slate-600 dark:text-[#4a5870]">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 dark:text-[#5a6a88]">
          The visibility tracks are what make the benchmark&apos;s central claim
          checkable, so we audited them: an independent human pass over 4,176
          object instances from 30 videos puts track accuracy at{" "}
          <strong className="font-semibold text-slate-900 dark:text-[#c5d0e8]">
            83.5%
          </strong>
          , with most errors on the conservative{" "}
          <span className="font-mono text-[13px]">visually unconfirmed</span>{" "}
          state — which is excluded from query anchors precisely because it is
          the unreliable one.
        </p>
      </div>
    </section>
  );
}
