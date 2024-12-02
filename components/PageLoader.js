"use client";

import React, { useState, useEffect } from "react";
import Loading from "./Loading";

export default function PageLoader({ children }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateProgress = () => {
      const totalResources = performance.getEntriesByType("resource").length;
      const loadedResources = performance
        .getEntriesByType("resource")
        .filter((r) => r.responseEnd > 0).length;
      const newProgress = (loadedResources / totalResources) * 100;
      setProgress(newProgress);
    };

    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const interval = setInterval(updateProgress, 100); // Update progress every 100ms
      return () => {
        window.removeEventListener("load", handleLoad);
        clearInterval(interval);
      };
    }
  }, []);

  if (isLoading) return <Loading progress={progress} />;

  return <>{children}</>;
}
