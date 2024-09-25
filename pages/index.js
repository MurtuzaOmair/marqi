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
    // Simulate loading time, or you can check if data/components are fully loaded.
    const timer = setTimeout(() => setIsLoading(false), 5000); // 3 seconds

    return () => clearTimeout(timer);
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
