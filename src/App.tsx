import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout.tsx";

/**
 * Two pages: the paper overview and the question viewer. They are split so the
 * landing page does not carry the viewer's three.js scene or its trajectory
 * JSON, which together are the bulk of the bundle.
 */
const Homepage = lazy(() => import("./pages/Homepage.tsx"));
const QuestionView = lazy(() => import("./pages/QuestionView.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

function RouteFallback() {
  return (
    <div className="flex h-full items-center justify-center bg-white dark:bg-[#080c14]">
      <span className="sr-only">Loading</span>
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600 dark:border-[#1e2a40] dark:border-t-blue-500" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/questions" element={<QuestionView />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
