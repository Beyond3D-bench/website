type ProblemProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

/** The three abilities the abstract names, in order. */
const abilities = [
  {
    verb: "Track",
    desc: "Follow an object while the camera wearer handles it, as the viewpoint moves and other objects come and go.",
  },
  {
    verb: "Update",
    desc: "Revise where the object is when it is put down somewhere new. Its old location is now wrong.",
  },
  {
    verb: "Recall",
    desc: "Hold on to that latest location once the object is no longer visible, and reason about it in space and time.",
  },
];

export default function Problem({ ref, visible }: ProblemProps) {
  return (
    <section
      ref={ref}
      className={`fade-up ${visible ? "in" : ""} mx-auto max-w-275 px-5 py-14 sm:px-8 sm:py-20`}
    >
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
          The problem
        </span>
      </div>

      <h2 className="mb-6 max-w-3xl font-serif text-[clamp(28px,3vw,40px)] font-bold leading-tight text-slate-950 dark:text-[#f0f2f8]">
        Objects do not stop existing when they leave the frame
      </h2>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <p className="text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 dark:text-[#5a6a88]">
          For an embodied system, understanding only what is currently visible
          is not enough. An AR assistant may need to guide a user back to an
          object handled earlier, while a household robot may need to retrieve
          an item after it has been moved out of sight. In such cases, the
          system must identify the interactions that established the
          object&apos;s latest location and retain that state as the scene
          evolves.
        </p>

        <p className="text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 dark:text-[#5a6a88]">
          This is particularly challenging in egocentric video, where objects
          are manipulated and relocated as the viewpoint continuously changes.
          Existing benchmarks cover related aspects of memory, temporal
          reasoning, and 3D scene understanding, but do not directly test
          whether models retain the updated spatial state of a relocated object
          after it leaves view.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:mt-14 sm:grid-cols-3 dark:border-[#1e2a40] dark:bg-[#1e2a40]">
        {abilities.map((ability) => (
          <div
            key={ability.verb}
            className="bg-white p-6 sm:p-7 dark:bg-[#080c14]"
          >
            <div className="mb-2 font-serif text-xl font-bold text-blue-600 dark:text-blue-400">
              {ability.verb}
            </div>
            <p className="text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
              {ability.desc}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-3xl text-sm leading-7 text-slate-700 sm:text-[15px] sm:leading-8 dark:text-[#8899b8]">
        We refer to this ability to reason about the evolving spatial state of
        objects beyond the current field of view as{" "}
        <strong className="font-semibold">
          out-of-sight spatiotemporal reasoning
        </strong>
        , and Beyond3D is designed to isolate it.
      </p>
    </section>
  );
}
