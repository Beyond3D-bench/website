type FooterProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function Footer({ ref, visible }: FooterProps) {
  return (
    <footer
      className={`fade-up flex flex-col gap-2 border-t border-slate-200 px-5 py-5 font-mono text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6 sm:text-xs dark:border-[#1e2a40] dark:text-[#2a3a56] ${
        visible ? "in" : ""
      }`}
      ref={ref}
    >
      <span>OutOfSight — VLM Spatial Memory Benchmark</span>
      <span>ETH Zürich · 3D Vision · 2026</span>
    </footer>
  );
}
