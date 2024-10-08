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
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

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
