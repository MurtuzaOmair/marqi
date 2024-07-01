import { gsap } from "gsap";

import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ImageAni = ({ className, src, ref1, ref2 }) => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.to(ref1.current, {
  //     scale: 1,
  //     duration: 3,
  //     ease: "Expo.easeOut",
  //     scrollTrigger: {
  //       trigger: ref1.current,
  //     },
  //   });
  //   gsap.to(ref2.current, {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 3,
  //     ease: "Expo.easeOut",
  //     scrollTrigger: {
  //       trigger: ref2.current,
  //     },
  //   });
  // }, []);

  return (
    <>
      {/* // <div ref={ref1} className={`overflow-hidden w-full h`}> */}
      <img
        src={src}
        className="w-full object-cover opacity-100 h-full  brightness-[0.85]"
      ></img>
      {/* </div> */}
    </>
  );
};

export default ImageAni;
