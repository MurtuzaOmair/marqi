import { react } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Video = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video
        className="w-full h-full object-cover brightness-[0.9]"
        autoPlay
        muted
        loop
        preload="auto"
      >
        <source src="/final-images/12.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
