import { Link } from "react-router-dom";
import Footer from "../Components/Sections/Footer";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-white text-slate-900 dark:bg-[#080c14] dark:text-[#e8eaf0]">
      <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <span className="mb-6 font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
          404
        </span>

        <h1 className="mb-5 font-serif text-[clamp(32px,5vw,48px)] font-bold leading-[1.05] text-slate-950 dark:text-[#f0f2f8]">
          This page is out of sight
        </h1>

        <p className="mb-10 max-w-md text-[15px] leading-7 text-slate-600 dark:text-[#5a6a88]">
          The page you asked for does not exist. Unlike the objects in our
          benchmark, it was never here to begin with.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="
              inline-flex items-center justify-center rounded-xl
              bg-linear-to-r from-blue-500 to-blue-600
              px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20
              transition-all duration-300
              hover:from-blue-400 hover:to-blue-500 hover:shadow-blue-500/40
              active:scale-95
            "
          >
            Back to the benchmark
          </Link>

          <Link
            to="/questions"
            className="
              inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium
              border border-slate-200 bg-slate-100 text-slate-800 shadow-sm
              transition-all duration-300
              hover:border-slate-300 hover:bg-white hover:text-slate-950 hover:shadow-md
              active:scale-95
              dark:border-white/10 dark:bg-white/5 dark:text-gray-200
              dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white
            "
          >
            View questions
          </Link>
        </div>
      </section>

      <Footer visible={true} />
    </div>
  );
}
