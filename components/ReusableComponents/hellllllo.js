import {
  useLayoutEffect,
  useRef,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { gsap } from "gsap";
import Image from "next/image";
import SplitType from "split-type";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// components/FoundersSection.js
import founder1Image from "../public/jpg/aman.jpg"; // Replace with actual image paths
import founder2Image from "../public/jpg/mrinal.jpg"; // Replace with actual image paths

const founders = [
  {
    name: "Aman Muqeet",
    image: founder1Image,
    description:
      "After graduating with a BA Hons degree in Interior Architecture Design in 2010, Cassie went on to become an interior designer at a high end interior design practice. Growing her way through the company to become a senior designer and with this had the opportunity to produce designs which won both national and international design awards. Cassie's experience is all encompassing, combining a wealth of knowledge and passion for design within the high end residential and commercial interior design sector.",
  },
  {
    name: "Mrinal Didige",
    image: founder2Image,
    description:
      "Description for the second founder goes here. It should be detailed and describe the second founder's background, achievements, and experience in the industry.",
  },
];

const FoundersSection = () => {
  const sectionRef = useRef(null);
  const [currentFounder, setCurrentFounder] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const navbarHeight = 36; // Adjust this value to match your navbar height

    ScrollTrigger.create({
      trigger: section,
      start: `top top+=${navbarHeight}`,
      end: "bottom+=200% bottom",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress.toFixed(2);
        if (progress >= 0.5) {
          setCurrentFounder(1);
        } else {
          setCurrentFounder(0);
        }
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  useEffect(() => {
    const imageWrapper = sectionRef.current.querySelector(".image-wrapper");
    const revealMask = imageWrapper.querySelector(".reveal-mask"); // Not used in this update
    const currentImage = imageWrapper.querySelector(
      ".founder-image:nth-child(1)"
    );
    const nextImage = imageWrapper.querySelector(".founder-image:nth-child(2)");
    const name = sectionRef.current.querySelector(".founder-name");
    const description = sectionRef.current.querySelector(
      ".founder-description"
    );

    // Adjust z-index for image elements

    currentImage.style.zIndex = 2;
    nextImage.style.zIndex = 1;

    // Animation on founder change
    if (currentFounder === 0) {
      gsap.fromTo(
        currentImage,
        { x: "-100%" },
        { x: "0%", duration: 1, ease: "power2.inOut" }
      );
    } else if (currentFounder > 0) {
      gsap.to(currentImage, { x: "100%", duration: 1, ease: "power2.inOut" });
    }
    gsap.fromTo(
      nextImage,
      { x: "-100%" },
      { x: "0%", duration: 1, ease: "power2.inOut" }
    );

    gsap.fromTo(name, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });

    const splitDesc = new SplitType(description, { types: "lines" });
    gsap.fromTo(
      splitDesc.lines,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1 }
    );

    return () => {
      splitDesc.revert();
    };
  }, [currentFounder]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center bg-black"
    >
      <div className="flex w-3/4 items-center justify-between space-x-8">
        <div className="w-1/3 flex-shrink-0 relative image-wrapper overflow-hidden">
          <div className="reveal-mask absolute top-0 left-0 w-full h-full bg-black z-10"></div>
          <Image
            src={founders[currentFounder].image}
            alt={founders[currentFounder].name}
            className="founder-image h-[65vh] object-cover"
          />
        </div>
        <div className="w-2/3 text-white">
          <h2 className="founder-name text-4xl">
            {founders[currentFounder].name}
          </h2>
          <p className="founder-description mt-4 text-lg">
            {founders[currentFounder].description}
          </p>
        </div>
      </div>
    </section>
  );
};

// {
//   "compilerOptions": {
//     "paths": {
//       "@/*": ["./*"]
//     }
//   }
// }
