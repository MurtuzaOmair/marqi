import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { gsap } from "gsap";
import { Power3 } from "gsap";

export const MenuButton = () => {
  const logo = useRef(null);
  const dropdown = useRef(null);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      logo.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        delay: 0.1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      dropdown.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        delay: 0.3,
        ease: "power2.out",
      }
    );
  }, []);

  const menuitems = [
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
      subMenu: [
        {
          title: "Coral Gables",
          href: "/projects/coral",
        },
        {
          title: "Coming Soon",
          href: "/projects/comingsoon",
        },
      ],
    },
    {
      title: "categories",
      href: "/categories",
    },
    {
      title: "contact",
      href: "/contact",
    },
  ];

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  return (
    <div ref={logo} className="lg:flex hidden gap-8 relative">
      {menuitems.map((data, index) => {
        if (data.subMenu) {
          return (
            <div
              key={index}
              className="relative group  lineheight "
              onMouseEnter={toggleProjectsDropdown}
              onMouseLeave={toggleProjectsDropdown}
            >
              <span className={`nav-link  text-[#fcf3ff] cursor-pointer`}>
                {data.title}
              </span>
              {isProjectsDropdownOpen && (
                <div
                  ref={dropdown}
                  className="absolute w-[13vw] top-full left-0 hidden group-hover:flex flex-col  bg-transparent border border-[#fcf3ff] p-2 space-y-2 overflow-hidden"
                >
                  {data.subMenu.map((subMenuItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subMenuItem.href}
                      className="text-[#fcf3ff] nav-link leading-snug hover:text-[#fcf3ff87] transition-colors duration-300"
                    >
                      {subMenuItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        } else {
          return (
            <Link
              key={index}
              className={`nav-link nav-link-ltr text-[#fcf3ff]`}
              href={data.href}
            >
              {data.title}
            </Link>
          );
        }
      })}
    </div>
  );
};
