import Hero from "../Components/Sections/HeroHomepage";
import Teaser from "../Components/Sections/TeaserHomepage";
import Abstract from "../Components/Sections/AbstractHomepage";
import Problem from "../Components/Sections/ProblemHomepage";
import Comparison from "../Components/Sections/ComparisonHomepage";
import Trajectory from "../Components/Sections/TrajectoryHomepage";
import Pipeline from "../Components/Sections/PipelineHomework";
import Statistics from "../Components/Sections/StatisticsHomepage";
import Results from "../Components/Sections/ResultsHomepage";
import Qualitative from "../Components/Sections/QualitativeHomepage";
import Takeaway from "../Components/Sections/TakeawayHomepage";
import Citation from "../Components/Sections/CitationHomepage";
import Acknowledgements from "../Components/Sections/AcknowledgementsHomepage";
import Footer from "../Components/Sections/Footer";
import { useDelayedInView } from "../Lib/DelayAnimation";

const stats = [
  { value: "9,000", label: "Questions" },
  { value: "8", label: "Question types" },
  { value: "1,000", label: "Out-of-sight anchors" },
  { value: "135", label: "Egocentric videos" },
];

export default function Homepage() {
  const { ref: heroRef, visible: heroVisible } = useDelayedInView(500);
  const { ref: trajectoryRef, visible: trajectoryVisible } =
    useDelayedInView(500);
  const { ref: teaserRef, visible: teaserVisible } = useDelayedInView(300);
  const { ref: abstractRef, visible: abstractVisible } = useDelayedInView(300);
  const { ref: problemRef, visible: problemVisible } = useDelayedInView(300);
  const { ref: comparisonRef, visible: comparisonVisible } =
    useDelayedInView(300);
  const { ref: pipelineRef, visible: pipelineVisible } = useDelayedInView(500);
  const { ref: statsRef, visible: statsVisible } = useDelayedInView(300);
  const { ref: resultsRef, visible: resultsVisible } = useDelayedInView(300);
  const { ref: qualRef, visible: qualVisible } = useDelayedInView(300);
  const { ref: takeawayRef, visible: takeawayVisible } = useDelayedInView(300);
  const { ref: citationRef, visible: citationVisible } = useDelayedInView(300);
  const { ref: ackRef, visible: ackVisible } = useDelayedInView(300);
  const { ref: footerRef, visible: footerVisible } = useDelayedInView(500);

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden bg-white text-slate-900 dark:bg-[#080c14] dark:text-[#e8eaf0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        * { box-sizing: border-box; }

        .homepage-font {
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
        }

        .fade-up.in {
          opacity: 1;
          transform: translateY(0);
        }

        .d1 { transition-delay: 0.05s; }
        .d2 { transition-delay: 0.15s; }
        .d3 { transition-delay: 0.25s; }
        .d4 { transition-delay: 0.35s; }
        .d5 { transition-delay: 0.45s; }
        .d6 { transition-delay: 0.55s; }

        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.018;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
        }

        .logo-ring {
          position: absolute;
          border-radius: 50%;
          border: 0.5px solid rgba(59,91,219,0.2);
          animation: spin linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-row { flex-wrap: wrap; gap: 20px !important; }
          .stat-divider { display: none; }
          .caps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}

      <Hero ref={heroRef} visible={heroVisible} stats={stats} />

      {/* ── TEASER FIGURE ────────────────────────────────────── */}
      <Teaser ref={teaserRef} visible={teaserVisible} />

      {/* ── ABSTRACT ─────────────────────────────────────────── */}
      <Abstract ref={abstractRef} visible={abstractVisible} />

      {/* ── WHY IT MATTERS ───────────────────────────────────── */}
      <Problem ref={problemRef} visible={problemVisible} />

      {/* ── WHY IT IS NEEDED ─────────────────────────────────── */}
      <Comparison ref={comparisonRef} visible={comparisonVisible} />

      {/* ── WHAT WE ASK ──────────────────────────────────────── */}
      <Trajectory ref={trajectoryRef} visible={trajectoryVisible} />

      {/* ── HOW IT IS BUILT ──────────────────────────────────── */}
      <Pipeline ref={pipelineRef} visible={pipelineVisible} />

      {/* ── EVALUATION SET STATISTICS ────────────────────────── */}
      <Statistics ref={statsRef} visible={statsVisible} />

      {/* ── RESULTS ──────────────────────────────────────────── */}
      <Results ref={resultsRef} visible={resultsVisible} />

      {/* ── QUALITATIVE ──────────────────────────────────────── */}
      <Qualitative ref={qualRef} visible={qualVisible} />

      {/* ── TAKEAWAY ─────────────────────────────────────────── */}
      <Takeaway ref={takeawayRef} visible={takeawayVisible} />

      {/* ── CITATION ─────────────────────────────────────────── */}
      <Citation ref={citationRef} visible={citationVisible} />

      {/* ── ACKNOWLEDGEMENTS ─────────────────────────────────── */}
      <Acknowledgements ref={ackRef} visible={ackVisible} />

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <Footer ref={footerRef} visible={footerVisible} />
    </div>
  );
}
