import { Fragment } from "react";
import {
  COMPARISON_COLUMNS,
  COMPARISON_ROWS,
} from "../Results/Comparison";
import type { Mark } from "../Results/Comparison";

type ComparisonProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

const GROUPS = [
  "Temporal and object memory",
  "Static 3D spatial reasoning",
  "Dynamic spatial state reasoning",
];

function MarkCell({ mark }: { mark: Mark }) {
  if (mark === "yes") {
    return (
      <span className="text-blue-600 dark:text-blue-400" aria-label="yes">
        ✓
      </span>
    );
  }

  if (mark === "partial") {
    return (
      <span
        className="text-slate-400 dark:text-[#4a5870]"
        aria-label="partially covered"
      >
        ○
      </span>
    );
  }

  return (
    <span
      className="text-slate-300 dark:text-[#2a3a56]"
      aria-label="not targeted"
    >
      –
    </span>
  );
}

export default function Comparison({ ref, visible }: ComparisonProps) {
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
            Why it is needed
          </span>
        </div>

        <h2 className="mb-6 max-w-3xl font-serif text-[clamp(28px,3vw,40px)] font-bold leading-tight text-slate-950 dark:text-[#f0f2f8]">
          No existing benchmark makes the target actually invisible
        </h2>

        <p className="mb-10 max-w-3xl text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8 dark:text-[#5a6a88]">
          Related benchmarks differ in the states that models must recover at
          query time. Dynamic spatial-state benchmarks capture changing
          configurations, including object relocations, but do not enforce
          target invisibility, allowing current-frame shortcuts. Beyond3D
          requires{" "}
          <strong className="font-semibold text-slate-800 dark:text-[#c5d0e8]">
            both relocation and loss of visibility
          </strong>{" "}
          in unscripted real-world video, with{" "}
          <strong className="font-semibold text-slate-800 dark:text-[#c5d0e8]">
            visibility verified geometrically
          </strong>{" "}
          — the last two columns below.
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-[#1e2a40]">
          <table className="w-full min-w-[720px] border-collapse text-[13px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-[#1e2a40]">
                <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.06em] text-slate-500 dark:text-[#4a5870]">
                  Benchmark
                </th>
                {COMPARISON_COLUMNS.map((column) => (
                  <th
                    key={column.key}
                    title={column.title}
                    className={`px-3 py-3 text-center text-[12px] font-medium ${
                      column.decisive
                        ? "bg-blue-500/6 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                        : "text-slate-600 dark:text-[#8899b8]"
                    }`}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {GROUPS.map((group) => (
                <Fragment key={group}>
                  <tr>
                    <td
                      colSpan={COMPARISON_COLUMNS.length + 1}
                      className="px-4 pb-1 pt-4 text-[11px] uppercase tracking-[0.06em] text-slate-400 dark:text-[#3a4560]"
                    >
                      {group}
                    </td>
                  </tr>

                  {COMPARISON_ROWS.filter((row) => row.group === group).map(
                    (row) => (
                      <tr
                        key={row.name}
                        className={`border-b border-slate-100 dark:border-white/5 ${
                          row.ours ? "bg-blue-500/6 dark:bg-blue-500/10" : ""
                        }`}
                      >
                        <td
                          className={`px-4 py-2.5 whitespace-nowrap ${
                            row.ours
                              ? "font-semibold text-slate-900 dark:text-[#f0f2f8]"
                              : "text-slate-700 dark:text-[#8899b8]"
                          }`}
                        >
                          {row.name}
                        </td>

                        {row.marks.map((mark, i) => (
                          <td
                            key={COMPARISON_COLUMNS[i].key}
                            className={`px-3 py-2.5 text-center ${
                              COMPARISON_COLUMNS[i].decisive && !row.ours
                                ? "bg-blue-500/4 dark:bg-blue-500/6"
                                : ""
                            }`}
                          >
                            <MarkCell mark={mark} />
                          </td>
                        ))}
                      </tr>
                    ),
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-mono text-[11px] text-slate-400 dark:text-[#3a4560]">
          ✓ explicitly evaluated · ○ partially covered or not systematically
          enforced · – not explicitly targeted
        </p>
      </div>
    </section>
  );
}
