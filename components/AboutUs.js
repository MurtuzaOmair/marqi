import React, { useEffect, useLayoutEffect, useRef } from "react";
import Heading from "./ReusableComponents/Heading";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
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
      scrub: true, // Enable smooth scrolling behavior
      start: "top 80%",
      end: "top 20%",
      animation,
    });

    // Cleanup function to remove the animation on component unmount
    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <div className="w-full my-[5vw]  lg:my-[2.5vw] flex items-center justify-center ">
      <div className="  w-[95%] sm2:w-[90%] lg:w-[85%] flex items-center justify-between flex-col  lg:flex-row gap-[4vw] lg:gap-0 ">
        <div className=" w-full lg:w-[45%] h-[60vh]  lg:h-[80vh] ">
          <Image
            src={"/jpg/about2.jpg"}
            className="w-full object-cover h-full brightness-[0.85] "
            width={1000}
            height={1000}
            priority={true}
            alt="about"
          />
        </div>

        <div className=" w-full lg:w-[45%] flex flex-col gap-[2.5vw]   ">
          <Heading title={"About Us"} />
          <div className=" text-[2.75vw] lg:text-[1.5vw]  text-[#51375bce]  font-medium">
            We are a passionate group of professionals dedicated to designing
            and constructing exquisite and sustainable environments. Our team
            brings together extensive global expertise and collaborates with
            cutting-edge international partners to create luxurious properties
            that are built to withstand the test of time.
            <br /> By paying meticulous attention to every detail and utilizing
            high-quality finishes, we strive to establish a new benchmark for
            excellence in the Indian real estate market.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
