// components/Loading.js
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Loading = ({ setIsLoading, loadComplete }) => {
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    tl.to(
      {},
      {
        duration: loadComplete ? 0 : 4, // Finish quickly if the page has already loaded
        onUpdate: function () {
          const progress = Math.round(tl.progress() * 100);
          setLoadingPercent(progress);
        },
        onComplete: function () {
          setLoadingPercent(100);
        },
      }
    );

    return () => {
      tl.kill();
    };
  }, [setIsLoading, loadComplete]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#fcf3ff]">
      <div className="text-[#51375b] text-6xl font-normal">
        {loadingPercent}%
      </div>
    </div>
  );
};

export default Loading;
