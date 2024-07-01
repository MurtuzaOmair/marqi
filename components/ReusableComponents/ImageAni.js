import { gsap } from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const ImageAni = ({ className, src, alt, ref1, ref2 }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (ref1.current) {
      gsap.to(ref1.current, {
        scale: 1,
        duration: 3,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: ref1.current,
        },
      });
    }

    if (ref2.current) {
      gsap.to(ref2.current, {
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: ref2.current,
        },
      });
    }
  }, [ref1, ref2]);

  return (
    <div ref={ref1} className={`overflow-hidden w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt || "Image"}
        layout="fill"
        objectFit="cover"
        className="brightness-[0.85]"
      />
    </div>
  );
};

export default ImageAni;
