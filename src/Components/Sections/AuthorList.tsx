import { AUTHORS } from "../Authors/Data";
import type { Author } from "../Authors/Data";

function Markers({ author }: { author: Author }) {
  return (
    <sup className="ml-0.5 font-mono text-[11px] font-normal text-blue-600 dark:text-blue-400">
      {author.equal && "*"}
      {author.affiliations.join(",")}
    </sup>
  );
}

type AuthorListProps = {
  /** "sm" for the landing-page header, "lg" for a standalone page. */
  size?: "sm" | "lg";
};

/**
 * Author names only. The affiliations the superscripts refer to are written
 * out under the institution logos — see InstitutionLogos.
 */
export default function AuthorList({ size = "sm" }: AuthorListProps) {
  const large = size === "lg";

  return (
    <div>
      <div
        className={`flex flex-wrap justify-center text-slate-800 dark:text-[#c5d0e8] ${
          large
            ? "gap-x-7 gap-y-3 text-[17px] leading-8 sm:text-lg"
            : "gap-x-5 gap-y-2 text-[15px] leading-7 sm:text-base"
        }`}
      >
        {AUTHORS.map((author) => (
          <span key={author.name} className="whitespace-nowrap">
            {author.href ? (
              <a
                href={author.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-500 dark:decoration-[#1e2a40] dark:hover:text-blue-400"
              >
                {author.name}
              </a>
            ) : (
              author.name
            )}
            <Markers author={author} />
          </span>
        ))}
      </div>

      <p
        className={`italic text-slate-500 dark:text-[#5a6a88] ${
          large ? "mt-5 text-[13px]" : "mt-3 text-[12px]"
        }`}
      >
        <span className="font-mono not-italic">*</span> Equal contribution.
      </p>
    </div>
  );
}

/** The paper's own correspondence line. */
export function Correspondence({ size = "sm" }: AuthorListProps) {
  const large = size === "lg";

  return (
    <p
      className={`font-mono text-slate-500 dark:text-[#5a6a88] ${
        large ? "text-[12px]" : "text-[11px]"
      }`}
    >
      {"{"}
      <a
        href="mailto:fangma@student.ethz.ch"
        className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
      >
        fangma
      </a>
      ,{" "}
      <a
        href="mailto:ivoban@student.ethz.ch"
        className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
      >
        ivoban
      </a>
      ,{" "}
      <a
        href="mailto:ehomburg@student.ethz.ch"
        className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
      >
        ehomburg
      </a>
      {"}"}@student.ethz.ch
    </p>
  );
}
