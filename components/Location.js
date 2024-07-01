import React, { useEffect, useRef } from "react";
import Heading from "./ReusableComponents/Heading";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image1 from "/public/webp/coral/111.webp";
import Image2 from "/public/jpg/location.jpg";
import Image3 from "/public/jpg/33.jpg";
import Image4 from "/public/carol.jpg";

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      sectionRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 2.75, delay: 0.25, ease: "Expo.easeOut" }
    );

    // Bind animation to scroll trigger on initial render
    ScrollTrigger.create({
      trigger: sectionRef.current,
      // scrub: false, // Enable smooth scrolling behavior
      start: "top 80%",
      end: "top 20%",
      animation,
    });

    // Cleanup function to remove the animation on component unmount
    return () => ScrollTrigger.killAll();
    ``;
  }, []);

  return (
    <div className="w-full my-[5vw] lg:my-[2.5vw] flex items-center justify-center  ">
      <div className="w-[95%] sm2:w-[90%] lg:w-[85%] flex items-center justify-between gap-[3vw] lg:gap-[1.5vw] flex-col">
        {/* <div className=" flex justify-center items-center w-full leading-none "> */}
        <h1
          ref={sectionRef}
          className={` text-[13vw] lg:text-[9.85vw] uppercase leading-none tracking-[-0.05em] sm2:tracking-[-0.08em]  lg:tracking-[0.775vw] lg:text-justify text-center  sm2:text-left text-[#51375b] font-light `}
        >
          The <span className=" font-normal ">Location</span>
        </h1>
        {/* </div> */}
        {/* projects */}
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-[3vw] lg:gap-0">
          <div className="lg:w-[45%] flex flex-col justify-center gap-[2.5vw] lg:gap-4">
            <Heading title={"Coral Gables"} />
            <div className="text-[2.75vw] lg:text-[1.25vw] text-[#51375bce] font-medium ">
              Hyderabad&apos;s cosmopolitan lifestyle is characterized by a
              harmonious coexistence of various communities and cultures. The
              city is known for its warm hospitality and friendly people. It
              offers a diverse range of recreational activities, including
              shopping malls, theaters, parks, and multiplexes, catering to
              different interests and preferences.
            </div>
            {/* <Link
              className="cursor-pointer w-fit transition-all duration-500 ease-in-out hover: hover:text-[white] bg-transparent border-[#51375b] border px-3 py-[6px]  text-[#51375b]"
              href={"/projects/coral-gables"}
            >
              Learn More
            </Link> */}

            <button class="group relative w-fit overflow-hidden overflow-x-hidden  bg-transparent border-[#51375b] border px-[1em] py-[0.5em] sm2:px-[0.85em] sm2:py-[0.4em] text-[2.85vw] lg:text-[1.25vw] text-[#51375b] hover:text-[#fcf3ff] ">
              <Link href={"/projects/coral-gables"}>
                <span class="relative z-10">Learn More</span>
                <span class="absolute inset-0 overflow-hidden ">
                  <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#3f2b47]  transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </Link>
            </button>
          </div>

          <div className="lg:w-[49.3%] base:h-[40vw] lg:h-[27.5vw] flex items-center justify-center">
            <Image
              style={{ filter: "grayscale(100%)" }}
              src={Image1}
              width={500}
              height={500}
              className="w-full object-cover opacity-100 h-full brightness-[.85]"
              alt="Our Projects"
            />
          </div>
        </div>
        <div className="w-full h-[85vh] lg:h-[150vh] flex justify-center ">
          <div className="gridlayout grid grid-cols-12 grid-rows-6 gap-[1vw]">
            <Image
              style={{ filter: "grayscale(75%)" }}
              src={Image2}
              alt="Image"
              className="w-full h-full col-start-1 col-span-6 row-start-1 row-span-2  "
            />

            <Image
              style={{ filter: "grayscale(75%)" }}
              src={Image3}
              alt="Image"
              className="w-full h-full col-start-7 col-span-6 row-start-1 row-span-2 "
            />

            <Image
              src={Image4}
              alt="Image"
              className="w-full h-full col-start-1 col-span-12 row-start-3 row-span-4   "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
