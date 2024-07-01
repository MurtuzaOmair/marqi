import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Video = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((ref) => {
      gsap.from(ref, {
        opacity: 0,
        y: 0,
        duration: 1.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref,
        },
      });
    });
  }, []);

  // Add as many sections as needed here
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  useEffect(() => {
    sectionRefs.current = [
      section1Ref.current,
      section2Ref.current,
      section3Ref.current,
      section4Ref.current,
      section5Ref.current,
      section6Ref.current,
    ];
  }, []);

  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <video
        className="w-full h-full object-cover brightness-[0.9]"
        autoPlay
        muted
        loop
      >
        <source src="/HeroVideos(webm)/11.webm" type="video/webm" />
        {/* Add additional source tags for different formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
