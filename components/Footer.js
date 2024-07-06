import { gsap } from "gsap";
import localFont from "next/font/local";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metropolis = localFont({
  src: "../styles/metropolis/METROPOLIS.woff2",
  variable: "--font-metropolis",
});

const Line = ({ path, top, border }) => {
  useEffect(() => {
    gsap.fromTo(
      border.current,
      {
        width: 0,
      },
      {
        width: "100%",

        duration: 0.75,
        ease: "Expo.easeOut",
        delay: 0.005,
        scrollTrigger: {
          trigger: border.current,
        },
      }
    );
    gsap.fromTo(
      border.current.children,
      {
        y: -1.5,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        duration: 0.75,
        ease: "Expo.easeOut",
        stagger: 0.5,
        delay: 0.0005,
        scrollTrigger: {
          trigger: border.current,
        },
      }
    );
    gsap.fromTo(
      border.current,
      {
        width: 0,
      },
      {
        width: "100%",

        duration: 0.75,
        ease: "Expo.easeOut",
        delay: 0.0005,
        scrollTrigger: {
          trigger: border.current,
        },
      }
    );
    gsap.fromTo(
      border.current.children,
      {
        y: 1.5,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        duration: 0.75,
        ease: "Expo.easeOut",
        stagger: 0.5,
        delay: 0.0005,
        scrollTrigger: {
          trigger: border.current,
        },
      }
    );
  });

  return (
    <div
      ref={border}
      className=" w-full transition ease-out duration-500 h-[0.5px] bg-[#51375b] relative flex justify-center items-center"
    >
      <svg
        className={` absolute ${top} `}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        id="arrow-drop-down"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path fill="#51375b" d={path}></path>
      </svg>
    </div>
  );
};

const Footer = () => {
  const logoTextRef = useRef(null);
  const footerContent = useRef(null);

  const useGSAPAnimation = (ref, triggerOptions = {}) => {
    useEffect(() => {
      if (!ref.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 20%",
          ...triggerOptions,
        },
      });

      tl.fromTo(
        ref.current.querySelectorAll("*"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          stagger: 0.115,
        }
      );

      return () => {
        if (tl.scrollTrigger) {
          ScrollTrigger.getAll().forEach((trigger) => {
            if (trigger.animation === tl) {
              trigger.kill();
            }
          });
        }
        tl.kill();
      };
    }, [ref, triggerOptions]);
  };

  const onLogoEnter = () => {
    const currColor = logoTextRef.current.getAttribute("data-color");
    const logoText = logoTextRef.current;

    const nextColor =
      currColor === "#FF85A1"
        ? "#76398C"
        : currColor === "#76398C"
        ? "#51375b"
        : "#FF85A1";

    logoTextRef.current.setAttribute("data-color", nextColor);
    gsap.to(logoText, {
      color: currColor,
      duration: 0.2,
      ease: "power1.out",
    });
  };
  const onLogoLeave = () => {
    const logoText = logoTextRef.current;

    gsap.to(logoText, {
      backgroundClip: "text",
      color: "transparent",
      duration: 0.2,
      ease: "power1.out",
    });
  };

  const border1 = useRef(null);
  const border2 = useRef(null);

  // const quickLinks = ["Feedback", "Privacy", "Terms"];

  const connectItems = [
    { label: "Email", href: "mailto:", value: "aman@thehillsglobal.com" },
    { label: "Email", href: "mailto:", value: "mrinal@thehillsglobal.com" },
    { label: "Phone", href: "tel:", value: "+91 988-509-5844" },
    { label: "Phone", href: "tel:", value: "+91 986-603-7900" },
  ];

  useGSAPAnimation(footerContent);
  return (
    <div className="w-full flex justify-center ">
      <div
        ref={footerContent}
        className=" w-[100%]   flex flex-col justify-center items-center  "
      >
        <Line
          border={border1}
          path={"M7 10l5 5 5-5H7z"}
          top={"-top-[9.65px]"}
        />
        <div className="  w-full flex flex-col md:flex-row  ">
          <div className="py-10 md:py-14 text-[#51375b] text-opacity-90 uppercase font-semibold justify-between px-4 md:px-10 text-[2.75vw] md:text-[1vw] w-full md:w-1/3 flex flex-col items-center md:items-start gap-3 md:gap-6 ">
            <text>Connect</text>
            <div className=" font-semibold flex flex-col items-center md:items-start text-[#51375b] text-opacity-90">
              {connectItems.map((item, index) => (
                <text key={index}>
                  {item.label}{" "}
                  <a href={`${item.href}${item.value}`}>
                    <span className=" text-[#51375b8d] transition-all duration-500 cursor-pointer ease-in-out hover:text-[#51375b]">
                      {item.value}
                    </span>
                  </a>
                </text>
              ))}
            </div>
          </div>

          <div className=" w-full md:w-1/3 flex flex-col gap-4 items-center  justify-center ">
            <text
              data-color="#51375bce"
              ref={logoTextRef}
              onMouseEnter={onLogoEnter}
              onMouseLeave={onLogoLeave}
              className={`${metropolis.className} transition-all duration-300 ease-in-out text-[12.5vw] sm2:text-[9.5vw] md:text-[7vw] leading-none lg:text-[4.5vw]  cursor-none text-[transparent] bg-clip-text bg-gradient-to-r from-[rgba(170,115,52,1)] via-[rgba(208,168,93,1)]  to-[rgba(182,128,55,1)] `}
            >
              <Link href={""} style={{ cursor: "none" }}>
                MARQI
              </Link>
            </text>
          </div>
          <div className=" w-full md:w-1/3 py-10 md:pt-14 flex flex-col justify-center items-center md:items-end px-4 md:px-10 gap-8 md:gap-[min(3vw,2.85rem)] ">
            <div className=" w-full flex flex-col uppercase text-[2.75vw] md:text-[1vw]  font-semibold items-center md:items-end ">
              <div className=" text-[#51375b] text-opacity-90 ">
                Follow us on{" "}
                <span className=" text-[#51375b8d]  ">Instagram</span>
              </div>
              <div className=" text-[#51375b] text-opacity-90 ">
                Site by <span className=" text-[#51375b8d] ">OA</span>
              </div>
            </div>
            <div className="  uppercase text-[2.75vw] md:text-[1vw]  font-semibold  text-[#51375b] text-opacity-90  ">
              COPYRIGHT 2023 © MARQI ASSOCIATES
            </div>
          </div>
        </div>
        <Line
          border={border2}
          path={"M7 14l5-5 5 5H7z"}
          top={"-top-[13.5px]"}
        />
      </div>
    </div>
  );
};

export default Footer;
