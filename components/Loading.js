import React, { useState, useEffect } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const newProgress = oldProgress + 1;
        return Math.min(newProgress, 100);
      });
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#fcf3ff]">
      <div className="text-[#51375b] text-6xl font-normal">{progress}%</div>
    </div>
  );
};

export default Loading;
