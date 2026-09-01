import { useState } from "react";
import { AFFILIATIONS, INSTITUTIONS } from "../Authors/Data";
import type { Institution } from "../Authors/Data";

type LogoProps = {
  institution: Institution;
  compact: boolean;
};

function InstitutionLogo({ institution, compact }: LogoProps) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <span
        className={`font-serif text-slate-500 dark:text-[#5a6a88] ${
          compact ? "text-base" : "text-lg"
        }`}
      >
        {institution.name}
      </span>
    );
  }

  const imageClass = `${
    compact ? institution.heightCompact : institution.height
  } w-auto opacity-75 transition-opacity group-hover:opacity-100 ${
    institution.scale ?? ""
  }`;

  const darkFallbackClass =
    !institution.darkSrc && institution.invertInDark
      ? "dark:brightness-0 dark:invert"
      : "";

  return (
    <>
      <img
        src={institution.src}
        alt={institution.name}
        onError={() => setMissing(true)}
        className={`${imageClass} ${
          institution.darkSrc ? "dark:hidden" : darkFallbackClass
        }`}
      />

      {institution.darkSrc && (
        <img
          src={institution.darkSrc}
          alt={institution.name}
          onError={() => setMissing(true)}
          className={`${imageClass} hidden dark:block`}
        />
      )}
    </>
  );
}

type InstitutionLogosProps = {
  /** "sm" for the landing-page header, "lg" for a standalone page. */
  size?: "sm" | "lg";
};

/**
 * The affiliation list and the logo row are one block: each logo carries the
 * superscript that the author names refer to, with the written-out name
 * beneath it. The logos alone would not do — two are wordmarks that shorten
 * the institution's name, and the Microsoft mark carries no text at all.
 */
export default function InstitutionLogos({
  size = "sm",
}: InstitutionLogosProps) {
  const compact = size === "sm";

  return (
    <div
      className={`flex flex-wrap items-end justify-center ${
        compact
          ? "gap-x-10 gap-y-7 sm:gap-x-14"
          : "gap-x-14 gap-y-8 sm:gap-x-18"
      }`}
    >
      {INSTITUTIONS.map((institution, i) => (
        <div
          key={institution.name}
          className="group flex flex-col items-center gap-3"
        >
          <InstitutionLogo institution={institution} compact={compact} />

          <div
            className={`text-slate-600 dark:text-[#8899b8] ${
              compact ? "text-[13px]" : "text-sm"
            }`}
          >
            <sup className="mr-0.5 font-mono text-[11px] text-blue-600 dark:text-blue-400">
              {i + 1}
            </sup>
            {AFFILIATIONS[i]}
          </div>
        </div>
      ))}
    </div>
  );
}
