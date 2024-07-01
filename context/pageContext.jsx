"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function SmoothScrolling({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    const backToTop = document.querySelector(".svg");
    if (backToTop) {
      backToTop.addEventListener("click", () => {
        // Your scroll to top logic here
        backToTop.addEventListener("click", () => {
          lenisRef.current?.lenis?.scrollTo("top", {
            duration: 4.5,
            easing: (t) =>
              t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
          });
        });
      });
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis
      root
      options={{ lerp: 0.05, duration: 1.75, smoothTouch: true }}
      ref={lenisRef}
      autoRaf={false}
    >
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-50 fixed top-0 left-3/4 w-1/4"
      />
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
