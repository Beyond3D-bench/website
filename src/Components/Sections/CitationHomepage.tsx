import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CitationProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

/**
 * Title and author list are final; venue and year are placeholders until the
 * preprint is out. Keep this string as the single source of truth — it is what
 * both the code block and the copy button use.
 */
const BIBTEX = `@article{beyond3d,
  title   = {Long Time No See: Benchmarking VLMs for Out-of-Sight
             Spatiotemporal Reasoning in Egocentric Videos},
  author  = {Ma, Fangzhou and Ban, Ivo Alexander and Homburg, Eren and
             Goletto, Gabriele and Pautrat, R\\'emi and Rad, Mahdi and
             Plizzari, Chiara and Pollefeys, Marc},
  journal = {TBD},
  year    = {TBD},
}`;

export default function Citation({ ref, visible }: CitationProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BIBTEX);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard is unavailable (insecure origin, or permission denied) —
      // the text stays selectable in the block below.
      setCopied(false);
    }
  };

  return (
    <section
      ref={ref}
      className={`fade-up ${visible ? "in" : ""} mx-auto max-w-275 px-5 py-14 sm:px-8 sm:py-20`}
    >
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Citation
        </span>
      </div>

      <h2 className="mb-4 font-serif text-[clamp(28px,3vw,40px)] font-bold text-slate-950 dark:text-[#f0f2f8]">
        BibTeX
      </h2>

      <p className="mb-8 max-w-3xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 dark:text-[#5a6a88]">
        Venue and year are placeholders until the preprint is public.
      </p>

      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-[#1e2a40] dark:bg-white/3">
        <button
          type="button"
          onClick={copy}
          className="
            absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5
            font-mono text-[10px] uppercase tracking-wider transition-colors
            border-slate-200 bg-white text-slate-600 hover:text-slate-950 active:scale-95
            dark:border-[#1e2a40] dark:bg-[#0d1320] dark:text-[#8899b8] dark:hover:text-white
          "
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>

        <pre className="overflow-x-auto px-5 py-5 pr-24 font-mono text-[12px] leading-6 text-slate-700 dark:text-[#8899b8]">
          <code>{BIBTEX}</code>
        </pre>
      </div>
    </section>
  );
}
