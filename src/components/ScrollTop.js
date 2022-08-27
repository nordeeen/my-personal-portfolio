import React, { useEffect } from "react";
import scrollTop from "../assets/scroll-top.png";

const ScrollTop = () => {
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
        <img
          src={scrollTop}
          alt="scrollTop-logo"
          className="bg-[#0a192f]"
          style={{ width: "60px" }}
        />
      </button>
    </div>
  );
};

export default ScrollTop;
