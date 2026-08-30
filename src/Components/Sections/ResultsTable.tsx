import { Fragment } from "react";
import { CHANCE, COLUMNS, RESULTS } from "../Results/Data";
import type { Family, Setting } from "../Results/Data";

const SETTINGS: { key: Setting; label: string; note: string }[] = [
  {
    key: "text",
    label: "Text only",
    note: "question and options, no video",
  },
  {
    key: "video",
    label: "Video + text",
    note: "1 fps video prefix up to the query time",
  },
];

const FAMILIES: { key: Family; label: string }[] = [
  { key: "general", label: "General-purpose models" },
  { key: "specialized", label: "Specialized 3D models" },
];

/** Column groups as spans, so the header can mirror the paper's two rows. */
function columnGroups() {
  const groups: { label: string; span: number }[] = [];

  for (const column of COLUMNS) {
    const last = groups[groups.length - 1];

    if (last && last.label === column.group) {
      last.span += 1;
    } else {
      groups.push({ label: column.group, span: 1 });
    }
  }

  return groups;
}

/** Best score per column across every model and both input settings. */
function bestPerColumn() {
  return COLUMNS.map((_, i) =>
    Math.max(...RESULTS.map((row) => row.scores[i])),
  );
}

const cellBase = "px-3 py-2.5 text-right tabular-nums whitespace-nowrap";
const stickyBase =
  "sticky left-0 z-10 px-3 py-2.5 text-left whitespace-nowrap bg-white dark:bg-[#070b14]";

export default function ResultsTable() {
  const groups = columnGroups();
  const best = bestPerColumn();

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-[#1e2a40]">
      <table className="w-full min-w-[900px] border-collapse text-[13px]">
        <thead>
          <tr className="border-b border-slate-200 dark:border-[#1e2a40]">
            <th className={`${stickyBase} align-bottom`} rowSpan={2}>
              <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-slate-500 dark:text-[#4a5870]">
                Model
              </span>
            </th>

            {groups.map((group, i) => (
              <th
                key={`${group.label}-${i}`}
                colSpan={group.span}
                className="px-3 pb-1 pt-3 text-center text-[11px] font-medium uppercase tracking-[0.06em] text-blue-600 dark:text-blue-400"
              >
                {group.label}
              </th>
            ))}
          </tr>

          <tr className="border-b border-slate-200 dark:border-[#1e2a40]">
            {COLUMNS.map((column) => (
              <th
                key={column.key}
                className="max-w-30 px-3 pb-2.5 align-bottom text-right text-[12px] font-medium leading-4 text-slate-700 dark:text-[#c5d0e8]"
              >
                {column.label}
                <div className="mt-1 font-mono text-[10px] font-normal text-slate-400 dark:text-[#3a4560]">
                  {column.questions.toLocaleString()}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-slate-200 text-slate-500 dark:border-[#1e2a40] dark:text-[#4a5870]">
            <td className={`${stickyBase} italic`}>Random guessing</td>
            {CHANCE.map((value, i) => (
              <td key={COLUMNS[i].key} className={`${cellBase} italic`}>
                {value.toFixed(1)}
              </td>
            ))}
          </tr>

          {SETTINGS.map((setting) => (
            <SettingBlock
              key={setting.key}
              setting={setting}
              best={best}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

type SettingBlockProps = {
  setting: { key: Setting; label: string; note: string };
  best: number[];
};

function SettingBlock({ setting, best }: SettingBlockProps) {
  return (
    <>
      <tr className="bg-slate-50 dark:bg-white/3">
        <td
          className="px-3 py-2 text-[12px] font-medium text-slate-800 dark:text-[#c5d0e8]"
          colSpan={COLUMNS.length + 1}
        >
          {setting.label}
          <span className="ml-2 font-normal text-slate-500 dark:text-[#4a5870]">
            — {setting.note}
          </span>
        </td>
      </tr>

      {FAMILIES.map((family) => (
        <Fragment key={`${setting.key}-${family.key}`}>
          <tr>
            <td
              className="px-3 pb-1 pt-3 text-[11px] uppercase tracking-[0.06em] text-slate-400 dark:text-[#3a4560]"
              colSpan={COLUMNS.length + 1}
            >
              {family.label}
            </td>
          </tr>

          {RESULTS.filter(
            (row) => row.setting === setting.key && row.family === family.key,
          ).map((row) => (
            <tr
              key={`${setting.key}-${row.model}-${row.size}`}
              className="border-b border-slate-100 transition-colors hover:bg-blue-500/5 dark:border-white/5"
            >
              <td className={stickyBase}>
                <span className="text-slate-800 dark:text-[#c5d0e8]">
                  {row.model}
                </span>
                <span className="ml-2 font-mono text-[11px] text-slate-400 dark:text-[#3a4560]">
                  {row.size}
                </span>
              </td>

              {row.scores.map((score, i) => {
                const isBest = score === best[i];

                return (
                  <td
                    key={COLUMNS[i].key}
                    className={`${cellBase} ${
                      isBest
                        ? "font-semibold text-blue-700 dark:text-blue-300"
                        : "text-slate-700 dark:text-[#8899b8]"
                    }`}
                  >
                    {score.toFixed(1)}
                  </td>
                );
              })}
            </tr>
          ))}
        </Fragment>
      ))}
    </>
  );
}
