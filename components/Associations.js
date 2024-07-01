import React, { useEffect, useRef, useCallback } from "react";
import localFont from "next/font/local";
import gsap from "gsap";

const calming = localFont({
  src: "../styles/calming/Calming-Regular.woff2",
  variable: "--font-calming",
});

// Array of slide data
const slides = [
  { title: "Amazon", imgSrc: "1.jpg" },
  { title: "Microsoft", imgSrc: "2.jpg" },
  { title: "Google", imgSrc: "3.jpg" },
  { title: "Phoenix", imgSrc: "4.jpg" },
  { title: "MEIL", imgSrc: "5.jpg" },
  { title: "Hotel Avasa", imgSrc: "6.jpg" },
  { title: "Lemon Tree", imgSrc: "7.jpg" },
  { title: "Amazon", imgSrc: "1.jpg" },
  { title: "Microsoft", imgSrc: "2.jpg" },
];

const Associations = () => {
  const currentIndex = useRef(1);
  const totalSlides = 7;

  const updateActiveSlide = useCallback(() => {
    document.querySelectorAll(".title").forEach((el, index) => {
      if (index === currentIndex.current) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }, []);

  const trimExcessImages = useCallback(() => {
    const selectors = [".img-top", ".img-bottom"];
    selectors.forEach((selector) => {
      const container = document.querySelector(selector);
      const images = Array.from(container.querySelectorAll("img"));
      const excessCount = images.length - 5;
      if (excessCount > 0) {
        images
          .slice(0, excessCount)
          .forEach((image) => container.removeChild(image));
      }
    });
  }, []);

  const updateImages = useCallback(
    (imgNumber) => {
      const imgSrc = `/final-images/associations/${imgNumber}.jpg`;
      const imgTop = document.createElement("img");
      const imgBottom = document.createElement("img");

      imgTop.src = imgSrc;
      imgBottom.src = imgSrc;

      imgTop.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
      imgBottom.style.clipPath =
        "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
      imgTop.style.transform = "scale(2)";
      imgBottom.style.transform = "scale(2)";

      document.querySelector(".img-top").appendChild(imgTop);
      document.querySelector(".img-bottom").appendChild(imgBottom);

      gsap.to([imgTop, imgBottom], {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        transform: "scale(1)",
        duration: 2,
        ease: "power4.out",
        stagger: 0.15,
        onComplete: trimExcessImages,
      });
    },
    [trimExcessImages]
  );

  const handleSlider = useCallback(() => {
    if (currentIndex.current < totalSlides) {
      currentIndex.current++;
    } else {
      currentIndex.current = 1;
    }

    gsap.to(".slide-titles", {
      onStart: () => {
        setTimeout(() => {
          updateActiveSlide();
        }, 100);
        updateImages(currentIndex.current + 1);
      },
      x: `-${(currentIndex.current - 1) * 11.1111}%`,
      duration: 2,
      ease: "power4.out",
    });
  }, [totalSlides, updateActiveSlide, updateImages]);

  useEffect(() => {
    const handleClick = () => {
      handleSlider();
    };

    updateImages(2);
    updateActiveSlide();

    const sliderElement = document.querySelector(".slider");
    sliderElement.addEventListener("click", handleClick);

    return () => {
      sliderElement.removeEventListener("click", handleClick);
    };
  }, [handleSlider, updateActiveSlide, updateImages]);

  return (
    <div className={`slider ${calming.className} w-screen h-screen relative `}>
      <div className="slide-titles absolute top-0 left-0 w-[300vw] h-screen flex pointer-events-none z-[2] ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="title flex-1 w-full h-full flex items-center justify-center"
          >
            <h1 className="text-center text-[min(7.825vw,25px)] md:text-[min(2.075vw,30px)] font-normal text-white/20 opacity-0 md:opacity-100 transition-color-opacity duration-25 ease">
              {slide.title}
            </h1>
          </div>
        ))}
      </div>
      <div className="slide-images w-full md:w-[min(34.725vw,600px)] h-full md:h-[min(27.775vw,350px)] absolute top-1/2 left-1/2 opacity-75 z-[1]">
        <div className="img-top w-full h-full absolute"></div>
        <div className="img-bottom w-full h-full absolute"></div>
      </div>
    </div>
  );
};

export default Associations;
