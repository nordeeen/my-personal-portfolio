"use client";

import { useEffect } from "react";
import Image from "next/image";

const ScrollTop: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-20">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <Image
          src="/assets/scroll-top.png"
          className="bg-[#0a192f]"
          alt="scrollTop-logo"
          width={60}
          height={60}
          style={{ width: "60px", height: "auto" }}
        />
      </button>
    </div>
  );
};

export default ScrollTop;
