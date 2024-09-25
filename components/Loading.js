// components/Loading.js
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Loading = ({ setIsLoading }) => {
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(
      {},
      {
        duration: 2, // 2 seconds animation duration
        onUpdate: function () {
          const progress = Math.round(tl.progress() * 100);
          setLoadingPercent(progress);
        },
        onComplete: () => setIsLoading(false),
      }
    );

    return () => {
      tl.kill();
    };
  }, [setIsLoading]);

  //   useEffect(() => {
  //     const tl = gsap.timeline();

  //     tl.to(".loading-text", {
  //       opacity: 1,
  //       duration: 1,
  //       ease: "power2.out",
  //     }).to(".loading-text", {
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power2.in",
  //       onComplete: () => setIsLoading(false),
  //     });

  //     return () => {
  //       tl.kill();
  //     };
  //   }, [setIsLoading]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#fcf3ff]">
      <div className="text-[#51375b] text-6xl font-normal">
        {loadingPercent}%
      </div>
    </div>
  );
};

export default Loading;
