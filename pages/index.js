import Footer from "components/Footer";
import Gallery from "components/Gallery";
import GetInTouch from "components/GetInTouch";
import Hero from "components/Hero";
import Navbar from "components/Navbar";
import OurProjects from "components/OurProjects";
import Service from "components/Service";
import Video from "components/Video";
import AboutUs from "components/AboutUs";
import React, { useEffect, useState } from "react";
import Loading from "components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadComplete, setLoadComplete] = useState(false); // To indicate when page has fully loaded

  useEffect(() => {
    const handlePageLoad = () => {
      setLoadComplete(true);
      setTimeout(() => setIsLoading(false), 500); // Add small delay to ensure 100% completion
    };

    if (document.readyState === "complete") {
      // If the page is already loaded
      handlePageLoad();
    } else {
      // If the page is still loading
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  if (isLoading)
    return <Loading setIsLoading={setIsLoading} loadComplete={loadComplete} />;

  return (
    <div className=" overflow-clip ">
      <Navbar />
      <Video />
      <Service />
      <Hero />
      <AboutUs />
      <Gallery />
      <OurProjects />
      <GetInTouch />
      <Footer />
    </div>
  );
}
