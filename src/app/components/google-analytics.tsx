"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const AnalyticsTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof (window as any).gtag === "function"
    ) {
      (window as any).gtag("config", "G-WTD75CT3EE", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
};

export default AnalyticsTracker;
