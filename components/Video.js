import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" }
      );
    }
  }, []);

  return (
    <div className="w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/final-media/main/video/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default React.memo(Video);
