"use client";

import Lottie from "lottie-react";
import logoAnimation from "../../../public/lottie/motion_logo.json";

function Skeleton() {
  return (
    <div className="fixed z-[10000] bg-[#E4C042] h-[200vh] flex items-center justify-center">
      <div className="">
        <Lottie
          animationData={logoAnimation}
          loop={false}
          autoplay={true}
          className="w-[393.97px] h-auto"
          style={{
            mixBlendMode: "multiply",
            background: "transparent",
          }}
        />
      </div>
    </div>
  );
}

export default Skeleton;
