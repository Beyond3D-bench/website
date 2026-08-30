import React from "react";
import { Link } from "react-router-dom";
import { Code2, Database, FileText } from "lucide-react";
import AuthorList, { Correspondence } from "./AuthorList";
import InstitutionLogos from "./InstitutionLogos";
import { PAPER_TITLE } from "../Authors/Data";

type Stat = {
  value: string;
  label: string;
};

type HeroProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
  stats: Stat[];
};

/** No URLs yet — these render as pending until the links exist. */
const resources = [
  { label: "Paper", Icon: FileText, href: null },
  { label: "Code", Icon: Code2, href: null },
  { label: "Data", Icon: Database, href: null },
];

/**
 * Pages scroll inside Layout's <main>, not the document, so a plain #hash
 * link is unreliable here — scrollIntoView walks up to the right container.
 */
function scrollToResults() {
  document
    .getElementById("results")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
        relative overflow-hidden px-5 pb-14 pt-14 text-center sm:px-8 sm:pb-20 sm:pt-24
        text-slate-950 dark:text-[#f0f2f8]
      "
    >
      <div className="noise" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <h1
          className={`fade-up d2 ${visible ? "in" : ""} mb-4 font-serif text-[clamp(42px,12vw,78px)] font-bold leading-[1.05] text-slate-950 sm:mb-5 dark:text-[#f0f2f8]`}
        >
          Beyond
          <span className="italic text-blue-600 dark:text-blue-500">3D</span>
        </h1>

        <h2
          className={`fade-up d3 ${visible ? "in" : ""} mx-auto mb-8 max-w-3xl text-balance font-serif text-[clamp(19px,2.4vw,27px)] font-bold leading-snug text-slate-800 sm:mb-10 dark:text-[#c5d0e8]`}
        >
          {PAPER_TITLE}
        </h2>

        <div className={`fade-up d4 ${visible ? "in" : ""} mb-8 sm:mb-9`}>
          <AuthorList size="sm" />
        </div>

        <div className={`fade-up d4 ${visible ? "in" : ""} mb-5`}>
          <InstitutionLogos size="sm" />
        </div>

        <div className={`fade-up d5 ${visible ? "in" : ""} mb-9 sm:mb-11`}>
          <Correspondence size="sm" />
        </div>

        <p
          className={`fade-up d5 ${visible ? "in" : ""} mx-auto mb-8 max-w-xl text-balance text-base font-light leading-7 text-slate-700 sm:mb-10 sm:text-lg sm:leading-8 dark:text-[#8899b8]`}
        >
          Can a vision-language model remember where you put something after it
          disappears from the frame?
        </p>

        {/* Resource links — paper, code, data */}
        <div
          className={`fade-up d5 ${visible ? "in" : ""} flex flex-wrap justify-center gap-3`}
        >
          {resources.map(({ label, Icon, href }) =>
            href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium
                  border-slate-200 bg-slate-100 text-slate-800 shadow-sm transition-all duration-300
                  hover:border-slate-300 hover:bg-white hover:text-slate-950 hover:shadow-md active:scale-95
                  dark:border-white/10 dark:bg-white/5 dark:text-gray-200
                  dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white
                "
              >
                <Icon size={16} />
                {label}
              </a>
            ) : (
              <span
                key={label}
                aria-disabled="true"
                title={`${label} link coming soon`}
                className="
                  inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-dashed px-5 py-2.5 text-sm font-medium
                  border-slate-200 text-slate-400
                  dark:border-white/10 dark:text-[#3a4560]
                "
              >
                <Icon size={16} />
                {label}
                <span className="rounded-full bg-slate-100 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:bg-white/5 dark:text-[#3a4560]">
                  Soon
                </span>
              </span>
            ),
          )}
        </div>

        {/* Site navigation */}
        <div
          className={`fade-up d5 ${visible ? "in" : ""} mt-4 flex flex-wrap justify-center gap-3`}
        >
          <Link
            to="/questions"
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
            Question viewer
            <ArrowIcon />
          </Link>

          <button
            type="button"
            onClick={scrollToResults}
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
          </button>
        </div>

        <div
          className={`fade-up d6 ${visible ? "in" : ""} mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:flex sm:items-center sm:justify-center sm:gap-7`}
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
    </section>
  );
}
