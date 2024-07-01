import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import NaturalStone from "/public/categories/stone.jpg";
import DecorativePanel from "/public/categories/decorativePanel.jpg";
import Furniture from "/public/categories/furniture.jpg";
import ModularKitchen from "/public/categories/modularKitchens.jpg";
import Wardrobe from "/public/jpg/50.jpg";
import Sanitaryware from "/public/categories/Sanitaryware.png";
import Fitting from "/public/jpg/9.webp";
import Tile from "/public/categories/Tiles.jpg";
import Mosaic from "/public/categories/Mosaic.jpg";
import WoodenFlooring from "/public/categories/woodenflooring.jpg";
import Wallpaper from "/public/categories/Wallpapers.jpg";
import useParallax from "@/hooks/Parallax";
import useLineByLine from "@/hooks/LineByLine";

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    title: "Natural Stone",
    desc: "We source the finest natural stones, curated to bring your design vision to life. Our commitment goes beyond exceptional materials. We guide you through stone selection, ensuring an unparalleled client experience. Let us unlock the unique beauty of stone in your project.",
    img: NaturalStone,
  },
  {
    title: "Decorative Panels",
    desc: "Go beyond ordinary walls with our stunning collection of decorative panels. We offer a diverse range of materials, textures, and finishes, allowing you to create a captivating focal point that reflects your unique style.  Our design team is here to collaborate with you, ensuring your vision becomes a reality.",
    img: DecorativePanel,
  },
  {
    title: "Furniture",
    desc: "Imagine a home that embodies your personality and reflects your taste. Our curated collection of luxury furniture from designer-trusted brands offers the perfect pieces to bring your vision to life. Explore furniture for every style, from sleek minimalism to opulent elegance.",
    img: Furniture,
  },
  {
    title: "Modulars Kitchens",
    desc: "Declutter your space and elevate your style with our modular wardrobe systems. We offer a variety of options, finishes, and components, allowing you to create a personalized wardrobe solution that maximizes storage and complements your existing décor.",
    img: ModularKitchen,
  },
  {
    title: "Wardrobes",
    desc: "A series of modular systems offered in different variations and finishes and configurable with multiple components and accessories to acheive the perfect wardrobe.",
    img: Wardrobe,
  },
  {
    title: "Sanitaryware",
    desc: "Transform your bathroom into a haven of relaxation and luxury with our premium sanitaryware collection. We offer meticulously crafted designs that combine exceptional quality with beautiful aesthetics. Enhance your daily routine with these world-class products.",
    img: Sanitaryware,
  },
  {
    title: "Fittings",
    desc: "The perfect blend of form and function, our collection of fittings elevates your space to the next level.  We offer innovative designs that incorporate the latest technological advancements, ensuring exceptional performance and a touch of elegance.  Find the perfect complement to your overall design vision.",
    img: Fitting,
  },
  {
    title: "Tiles",
    desc: "Unleash your creativity with our vast selection of high-quality tiles. We offer a variety of styles, materials, and effects like stone, concrete, and marble, allowing you to transform any space, indoors or outdoors. Find the perfect tiles to bring your design vision to life.",
    img: Tile,
  },
  {
    title: "Mosaic",
    desc: "Elevate your walls with the timeless beauty of handcrafted mosaic tiles.  We offer endless chromatic and decorative combinations, allowing you to create a unique and artistic focal point that reflects your personality.",
    img: Mosaic,
  },
  {
    title: "Wooden Flooring",
    desc: "Imagine the luxurious feel of rich, engineered wooden flooring beneath your feet.  Our curated selection boasts exquisite finishes and patterns, transforming any space into a warm and sophisticated haven.",
    img: WoodenFlooring,
  },
  {
    title: "Wallpapers",
    desc: "Wallpapers are more than just decoration; they are a way to express your personality and transform your space.  We offer a diverse collection, from bold patterns to calming textures, ensuring you find the perfect design to speak to you.",
    img: Wallpaper,
  },
];

const SingleSection = React.memo(({ img, title, desc, index }) => {
  useParallax(0.5, 0.3);

  const parentRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const imageParentRef = useRef(null);
  const borderRightRef = useRef(null);
  const descriptionRef = useRef(null);

  useLineByLine(descriptionRef);

  useEffect(() => {
    const parent = parentRef.current;
    const title = titleRef.current;
    const image = imageRef.current;
    const imageParent = imageParentRef.current;
    const borderRight = borderRightRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: parent,
        start: "top 90%",
      },
    });

    // const xValue = index % 2 === 0 ? -15 : 15;
    // const clipPathValue =
    //   index % 2 === 0
    //     ? "polygon(0 0, 0 0, 0 100%, 0% 100%)"
    //     : "polygon(80% 0, 100% 0, 100% 100%, 80% 100%)";

    timeline
      .fromTo(
        imageParent,
        { scale: 0.5 },
        { scale: 1, duration: 1.75, ease: "Expo.easeOut" }
      )
      .fromTo(
        image,
        { scale: 2.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.75, ease: "Expo.easeOut" },
        "<"
      )
      // .fromTo(
      //   image,
      //   {
      //     x: xValue,
      //     opacity: 0,
      //     // clipPath: clipPathValue,
      //   },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     // clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      //     duration: 1.75,
      //     ease: "power2.out",
      //   },
      //   "<"
      // )
      .fromTo(
        borderRight,
        { height: "0" },
        {
          height: "21.25vw",

          duration: 2,
          ease: "Expo.easeOut",
        },
        "<"
      )
      .fromTo(
        title,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.75,
          ease: "power2.out",
        },
        "<"
      );

    return () => {
      timeline.kill();
    };
  }, [index]);

  return (
    <div
      ref={parentRef}
      className={`w-[97%] lg:w-full flex ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex-col justify-center items-center gap-[3vw] lg:gap-0 `}
    >
      {/* ImageContainer */}
      <div
        ref={imageParentRef}
        className=" overflow-hidden flex items-center justify-center h-[40vw] sm2:h-[30vw] lg:h-[21.25vw] w-full lg:w-[60%]"
      >
        <Image
          ref={imageRef}
          className="w-full h-full object-cover "
          src={img}
          alt={title}
        />
      </div>
      {/* BorderContainer */}
      <div className=" flex justify-center items-center h-full mx-[2.5vw]  ">
        <div
          ref={borderRightRef}
          className="w-[1.75px]  hidden lg:block bg-[#51375bce]"
        ></div>
      </div>
      {/* TitleAndDescriptionContainer */}
      <div
        className={`flex flex-col ${
          index % 2 === 0
            ? "lg:items-end lg:pr-[2vw]"
            : "lg:items-start lg:pl-[2vw]"
        } items-center justify-center w-full lg:w-[35%] gap-[1.5vw] `}
      >
        <h2
          ref={titleRef}
          className={` w-full ${
            index % 2 === 0 ? "lg:text-right" : "lg:text-left"
          } text-left  base:text-[4.25vw] sm2:text-[3.75vw] leading-none lg:text-[1.85vw] font-semibold text-[#51375b] `}
        >
          {title}
        </h2>
        <div
          ref={descriptionRef}
          className={`lg:text-[1.05vw] w-full text-[2.75vw] sm2:text-[2.25vw] text-[#51375bd9] font-normal lg:w-[80%] text-justify ${
            index % 2 === 0 ? "lg:text-right" : "lg:text-left"
          }`}
        >
          {desc}
        </div>
      </div>
    </div>
  );
});

SingleSection.displayName = "SingleSection";

const CategoriesSection = () => {
  return (
    <div className="w-full flex-col flex items-center justify-center gap-[5vw] sm2:gap-[3.75vw] lg:gap-[4vw]  my-[5vw] lg:my-[3.5vw] overflow-hidden">
      {content.map((data, index) => (
        <SingleSection key={index} {...data} index={index} />
      ))}
    </div>
  );
};

export default CategoriesSection;

{
  /* <div
  ref={borderRef}
  className="w-full h-[2px] hidden lg:flex bg-[#51375bce]"
></div> */
}

// const SingleSection = React.memo(({ img, title, desc, index }) => {
//   const imageParentRef = useRef(null);
//   const imageRef = useRef(null);
//   const borderRef = useRef(null);
//   const borderRightRef = useRef(null);
//   const descriptionRef = useRef(null);

//   useLineByLineAnimation(descriptionRef);

//   useEffect(() => {
//     const parent = imageParentRef.current;
//     const image = imageRef.current;
//     const border = borderRef.current;
//     const borderRight = borderRightRef.current;

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: parent,
//         start: "top 85%",
//       },
//     });

//     timeline
//       .fromTo(
//         parent,
//         { scale: 0.3 },
//         { scale: 1, duration: 2.25, ease: "Expo.easeOut" }
//       )
//       .fromTo(
//         image,
//         { scale: 3, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 2.25, ease: "Expo.easeOut" },
//         "<"
//       )
//       .fromTo(
//         borderRight,
//         { height: 0 },
//         {
//           height: 300,

//           duration: 1.25,
//           ease: "Expo.easeOut",
//         },
//         "<"
//       )
//       .fromTo(
//         border,
//         { width: 0 },
//         { width: "100%", duration: 2.25, ease: "Expo.easeOut" },
//         "<"
//       );

//     return () => {
//       timeline.kill();
//     };
//   }, []);

//   return (
//     <div className="w-full">
//       <div
//         ref={borderRef}
//         className="w-full h-[2px] hidden lg:flex bg-[#51375bce]"
//       ></div>
//       <div
//         className={`flex ${
//           index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//         } flex-col lg:justify-between `}
//       >
//         {/* <div
//           ref={imageParentRef}
//           className=" overflow-hidden flex items-center justify-center h-[20rem] lg:h-[25vw] lg:w-[45%]"
//         > */}
//         <Image
//           // ref={imageRef}
//           className="h-[20rem] lg:h-[25vw] lg:w-[45%] object-cover"
//           src={img}
//           alt={title}
//         />
//         {/* </div> */}
//         {/* <div
//           ref={borderRightRef}
//           className="border-r-[1.5px]  border-[#51375bce] "
//         ></div> */}
//         <div
//           className={`flex flex-col ${
//             index % 2 === 0 ? "lg:items-end" : "lg:items-start"
//           } items-center justify-center lg:w-[50%] gap-[1.75vw] `}
//         >
//           {/* <Heading title={title} /> */}
//           <h2 className=" base:text-[4.5vw] leading-none lg:text-[2vw] font-semibold text-[#51375b]  ">
//             {title}
//           </h2>
//           <div
//             ref={descriptionRef}
//             className={`lg:text-[1.25vw] text-[2.75vw] text-[#51375bce] font-normal lg:w-[80%] ${
//               index % 2 === 0 ? "lg:text-right" : "lg:text-left"
//             } `}
//           >
//             {desc}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// SingleSection.displayName = "SingleSection";

// const CategoriesSection = () => {
//   return (
//     <div className="w-full flex-col flex items-center justify-center">
//       {content.map((data, index) => (
//         <SingleSection key={index} {...data} index={index} />
//       ))}
//     </div>
//   );
// };

// export default CategoriesSection;
