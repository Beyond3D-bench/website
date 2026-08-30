type AbstractProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function Abstract({ ref, visible }: AbstractProps) {
  return (
    <section
      ref={ref}
      className={`
        fade-up ${visible ? "in" : ""}
        px-5 py-14 sm:px-8 sm:py-20
      `}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Abstract
          </span>
        </div>

        <p className="text-[15px] leading-8 text-slate-700 sm:text-base sm:leading-9 dark:text-[#8899b8]">
          Real-world AI systems must reason about objects that are no longer
          visible: an AR assistant guiding a user back to an object used
          earlier, a household robot retrieving an item someone put away. This
          requires not just recalling where an object was last seen, but
          updating its state when it is moved and retaining that update once it
          leaves view. We refer to this as{" "}
          <strong className="font-semibold text-slate-900 dark:text-[#c5d0e8]">
            out-of-sight spatiotemporal reasoning
          </strong>
          . We introduce Beyond3D, the first VQA benchmark to isolate this
          ability in dynamic egocentric video: every query targets an object
          that has been relocated and has since left the field of view. We
          create our questions from{" "}
          <a
            href="https://hd-epic.github.io/site/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
          >
            HD-EPIC
          </a>{" "}
          annotations, building a visibility
          track for each dynamic object from its 3D position, the camera pose,
          and the scene geometry to understand at each moment whether it is
          visible, occluded, or out of view. Beyond3D comprises 9,000 questions
          in eight types over 135 videos from nine participants, organized as
          one reasoning chain: visual grounding (is the target observable now),
          temporal grounding (when it was last visible and last placed), scene
          localization (which fixture anchors that location), and 3D spatial
          perception (where it lies relative to the current viewpoint or another
          object in the scene). We benchmark nine general-purpose and spatially
          specialized VLMs. The best model reaches 42.2% against 29.7% chance
          and text-only baselines reaching 31.9%, with the largest failures in
          recovering when an object was last visible, showing that tracking
          object movement out of sight remains far from solved for current VLMs.
        </p>
      </div>
    </section>
  );
}
