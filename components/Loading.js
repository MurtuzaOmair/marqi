// components/Loading.js
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Loading = ({ loadingProgress }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#fcf3ff]">
      <div className="text-[#51375b] text-6xl font-normal">
        {loadingProgress}%
      </div>
    </div>
  );
};
export default Loading;
