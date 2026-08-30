type AcknowledgementsProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function Acknowledgements({
  ref,
  visible,
}: AcknowledgementsProps) {
  return (
    <section
      ref={ref}
      className={`
        fade-up ${visible ? "in" : ""}
        px-5 py-12 sm:px-8 sm:py-14
      `}
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Acknowledgements
          </span>
        </div>

        <p className="text-balance text-[15px] leading-7 text-slate-600 dark:text-[#5a6a88]">
          We thank Xiaoxuan Cheng (ETH Zürich) for assistance with running
          experiments on the cluster and with the project presentation.
        </p>
      </div>
    </section>
  );
}
