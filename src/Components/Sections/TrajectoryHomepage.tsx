import { motion } from "framer-motion";

type Capability = {
  code: string;
  title: string;
  desc: string;
  choices?: string;
};

type TrajectoryProps = {
  capabilities: Capability[];
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function Trajectory({
  capabilities,
  ref,
  visible,
}: TrajectoryProps) {
  return (
    <section
      ref={ref}
      className={`fade-up mx-auto max-w-275 px-5 py-14 sm:px-8 sm:py-20 ${visible ? "in" : ""}`}
    >
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
          01 — Benchmark structure
        </span>
      </div>

      <h2 className="mb-4 font-serif text-[clamp(28px,3vw,40px)] font-bold text-slate-950 dark:text-[#f0f2f8]">
        Eight diagnostic question types
      </h2>

      <p className="mb-10 max-w-4xl text-sm leading-6 text-slate-600 sm:mb-12 sm:text-center sm:text-[15px] sm:leading-7 dark:text-[#5a6a88]">
        Every query targets an object the camera wearer relocated and that has
        since left the field of view. Eight multiple-choice questions probe
        successive stages of the reasoning needed to recover its state: whether
        the target is observable now, when it was last visible and last placed,
        which fixture anchors that location, and where it lies relative to the
        current viewpoint or to another object in the scene.
      </p>

      <div className="relative mx-auto mt-10 max-w-3xl sm:mt-14">
        {/* continuous line from first dot to last dot */}
        <div
          className="
      absolute left-3 top-3.25 sm:left-4
      w-px bg-slate-200 dark:bg-white/10
    "
          style={{
            height: `calc(100% - ${capabilities.length > 1 ? "13px" : "0px"})`,
          }}
        />

        <div className="flex flex-col gap-6 sm:gap-10">
          {capabilities.map((c, index) => {
            return (
              <motion.div
                key={c.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="
        relative grid grid-cols-[24px_1fr] gap-4 pb-8 sm:grid-cols-[32px_1fr] sm:gap-6 sm:pb-10

        before:absolute before:left-3 before:top-0 sm:before:left-4
        before:h-3 before:w-px before:bg-transparent

        after:absolute after:left-3 after:top-4 sm:after:left-4
        after:w-px after:bg-slate-200 dark:after:bg-white/10

          last:after:hidden
      "
              >
                {/* DOT */}
                <div className="relative z-10 flex justify-center">
                  <div className="mt-1 h-3.5 w-3.5 rounded-full bg-blue-600 ring-4 ring-white sm:h-4 sm:w-4 dark:bg-blue-500 dark:ring-[#060a10]" />
                </div>

                {/* CONTENT */}
                <div className="max-w-xl">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-blue-600 dark:text-blue-400">
                    {c.code}
                  </div>

                  <h3 className="mb-2 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
                    {c.title}
                  </h3>

                  <p className="text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
                    {c.desc}
                  </p>

                  {c.choices && (
                    <p className="mt-2 font-mono text-[11px] leading-5 text-slate-500 dark:text-[#4d5a75]">
                      Options: {c.choices}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
