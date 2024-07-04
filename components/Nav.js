import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import logo from "/public/final-media/main/nav/marqi2.png";
import { useRouter } from "next/router";

// Local font imports
const metropolis = localFont({
  src: "../styles/metropolis/METROPOLIS.woff2",
  variable: "--font-metropolis",
});

const sourcesans = localFont({
  src: "../styles/sourcesans/sourcesans.woff2",
  variable: "--font-sourcesans",
});

// Navigation links
const links = [
  {
    title: "main",
    href: "/",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "projects",
    subLink: true,
    subTitle: [
      {
        title: "coral gables",
        href: "/projects/coral-gables",
      },
      {
        title: "associations",
        href: "/projects/associations",
      },
    ],
  },
  {
    title: "repertoires",
    href: "/repertoires",
  },
  {
    title: "contact",
    href: "/contact",
  },
];

const Nav = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const submenuRef = useRef(null);
  const mobileNav = useRef(null);
  const associate = useRef(null);
  const desktopNav = useRef(null);
  const svg = useRef(null);

  // Handle click outside submenu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setOpen(true); // Corrected to close the submenu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle submenu
  const handleClick = (event, link) => {
    if (link.subLink) {
      event.preventDefault();
      setOpen((prevOpen) => !prevOpen);
    }
  };

  const handleSubLinkClick = () => {
    setOpen(false); // Close submenu after clicking sublink
  };

  // Animate nav elements
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (nav) {
        gsap.to(mobileNav.current, {
          y: 0,
          opacity: 1,
          duration: 0.45,
        });
      } else {
        gsap.to(mobileNav.current, {
          y: "-100vh",
          duration: 0.45,
        });
      }

      gsap.set(".nav-bg", { backgroundColor: "#FCF3FF", opacity: 0 });
      gsap.set(svg.current, { yPercent: -101 });
      gsap.set(".hamburger-color-onAnimation", {
        color: `${
          nav
            ? "#51375b"
            : router.asPath === "/" ||
              router.asPath === "/contact" ||
              router.asPath === "/projects/associations"
            ? "#fcf3ff"
            : "#51375b"
        }`,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top+=200",
          end: "+=1",
          toggleActions: "play none none reverse",
          scrub: 2,
        },
      });

      tl.to(".nav-bg", { opacity: 1 })
        .to(".desktop-nav-text", { color: "#51375b" })
        .to(associate.current, { color: "#51375b" }, "<")
        .to(svg.current, { yPercent: 0, rotate: 0 }, "<")
        .to(desktopNav.current, { x: -35 }, "<")
        .to(".hamburger-color-onAnimation", { color: "#51375b" });
    };

    loadGSAP();
  }, [nav, router.asPath]);

  return (
    <nav className="w-full fixed top-0 left-0 z-[3]">
      <div className="relative w-full flex items-center justify-between font-medium bg-transparent">
        {/* Marqi Logo */}
        <div className="pl-[1%] py-[2%] transition-all duration-500 z-[4] md:py-[0.5%] flex justify-center items-center gap-[0.8vw]">
          <Link rel="preload" href="/" className="cursor-pointer">
            <Image
              src={logo}
              alt="Marqi Logo"
              priority
              width={278} // Add appropriate width and height based on your image
              height={256} // Add appropriate width and height based on your image
              className="h-[7.25vw] sm2:h-[5vw] md:h-[3.35vw] w-full"
            />
          </Link>
          <div className="duration-500 ease-out hidden md:flex flex-col item-center justify-center">
            <span
              className={`${metropolis.className} metropolis leading-none text-[5vw] md:text-[2.45vw] tracking-[min(0.5vw,0.6rem)] text-[transparent] bg-clip-text bg-gradient-to-r from-[rgba(170,115,52,1)] via-[rgba(208,168,93,1)] to-[rgba(182,128,55,1)]`}
            >
              MARQI
            </span>
            <span
              ref={associate}
              className={`${sourcesans.className} sourcesans ${
                router.asPath === "/" ||
                router.asPath === "/contact" ||
                router.asPath === "/projects/associations"
                  ? "text-[#fcf3ff]"
                  : "text-[#51375b]"
              } font-semibold text-[1.75vw] md:text-[0.85vw] opacity-70 tracking-[1.05vw] md:tracking-[0.6vw] self-center mix-blend-difference`}
            >
              ASSOCIATES
            </span>
          </div>
        </div>
        {/* Hamburger Menu */}
        <div
          className="pr-[0.75%] z-[4] text-[#51375b] md:hidden text-[8vw] flex justify-center items-center hover:cursor-pointer transition-all duration-500 ease-out hamburger-color-onAnimation"
          onClick={() => setNav((prevNav) => !prevNav)}
        >
          <ion-icon name={`${nav ? "close-sharp" : "menu-sharp"}`}></ion-icon>
        </div>
        {/* Desktop Navbar */}
        <div className="pr-[1%] relative md:flex hidden items-center">
          <ul ref={desktopNav} className="flex uppercase items-center gap-3">
            {links.map((link, index) => (
              <div key={index} className="w-fit">
                <div className="w-full text-left cursor-pointer leading-none">
                  <li>
                    <Link
                      className={`text-[min(0.9375vw,1.125rem)] inline-block ${
                        router.asPath === "/" ||
                        router.asPath === "/contact" ||
                        router.asPath === "/projects/associations"
                          ? "text-[#fcf3ffb8] hover:text-[#fcf3ff]"
                          : "text-[#51375b] hover:text-[#51375bae]"
                      } desktop-nav-text font-semibold transition-all duration-500 ease-out`}
                      onClick={(e) => handleClick(e, link)}
                      href={link.href || "/"} // Ensure href is always defined
                    >
                      {link.title}
                    </Link>
                  </li>
                  {link.subLink && open && (
                    <div ref={submenuRef}>
                      <div
                        className={`${
                          router.asPath === "/" ||
                          router.asPath === "/contact" ||
                          router.asPath === "/projects/associations"
                            ? "bg-[#fcf3ff]"
                            : "bg-[#d3c2dae7]"
                        } p-3 absolute block mt-2 transition-all duration-500 ease-out`}
                      >
                        <div>
                          {link.subTitle.map((mysublinks, subIndex) => (
                            <div key={subIndex}>
                              <Link
                                href={mysublinks.href || "/"} // Ensure href is always defined
                                className="text-sm font-semibold text-[#51375b80] leading-normal hover:text-[#51375b] transition-all duration-500 z-[4] ease-out"
                              >
                                {mysublinks.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </ul>
          <div className="text-[#51375b] text-[1.65vw] absolute right-6 lg:right-5 flex items-center justify-center overflow-hidden cursor-pointer">
            <div
              ref={svg}
              className="svg flex items-center rotate-180 justify-center"
            >
              <ion-icon name="caret-up-circle-sharp"></ion-icon>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <ul
          ref={mobileNav}
          className={`px-[1%] pt-[20vh] md:hidden z-[-1] absolute w-full h-screen top-0 bg-[#fcf3ff] uppercase duration-300 transition-all -translate-y-full ${
            nav ? "block" : "hidden"
          }`}
        >
          {links.map((link, index) => (
            <div key={index} className="w-full">
              <div className="w-full text-left cursor-pointer leading-none">
                <li className="w-full border-b border-[#51375b52] py-[3vw]">
                  <Link
                    href={link.href || "/"} // Ensure href is always defined
                    className="text-[min(8vw,1.25rem)] w-full leading-loose flex items-center text-[#51375b] font-semibold transition-all duration-300 ease-out"
                    onClick={(e) => handleClick(e, link)}
                  >
                    {link.title}
                  </Link>
                </li>
                {link.subLink && open && (
                  <div ref={submenuRef}>
                    <div className="bg-[#fcf3ff] w-full p-2 pl-4 mt-2 transition-all duration-500 ease-out">
                      {link.subTitle.map((mysublinks, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-[min(5vw,1.05rem)] w-full leading-loose text-[#51375b80] hover:text-[#51375b] font-semibold transition-all duration-300 ease-out"
                        >
                          <Link
                            href={mysublinks.href || "/"} // Ensure href is always defined
                            onClick={handleSubLinkClick}
                          >
                            {mysublinks.title}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div className="absolute z-[-1] w-full h-full top-0 left-0 nav-bg"></div>
    </nav>
  );
};

export default Nav;
