import ThemedFigure from "./ThemedFigure";

type TeaserProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

/**
 * Figure 1. The source figure is very wide and dense with small type, so it
 * gets the full content width and links out to the full-resolution version —
 * at phone width the labels are not readable inline.
 */
export default function Teaser({ ref, visible }: TeaserProps) {
  return (
    <section
      ref={ref}
      className={`fade-up ${visible ? "in" : ""} mx-auto max-w-275 px-5 pb-14 sm:px-8 sm:pb-20`}
    >
      <ThemedFigure
        light={`${import.meta.env.BASE_URL}teaser.jpg`}
        dark={`${import.meta.env.BASE_URL}teaser-dark.jpg`}
        alt="Overview of the Beyond3D benchmark..."
        width={2200}
        height={1145}
      >
        <figcaption className="mt-4 text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
          <span className="font-medium text-slate-800 dark:text-[#c5d0e8]">
            Figure 1.
          </span>{" "}
          As an object — here a box of eggs — is moved by the camera wearer and
          leaves the field of view, the benchmark poses eight questions that
          progressively probe the reasoning needed to recover its state.
          Answering them requires a model to track actively manipulated objects,
          update their spatial state after relocation, and recall that state
          once the objects leave view.
        </figcaption>
      </ThemedFigure>
    </section>
  );
}
