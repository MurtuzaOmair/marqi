"use client";

import React, { useState, useEffect } from "react";
import Loading from "./Loading";

export default function PageLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (isLoading) return <Loading />;

  return <>{children}</>;
}
