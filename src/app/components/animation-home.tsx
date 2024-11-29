"use client";

import { useState } from "react";
import LoaderPage from "./loader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 5);
  };

  if (isLoading) {
    return <LoaderPage onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <div
      className={`transition-opacity duration-700 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
