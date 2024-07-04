import Navbar from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import OurProjects from "@/components/OurProjects";
import Gallery from "@/components/Gallery";
import Video from "@/components/Video";
import useScrollbar from "@/hooks/scrollbar";

export default function Home() {
  useScrollbar();

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
