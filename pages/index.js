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

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    // Listen for the page load event
    window.addEventListener("load", handlePageLoad);

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  if (isLoading) return <Loading setIsLoading={setIsLoading} />;

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
