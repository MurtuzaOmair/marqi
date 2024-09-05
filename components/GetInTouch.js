import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import { gsap } from "gsap";

const metropolis = localFont({
  src: "../styles/metropolis/METROPOLIS.woff2",
  variable: "--font-metropolis",
});

const GetInTouch = () => {
  return (
    <div className=" w-full  flex flex-col items-center justify-center gap-7 py-16 md:py-24 border-t border-[#929197] uppercase  ">
      <text
        style={{ filter: " brightness(90%)" }}
        className=" text-[0.7rem] text-[#929197] font-semibold text-opacity-90 "
      >
        Get in touch
      </text>
      <text
        style={{ filter: " brightness(110%)" }}
        className={`${metropolis.className} w-[73.25%] sm2:w-[80%] lg:w-[67%] leading-[12.5vw] text-center tracking-[-1.7vw]  text-[15vw] h-[28vw]  text-[transparent] bg-clip-text bg-gradient-to-r from-[rgba(170,115,52,1)] via-[rgba(208,168,93,1)]  to-[rgba(182,128,55,1)] `}
      >
        Work with us
      </text>
      <text className=" w-[65%] text-center md:w-full md:ml-8 normal-case text-xs lg:text-sm pt-5 text-[#929197]  ">
        Send us a message to discuss your project in further detail, or for
        information about our services.
      </text>
      <div className=" w-[60%] md:w-[75%] md:ml-7 flex flex-col md:flex-row justify-between items-center gap-7 md:gap-4 md:mt-5">
        <input
          type="text"
          placeholder="Name"
          className=" w-full placeholder:text-xs placeholder:text-[#9a98a0db] focus:border-0 p-2 border-b-[1.5px] text-[#929197] text-base border-[rgba(208,168,93,1)] bg-transparent h-12 active:border-0"
        />
        <input
          type="email"
          placeholder="Email"
          className=" w-full placeholder:text-xs placeholder:text-[#9A98A0db] focus:border-0 p-2 border-b-[1.5px] text-[#929197] text-base border-[rgba(208,168,93,1)] bg-transparent h-12 active:border-0"
        />
        <input
          type="tel"
          placeholder="Phone"
          className=" w-full placeholder:text-xs placeholder:text-[#9A98A0db] focus:border-0 p-2 border-b-[1.5px] text-[#929197] text-base border-[rgba(208,168,93,1)] bg-transparent h-12 active:border-0"
        />
        <a href="mailto:info@marqi-associates.com">
          <button className=" view  border-[1.5px] border-[rgba(208,168,93,1)] w-12 h-12 md:w-11 md:h-11 group relative cursor-pointer  overflow-hidden rounded-full flex justify-center items-center">
            <span className="inline-block p-1 transition duration-500  ease-out group-hover:-translate-x-[120%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                width={30}
                height={30}
                viewBox="0 0 31 32"
                id="right-arrow"
              >
                <path
                  fill="rgba(208,168,93,1)"
                  d="M23.5 17h-16a1 1 0 0 1 0-2h13.59l-1.3-1.29a1 1 0 0 1 1.42-1.42l3 3a1 1 0 0 1 .21 1.09 1 1 0 0 1-.92.62Z"
                ></path>
                <path
                  fill="rgba(208,168,93,1)"
                  d="M20.5 20a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l3-3a1 1 0 0 1 1.42 1.42l-3 3a1 1 0 0 1-.71.29Z"
                ></path>
              </svg>
            </span>
            <span className="absolute  inline-block translate-x-[120%] text-white p-1 transition duration-500 ease-out group-hover:translate-x-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 31 32"
                width={30}
                height={30}
                id="right-arrow"
              >
                <path
                  fill="rgba(208,168,93,1)"
                  d="M23.5 17h-16a1 1 0 0 1 0-2h13.59l-1.3-1.29a1 1 0 0 1 1.42-1.42l3 3a1 1 0 0 1 .21 1.09 1 1 0 0 1-.92.62Z"
                ></path>
                <path
                  fill="rgba(208,168,93,1)"
                  d="M20.5 20a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l3-3a1 1 0 0 1 1.42 1.42l-3 3a1 1 0 0 1-.71.29Z"
                ></path>
              </svg>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
