type TakeawayProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function Takeaway({ ref, visible }: TakeawayProps) {
  return (
    <section
      ref={ref}
      className={`fade-up ${visible ? "in" : ""} mx-auto max-w-275 px-5 py-14 sm:px-8 sm:py-20`}
    >
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Takeaway
        </span>
      </div>

      <h2 className="mb-6 max-w-3xl font-serif text-[clamp(28px,3vw,40px)] font-bold leading-tight text-slate-950 dark:text-[#f0f2f8]">
        Errors compound, and the last step stays broken
      </h2>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <p className="text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 dark:text-[#5a6a88]">
          Recent VLMs remain far from reliable here, with errors compounding
          across retrieving relevant past events, maintaining object state over
          time, and reasoning from that state once the object is no longer
          visible. A failure at any stage corrupts everything after it, which is
          why a textual cue naming the movement intervals lifts every downstream
          question type at once.
        </p>

        <p className="text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 dark:text-[#5a6a88]">
          What survives that help is the sharper finding: adding an explicit
          statement that the target is not visible improves nearest-fixture
          accuracy by 8 points, but moves the four 3D spatial tasks by only 0 to
          2.4. Future work should move beyond current-view perception toward
          models that explicitly update and preserve persistent latent
          representations of dynamic scenes over time.
        </p>
      </div>
    </section>
  );
}
