import React from "react";
import logo from "../../assets/Logo.png";

type Stat = {
  value: string;
  label: string;
};

type HeroProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
  stats: Stat[];
};

type FloatingLabel = {
  label: string;
  delay: string;
  floatDuration: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const floatingLabels: FloatingLabel[] = [
  {
    label: "Temporal grounding",
    top: "-6%",
    left: "-24%",
    delay: "0.8s",
    floatDuration: "14s",
  },
  {
    label: "Scene localization",
    bottom: "-2%",
    right: "-22%",
    delay: "1s",
    floatDuration: "18s",
  },
  {
    label: "3D spatial perception",
    top: "50%",
    right: "-30%",
    delay: "1.2s",
    floatDuration: "12s",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="transition-transform duration-300 group-hover:translate-x-1"
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero({ ref, visible, stats }: HeroProps) {
  return (
    <section
      ref={ref}
      className="
        relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-24
        bg-white text-slate-950
        dark:bg-[#070b14] dark:text-[#f0f2f8]
      "
    >
      <div className="grid-bg" />
      <div className="noise" />

      <div className="relative z-10 mx-auto grid w-full max-w-275 gap-10 md:gap-14 lg:grid-cols-[1fr_480px] lg:gap-20">
        <div className="flex flex-col justify-center">
          <div className={`fade-up d1 ${visible ? "in" : ""}`}>
            <span
              className="
                inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1
                text-[12px] sm:text-sm
                border-blue-200 bg-blue-50 text-blue-700
                dark:border-white/10 dark:bg-white/5 dark:text-blue-300
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Vision-Language Model Benchmark
            </span>
          </div>

          <h1
            className={`fade-up d2 ${visible ? "in" : ""} my-4 font-serif text-[clamp(42px,14vw,78px)] font-bold leading-[1.05] text-slate-950 sm:my-5 dark:text-[#f0f2f8]`}
          >
            Beyond
            <span className="italic text-blue-600 dark:text-blue-500">3D</span>
          </h1>

          <p
            className={`fade-up d3 ${visible ? "in" : ""} mb-4 max-w-130 text-base font-light leading-7 text-slate-700 sm:text-lg sm:leading-8 dark:text-[#8899b8]`}
          >
            Can a vision-language model remember where you put something after
            it disappears from the frame?
          </p>

          <p
            className={`fade-up d4 ${
              visible ? "in" : ""
            } mb-8 max-w-125 text-sm leading-6 text-slate-600 sm:mb-10 sm:text-[15px] sm:leading-7 dark:text-[#5a6a88]`}
          >
            Beyond3D benchmarks out-of-sight spatiotemporal reasoning — tracking
            an object as it is relocated, updating its spatial state, and
            recalling that state once it leaves view — in egocentric cooking
            video, built on{" "}
            <a
              href="https://hd-epic.github.io/site/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
            >
              HD-EPIC&apos;s
            </a>{" "}
            dense 3D object annotations.
          </p>

          <div
            className={`fade-up d5 ${visible ? "in" : ""} grid gap-3 sm:flex sm:flex-wrap`}
          >
            <a
              href="/questions"
              className="
                group inline-flex items-center justify-center gap-2 rounded-xl
                bg-linear-to-r from-blue-500 to-blue-600
                px-6 py-3 font-medium text-white
                shadow-lg shadow-blue-500/20
                transition-all duration-300
                hover:from-blue-400 hover:to-blue-500 hover:shadow-blue-500/40
                active:scale-95
              "
            >
              Question generator
              <ArrowIcon />
            </a>

            <a
              href="/results"
              className="
                group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium
                border border-slate-200 bg-slate-100 text-slate-800 shadow-sm
                transition-all duration-300
                hover:bg-white hover:border-slate-300 hover:text-slate-950 hover:shadow-md
                active:scale-95
                dark:border-white/10 dark:bg-white/5 dark:text-gray-200
                dark:hover:bg-white/10 dark:hover:border-white/20 dark:hover:text-white
              "
            >
              Results
              <ArrowIcon />
            </a>
          </div>

          <div
            className={`fade-up d6 ${visible ? "in" : ""} mt-10 grid grid-cols-2 gap-4 border-t pt-6 sm:mt-14 sm:flex sm:items-center sm:gap-7 sm:pt-8 border-slate-200 dark:border-[#1e2a40]`}
          >
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="min-w-0 shrink-0">
                  <div className="mb-0.5 font-mono text-[17px] font-medium text-slate-900 dark:text-[#c5d0e8]">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.06em] text-slate-500 dark:text-[#4a5870]">
                    {s.label}
                  </div>
                </div>

                {i < stats.length - 1 && (
                  <div className="hidden h-8 w-px shrink-0 bg-slate-200 sm:block dark:bg-[#1e2a40]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div
          className={`fade-up d4 ${visible ? "in" : ""} flex items-center justify-center pb-3 sm:pb-0`}
        >
          <div className="relative h-[min(72vw,21rem)] w-[min(72vw,21rem)] sm:h-105 sm:w-105">
            <div
              className="
      pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] sm:h-150 sm:w-150
      -translate-x-1/2 -translate-y-1/2
      bg-[radial-gradient(circle,rgba(59,91,219,0.18)_0%,transparent_70%)]
      dark:bg-[radial-gradient(circle,rgba(59,91,219,0.14)_0%,transparent_70%)]
    "
            />
            <div className="logo-ring absolute left-[6%] top-[6%] h-[88%] w-[88%] sm:left-5 sm:top-5 sm:h-95 sm:w-95" />
            <div
              className="logo-ring absolute left-[15%] top-[15%] h-[70%] w-[70%] sm:left-14 sm:top-14 sm:h-77 sm:w-77"
              style={{
                animationDuration: "18s",
                animationDirection: "reverse",
              }}
            />

            <div
              className="
                absolute left-1/2 top-1/2 flex h-[86%] w-[86%] sm:h-120 sm:w-120
                -translate-x-1/2 -translate-y-1/2 items-center justify-center
                rounded-[22px] border p-2 sm:rounded-[28px]
                border-slate-200 bg-white shadow-xl shadow-blue-500/10
                dark:border-[#1e2a40] dark:bg-[#0d1320] dark:shadow-blue-500/5
              "
            >
              <img
                src={logo}
                alt="Beyond3D logo"
                className="h-full w-full object-contain"
              />
            </div>

            {floatingLabels.map((f) => (
              <div
                key={f.label}
                className="absolute hidden sm:block"
                style={{
                  top: f.top,
                  bottom: f.bottom,
                  left: f.left,
                  right: f.right,
                  animation: `fade-up 0.6s ${f.delay} both`,
                }}
              >
                <div
                  className="
      whitespace-nowrap rounded-2xl border px-6 py-3
      font-mono text-[14px] font-semibold
      border-slate-200 bg-white text-blue-600 shadow-md
      dark:border-[#1e2a40] dark:bg-[#0d1320] dark:text-blue-400
    "
                  style={{
                    animation: `
        floatCircle ${f.floatDuration} ease-in-out infinite
      `,
                  }}
                >
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
