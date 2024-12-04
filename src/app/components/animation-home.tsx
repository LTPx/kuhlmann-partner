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
      style={{
        transition: "opacity 3s",
      }}
      className={`${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
