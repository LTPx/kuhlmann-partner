"use client";

import { useState, useEffect } from "react";
import LoaderPage from "./loader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasShownLoader = sessionStorage.getItem("hasShownLoader");

    if (!hasShownLoader) {
      setIsFirstVisit(true);
      setIsLoading(true);
      sessionStorage.setItem("hasShownLoader", "true");
    } else {
      setShowContent(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 5);
  };

  if (isLoading && isFirstVisit) {
    return <LoaderPage onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <div
      style={{
        transition: "opacity 3s",
      }}
      className={`${showContent ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
