import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";

import Hero1 from "../public/hero/hero.webp";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const metropolis = localFont({
  src: "../styles/metropolis/METROPOLIS.woff2",
  variable: "--font-metropolis",
});

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRefs = useRef([]);

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

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 2.75,
            delay: 0.25,
            ease: "Expo.easeOut",
            scrollTrigger: {
              trigger: ref,
            },
            stagger: 0.5,
          }
        );
      }
    });

    // Cleanup function
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          // Kill the GSAP animations associated with the ref
          gsap.killTweensOf(ref);
          // Kill the ScrollTrigger instances associated with the ref
          ScrollTrigger.getAll().forEach((trigger) => {
            if (trigger.trigger === ref) {
              trigger.kill();
            }
          });
        }
      });
    };
  }, []);

  const images = [
    "/jpg/92.webp",
    "/jpg/3.jpg",
    "/jpg/12.jpg",
    "/jpg/Slideshow5.jpg",
    "/jpg/14.jpg",
    "/jpg/22.jpg",
    "/jpg/Slideshow4.jpg",
    "/jpg/90.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="w-full flex flex-col  justify-center my-[2.5%] ">
      {/* Hero Caption */}
      <div className=" flex items-center w-full leading-none px-[0.725%]">
        <h1
          ref={section1Ref}
          className={` text-[12.5vw] lg:text-[9.85vw] mb-[1.5vw]  leading-none tracking-[-0.85vw] lg:text-justify text-center sm2:text-left text-[#51375be4] font-light `}
        >
          sleek{" "}
          <span className=" tracking-[-0.775vw] text-[#51375b] font-normal uppercase">
            sophistication
          </span>
        </h1>
      </div>
      {/* Hero Image */}
      <div className="h-[65vh] lg:h-screen relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0  transition-opacity duration-1000 ease-in-out ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full brightness-[0.75]"
              fill={true}
            />
          </div>
        ))}
      </div>
      {/* SeamlessStyleUnmatchedFuctionalityExquisite */}
      <div className="  grid w-full h-full leading-[0.7]  grid-cols-30 grid-rows-30  text-[#51375b] text-[8.5vw]  font-normal uppercase  my-[2.5vw] ">
        <div
          ref={section2Ref}
          className={`col-span-15 col-start-11 lowercase italic ml-[0.5vw] `}
        >
          seamless
        </div>

        <div
          ref={section3Ref}
          className={`  col-span-8 col-start-14 row-start-2  lowercase italic leading-[0.75] ml-[1.165vw]  `}
        >
          style
        </div>

        <div
          ref={section4Ref}
          className={` col-span-21  col-start-11 row-start-3  ml-[2.5vw] `}
        >
          unmatched
        </div>

        <div
          ref={section5Ref}
          className={` col-span-26  col-start-3 row-start-4 `}
        >
          functionality
        </div>

        <div
          ref={section6Ref}
          id="exquisite"
          className=" col-span-17 col-start-18 row-start-5 "
        >
          exquisite
        </div>
      </div>
    </div>
  );
};

export default Hero;
