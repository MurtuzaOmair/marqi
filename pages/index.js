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
  const [loadedComponents, setLoadedComponents] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const components = [
    Navbar,
    Video,
    Service,
    Hero,
    AboutUs,
    Gallery,
    OurProjects,
    GetInTouch,
    Footer,
  ];

  useEffect(() => {
    const loadComponent = async (index) => {
      if (index < components.length) {
        // Simulate component loading
        await new Promise((resolve) => setTimeout(resolve, 300));
        setLoadedComponents((prevLoaded) => prevLoaded + 1);
        loadComponent(index + 1);
      } else {
        setIsLoading(false);
      }
    };

    loadComponent(0);
  }, []);

  const loadingProgress = Math.round(
    (loadedComponents / components.length) * 100
  );

  if (isLoading) return <Loading loadingProgress={loadingProgress} />;

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
