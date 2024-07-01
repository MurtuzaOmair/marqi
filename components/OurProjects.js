import React, { useEffect, useRef } from "react";
import Heading from "./ReusableComponents/Heading";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurProjects = () => {
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
  }, []);

  return (
    <div className="w-full my-[5vw] lg:my-[2.5vw] flex items-center justify-center  ">
      <div className="w-[95%] sm2:w-[90%] lg:w-[85%] flex items-center justify-between gap-[3vw] lg:gap-[1.5vw] flex-col">
        <div className=" flex justify-center items-center w-full leading-none ">
          <h1
            ref={sectionRef}
            className={` text-[13vw] lg:text-[9.85vw] uppercase leading-none tracking-[0.484vw] lg:text-justify text-center sm2:text-left text-[#51375b] font-light `}
          >
            our <span className=" font-normal ">projects</span>
          </h1>
        </div>
        {/* projects */}
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-[3vw] lg:gap-0">
          <div className="lg:w-[45%] flex flex-col gap-[2.5vw] lg:gap-4">
            <Heading title={"Coral Gables"} />
            <div className="text-[2.75vw] lg:text-[1.5vw] text-[#51375bce] font-medium ">
              {/* Optimized text content for clarity */}
              Our concept of luxury goes beyond mere opulence and extravagance.
              We value creating exceptional environments that seamlessly combine
              serenity, practicality, and sustainability. Our commitment to
              design is evident in the intricate craftsmanship of our villas,
              each a testament to our passion.
            </div>
            <Link
              className="cursor-pointer w-fit transition-all duration-500 ease-in-out hover:bg-[#51375b] hover:text-[white] bg-transparent border-[#51375b] border px-3 py-[6px] lg:text-[1.5vw] text-[#51375b]"
              href={"/projects/coral"}
            >
              Learn More
            </Link>
          </div>
          <div className="border-r pr-5 border-[#51375b]"></div>
          <div className="lg:w-[45%] base:h-[20rem] lg:h-[30vw] flex items-center justify-center">
            <Image
              src={"/webp/coral/2.webp"}
              width={500}
              height={500}
              className="w-full object-cover opacity-100 h-full brightness-[.85]"
              alt="Our Projects"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;

// useEffect(() => {
//   const splitTypes = document.querySelectorAll(".reveal-type");
//   splitTypes.forEach((char, i) => {
//     const text = new SplitType(char, { types: "chars" });
//     gsap.from(text.chars, {
//       scrollTrigger: {
//         trigger: char,
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true,
//         markers: false,
//       },
//       opacity: 0.4,
//       stagger: 0.1,
//       ease: "Expo.easeOut",
//     });
//   });
// }, []);
