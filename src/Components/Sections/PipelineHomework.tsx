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
        border-t border-b
        border-slate-200 dark:border-[#1e2a40]
        bg-white dark:bg-[#070b14]
      `}
    >
      <div className="mx-auto max-w-275">
        <div className="mb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
            02 — Pipeline
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

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`
                relative px-0 py-6 sm:p-8
                ${i > 0 ? "border-t sm:border-t-0" : ""}
                ${i % 2 === 1 ? "sm:border-l lg:border-l-0" : ""}
                ${i >= 2 ? "sm:border-t lg:border-t-0" : ""}
                ${i < steps.length - 1 ? "lg:border-r" : ""}
                border-slate-200 dark:border-[#1e2a40]
              `}
            >
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
      </div>
    </section>
  );
}
