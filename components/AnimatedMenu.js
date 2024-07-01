// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const AnimatedMenu = () => {
//   const tl = useRef(null);
//   const navRef = useRef(null);
//   const openRef = useRef(null);
//   const closeRef = useRef(null);
//   const mainRef = useRef(null);

//   useEffect(() => {
//     tl.current = gsap.timeline({
//       defaults: { duration: 1.15, ease: "expo.inOut" },
//     });
//     const handleOpen = () => {
//       if (tl.current.reversed()) {
//         tl.current.play();
//       } else {
//         tl.current
//           .to(navRef.current, { opacity: 1 })
//           .to(openRef.current, { zIndex: 50 })
//           .to(mainRef.current, { height: "100vh", width: "100vh" })
//           .to(navRef.current, { height: "100vh" }, "-=.1")
//           .to(
//             "nav ul li a",
//             { opacity: 1, pointerEvents: "all", stagger: 0.2 },
//             "-=.5"
//           )
//           .to(closeRef.current, { opacity: 1, pointerEvents: "all" }, "-=.5")
//           .to("h2", { opacity: 1, pointerEvents: "all" }, "-=.5");
//       }
//     };

//     const handleClose = () => {
//       tl.current.reverse();
//     };

//     openRef.current.addEventListener("click", handleOpen);
//     closeRef.current.addEventListener("click", handleClose);

//     return () => {
//       openRef.current.removeEventListener("click", handleOpen);
//       closeRef.current.addEventListener("click", handleClose);
//     };
//   }, []);

//   return (
//     <div ref={mainRef} className="nav-body ">
//       <div ref={openRef} className="nav-open-trigger">
//         ☰
//       </div>
//       <nav ref={navRef}>
//         <h2>MARQI</h2>
//         <div ref={closeRef} className="close">
//           ✖
//         </div>
//         <ul>
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Projects</a>
//           </li>
//           <li>
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default AnimatedMenu;
