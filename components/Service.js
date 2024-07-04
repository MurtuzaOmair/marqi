import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  // State for selected service index
  const [selectedService, setSelectedService] = useState(0);

  const imageContainer = useRef(null);
  const phraseRef = useRef(null);
  const borderRefs = useRef(null);

  const border1Ref = useRef(null);
  const border2Ref = useRef(null);
  const border3Ref = useRef(null);
  const border4Ref = useRef(null);
  const border5Ref = useRef(null);

  const services = [
    {
      titleOne: "Proprietà",
      titleTwo: "Property",
      src: "final-media/main/services/property.jpg",
      phrase: "Crafting your haven, brick by dream.",
      border: border1Ref,
    },
    {
      titleOne: "Costruzione",
      titleTwo: "Construction",
      src: "final-media/main/services/construction.jpg",
      phrase: "The art of shaping your world.",
      border: border2Ref,
    },
    {
      titleOne: "Disegni",
      titleTwo: "Design",
      src: "final-media/main/services/design.png",
      phrase: "Curating experiences, one detail at a time.",
      border: border3Ref,
    },
    {
      titleOne: "Esportare",
      titleTwo: "Export",
      src: "final-media/main/services/exports.jpg",
      phrase: "Bridging borders, building opportunities.",
      border: border4Ref,
    },
  ];

  useEffect(() => {
    const imageElement = imageContainer.current;
    if (!imageElement) return;

    const phraseElement = phraseRef.current;
    if (!phraseElement) return;

    const isLargeScreen = window.innerWidth >= 990; // Adjust breakpoint as needed (e.g., lg: 1024px)

    if (!isLargeScreen) return; // Skip pinning on smaller screens

    const trigger = gsap.timeline({
      scrollTrigger: {
        trigger: imageElement,
        start: "-=50", // Pin the element at the top of the viewport
        end: "+=250", // Unpin 100px after the element enters the viewport
        scrub: true, // Create a smooth pinning effect while scrolling
        pin: true, // Pin the element during the trigger timeframe
        // markers: true,
      },
    });

    trigger.to(imageElement, { duration: 0.5, ease: "power3.inOut" }); // Add some animation for pinning/unpinning

    gsap.fromTo(
      phraseElement,
      { marginTop: 0 },
      {
        marginTop: "25vw",
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: phraseElement,

          scrub: 3,
        },
      }
    );

    return () => {
      // Cleanup function to destroy the ScrollTrigger instance when the component unmounts
      trigger.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center my-[5vw] p-0 ">
      <div className="w-[95%] sm2:w-[90%] lg:w-[85%] flex flex-col justify-center gap-[5vw] lg:gap-[3vw]">
        <div className=" w-full flex gap-[7.5vw] ">
          <div
            ref={imageContainer}
            className="w-full lg:w-[30%] h-[55vw] lg:h-[33vw] z-[2] "
          >
            <Image
              className="w-full h-full object-cover brightness-[0.85] transition-all duration-500 ease-in-out"
              src={`/${services[selectedService].src}`}
              width={1000}
              height={1000}
              priority={true}
              alt="Service Image"
            />
          </div>
          <p
            ref={phraseRef}
            className=" w-[61%] min-h-full text-[#51375b] hidden lg:flex justify-center items-center font-semibold text-[2vw] z-0 m "
          >
            {services[selectedService].phrase}
          </p>
        </div>
        <div className="w-full flex flex-col justify-end ">
          {services.map((service, index) => (
            <div
              ref={service.border}
              onMouseOver={() => setSelectedService(index)}
              key={`service_${index}`}
              className="w-full flex justify-center sm2:justify-end leading-[1.75] border-t border-[#51375b] cursor-pointer opacity-80 hover:opacity-100 lg:hover:scale-[.99] transition ease-in duration-[325ms] text-[#51375ba9] serviceslist "
            >
              <p className="text-[5.25vw] sm2:text-[4.75vw] lg:text-[2.85vw] uppercase font-semibold m-0">
                {service.titleOne} e{" "}
                <span className="text-[#51375b]">{service.titleTwo}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
