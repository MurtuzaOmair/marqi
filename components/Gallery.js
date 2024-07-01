"use client";
// import { gsap } from "gsap";
import Picture1 from "/public/jpg/60.jpg";
import Picture2 from "/public/jpg/37.jpg";
import Picture3 from "/public/jpg/32.jpg";
import Picture4 from "/public/jpg/38.jpg";
import Picture5 from "/public/jpg/21.jpg";
import Picture6 from "/public/jpg/46.jpg";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const Gallery = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
      className: "w-[25vw] h-[25vh]",
    },
    {
      src: Picture2,
      scale: scale5,
      className:
        "md:top-[-14.5vh] left-[-31.25vw] md:left-[-28.375vw] w-[32.5vw] h-[25vh] md:w-[28.2vw] md:h-[64vh]  ",
    },
    {
      src: Picture3,
      scale: scale6,
      className:
        " top-[-29.5vh] md:top-[-31.35vh] w-[95vw] md:w-[55vw] md:left-[15vw] h-[30vh]",
    },
    {
      src: Picture4,
      scale: scale7,
      className: "top-[31.25vh] hidden md:block w-[25vw] h-[30vh]",
    },
    {
      src: Picture5,
      scale: scale8,
      className:
        "top-[27.15vh] md:top-[33.75vh] md:left-[-28.385vw]  w-[95vw] md:w-[28.2vw] h-[25vh]",
    },
    {
      src: Picture6,
      scale: scale6,
      className:
        "md:top-[16.75vh] left-[31.25vw] md:left-[28.385vw] w-[32.5vw] md:w-[28.2vw] h-[25vh] md:h-[58.75vh]",
    },
  ];

  return (
    <div
      ref={container}
      className=" w-screen mainContainer h-[300vh] relative "
    >
      <div className=" w-full max-w-[100vw] stickyContainer sticky top-0 h-[100vh]  overflow-hidden ">
        {pictures.map(({ src, scale, className }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className=" element w-full h-full absolute top-0 flex items-center justify-center "
            >
              <div className={`imageContainer relative ${className} `}>
                <Image
                  className=" object-cover brightness-[.85] "
                  src={src}
                  fill
                  alt="image"
                  placeholder="blur"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
