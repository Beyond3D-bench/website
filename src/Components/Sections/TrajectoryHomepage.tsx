import { Fragment } from "react";
import { CAPABILITIES, QUESTION_TYPES } from "../Results/Questions";

type TrajectoryProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function Trajectory({ ref, visible }: TrajectoryProps) {
  return (
    <section
      ref={ref}
      className={`fade-up mx-auto max-w-275 px-5 py-14 sm:px-8 sm:py-20 ${visible ? "in" : ""}`}
    >
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
          The task
        </span>
      </div>

      <h2 className="mb-4 font-serif text-[clamp(28px,3vw,40px)] font-bold text-slate-950 dark:text-[#f0f2f8]">
        Eight diagnostic question types
      </h2>

      <p className="mb-10 max-w-3xl text-sm leading-6 text-slate-600 sm:mb-12 sm:text-[15px] sm:leading-7 dark:text-[#5a6a88]">
        Given a query anchor, we define eight diagnostic question types
        organized into four complementary capabilities. These questions probe
        successive stages of out-of-sight reasoning: determining whether the
        target is currently observable, retrieving the events that established
        its latest status, grounding its remembered location in the scene, and
        reasoning about that location in 3D.
      </p>

      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-[#1e2a40]">
        <table className="w-full min-w-[760px] border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b border-slate-200 dark:border-[#1e2a40]">
              <th className="w-46 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.06em] text-slate-500 dark:text-[#4a5870]">
                Question
              </th>
              <th className="px-4 py-3 text-[11px] font-medium uppercase tracking-[0.06em] text-slate-500 dark:text-[#4a5870]">
                Template
              </th>
              <th className="w-56 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.06em] text-slate-500 dark:text-[#4a5870]">
                Answer choices
              </th>
            </tr>
          </thead>

          <tbody>
            {CAPABILITIES.map((capability) => (
              <Fragment key={capability}>
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 pb-1 pt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-blue-600 dark:text-blue-400"
                  >
                    {capability}
                  </td>
                </tr>

                {QUESTION_TYPES.filter(
                  (question) => question.capability === capability,
                ).map((question) => (
                  <tr
                    key={question.name}
                    className="border-b border-slate-100 align-top transition-colors hover:bg-blue-500/5 dark:border-white/5"
                  >
                    <td className="px-4 py-3 font-medium text-slate-800 dark:text-[#c5d0e8]">
                      {question.name}
                    </td>
                    <td className="px-4 py-3 leading-6 text-slate-600 dark:text-[#8899b8]">
                      {question.template}
                    </td>
                    <td className="px-4 py-3 font-mono text-[11px] leading-5 text-slate-500 dark:text-[#5a6a88]">
                      {question.choices}
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 font-mono text-[11px] text-slate-400 dark:text-[#3a4560]">
        [TIME], [OBJECT] and [REF] denote the query timestamp, the target
        object, and a visible reference object
      </p>
    </section>
  );
}
