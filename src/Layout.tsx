import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Components/Layout/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  /**
   * Pages scroll inside this element rather than the document, so the
   * router's own scroll handling never applies — without this, navigating
   * away from a scrolled page lands you at the same offset on the next one.
   */
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main ref={mainRef} className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
