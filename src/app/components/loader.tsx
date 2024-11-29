"use client";

import Lottie from "lottie-react";
import logoAnimation from "../../../public/lottie/motion_logo.json";

function LoaderPage({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) {
  return (
    <div className="bg-[#E4C042] h-[100vh] flex items-center justify-center">
      <div className="relative">
        <Lottie
          animationData={logoAnimation}
          loop={false}
          autoplay={true}
          className="w-[393.97px] h-auto"
          style={{
            mixBlendMode: "multiply",
            background: "transparent",
          }}
          onComplete={onAnimationComplete}
        />
      </div>
    </div>
  );
}

export default LoaderPage;
