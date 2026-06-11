import Hero from "../Components/Sections/HeroHomepage";
import Trajectory from "../Components/Sections/TrajectoryHomepage";
import Pipeline from "../Components/Sections/PipelineHomework";
import View from "../Components/Sections/ViewHomepage";
import Footer from "../Components/Sections/Footer";
import { useDelayedInView } from "../Lib/DelayAnimation";

const capabilities = [
  {
    code: "Step 1",
    title: "Current visibility check",
    desc: "At the current time <TIME HH:MM:SS video X>, is the previously moved <Target Object> visible in the current frame?",
  },
  {
    code: "Step 2",
    title: "Last visible observation",
    desc: "The <Target Object> was moved earlier in the video. When was it last visible, and where was it located in the image at that moment?",
  },
  {
    code: "Step 3",
    title: "Last placement observation",
    desc: "The <Target Object> was moved earlier in the video. At what time did it stop moving? Where was it located in the image at that moment?",
  },
  {
    code: "Step 4",
    title: "Scene anchor",
    desc: "At the current time <TIME HH:MM:SS video X>, based on the last known position of the <Target Object> that was moved earlier, which counter area is closest to it?",
  },
  {
    code: "Step 5.a",
    title: "Egocentric object-camera relation inference",
    desc: "At the current time <TIME HH:MM:SS video X>, consider the <Target Object> that was moved earlier. Using its last known position to infer its current location, in which direction is the <Target Object> from your viewpoint?",
  },
  {
    code: "Step 5.b",
    title: "Egocentric object-object relation",
    desc: "At the current time <TIME HH:MM:SS video X>, consider the <Target Object> that was moved earlier. Using its last known position to infer its current location, and using the current position of the <Anchor Object> in the current frame, where is the <Target Object> relative to <Anchor Object> from your viewpoint?",
  },
  {
    code: "Step 5.c",
    title: "Object-object distance",
    desc: "At the current time <TIME HH:MM:SS video X>, consider the <Target Object> that was moved earlier. Using its last known position to infer its current location, and using the current position of the <Anchor Object> in the current frame, how far is the <Target Object> from the <Anchor Object>: close, less than 1 meter; medium, at least 1 meter but less than 1.5 meters; or far, 1.5 meters or more?",
  },
];

const stats = [
  { value: "HD-EPIC", label: "Dataset" },
  { value: "7", label: "Question types" },
  { value: "3D", label: "Spatial reasoning" },
  { value: "VLM", label: "Evaluation target" },
];

export default function Homepage() {
  const { ref: heroRef, visible: heroVisible } = useDelayedInView(500);
  const { ref: trajectoryRef, visible: trajectoryVisible } =
    useDelayedInView(500);
  const { ref: pipelineRef, visible: pipelineVisible } = useDelayedInView(500);
  const { ref: viewRef, visible: viewVisible } = useDelayedInView(500);
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

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,91,219,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,91,219,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%);
        }

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

      {/* ── WHAT WE TEST ─────────────────────────────────────── */}
      <Trajectory
        ref={trajectoryRef}
        visible={trajectoryVisible}
        capabilities={capabilities}
      />

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <Pipeline ref={pipelineRef} visible={pipelineVisible} />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <View ref={viewRef} visible={viewVisible} />

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <Footer ref={footerRef} visible={footerVisible} />
    </div>
  );
}
