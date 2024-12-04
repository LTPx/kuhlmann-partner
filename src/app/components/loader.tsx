"use client";

import { useEffect } from "react";

function LoaderPage({
  onAnimationComplete,
  duration = 5000,
}: {
  onAnimationComplete: () => void;
  duration?: number;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onAnimationComplete, duration]);

  return (
    <div className="bg-[#E4C042] h-[100vh] flex items-center justify-center">
      <video
        src="/video/logo.mp4"
        className="w-full h-full"
        autoPlay
        muted
        loop={false}
      />
    </div>
  );
}

export default LoaderPage;
