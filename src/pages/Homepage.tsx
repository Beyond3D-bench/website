import Hero from "../Components/Sections/HeroHomepage";
import Trajectory from "../Components/Sections/TrajectoryHomepage";
import Pipeline from "../Components/Sections/PipelineHomework";
import View from "../Components/Sections/ViewHomepage";
import Footer from "../Components/Sections/Footer";
import { useDelayedInView } from "../Lib/DelayAnimation";

const capabilities = [
  {
    code: "Q1 — Visual grounding",
    title: "Visibility check",
    desc: "At <TIME HH:MM:SS.s video 1>, is the previously moved <Target Object> visible in the current frame?",
    choices: "No; Yes",
  },
  {
    code: "Q2 — Temporal grounding",
    title: "Last visible time",
    desc: "Which timestamp is closest to when the <Target Object> was last visible?",
    choices: "5 timestamps: HH:MM:SS — N seconds before the end",
  },
  {
    code: "Q3 — Temporal grounding",
    title: "Last placement time",
    desc: "The <Target Object> was moved earlier in the video. Which timestamp is closest to when it last stopped being moved?",
    choices: "5 timestamps: HH:MM:SS — N seconds before the end",
  },
  {
    code: "Q4 — Scene localization",
    title: "Nearest fixture",
    desc: "At <TIME HH:MM:SS.s video 1>, based on the last known position of the <Target Object> that was moved earlier, which fixture type is closest to it? / which counter area is closest to it?",
    choices: "5 fixture types / 3–6 kitchen-dependent counter areas",
  },
  {
    code: "Q5 — 3D spatial perception",
    title: "Object–camera direction",
    desc: "At <TIME HH:MM:SS.s video 1>, assuming the previously moved <Target Object> remains at its last known position, in which direction is the <Target Object> from your viewpoint?",
    choices: "Front-right; Back-right; Front-left; Back-left",
  },
  {
    code: "Q6 — 3D spatial perception",
    title: "Object–camera distance",
    desc: "At <TIME HH:MM:SS.s video 1>, assuming the previously moved <Target Object> remains at its last known position, what is the distance between the camera and where the <Target Object> was left?",
    choices: "Under 1 m; 1 to under 1.5 m; 1.5 m or more",
  },
  {
    code: "Q7 — 3D spatial perception",
    title: "Object–object direction",
    desc: "At <TIME HH:MM:SS.s video 1>, assuming the previously moved <Target Object> remains at its last known position, where is it relative to the <Reference Object> (marked in red in the current frame) from your viewpoint?",
    choices: "12 to 4:30 o'clock; 4:30 to 7:30 o'clock; 7:30 to 12 o'clock",
  },
  {
    code: "Q8 — 3D spatial perception",
    title: "Object–object distance",
    desc: "At <TIME HH:MM:SS.s video 1>, assuming the previously moved <Target Object> remains at its last known position, how far is it relative to the <Reference Object> (marked in red in the current frame)?",
    choices: "Under 1 m; 1 to under 1.5 m; 1.5 m or more",
  },
];

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
