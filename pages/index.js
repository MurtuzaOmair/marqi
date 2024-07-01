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

// IMAGES LOCATION
// "/HeroVideos(webm)/11.webm"
// "services/property.jpg"
// "services/construction.jpg"
// "services/design.png"
// "services/exports.jpg"
//  "/jpg/92.webp"
//  "/jpg/3.jpg"
//  "/jpg/12.jpg"
//  "/jpg/Slideshow5.jpg"
//  "/jpg/14.jpg"
//  "/jpg/22.jpg"
//  "/jpg/Slideshow4.jpg"
//  "/jpg/90.webp"
//  "/jpg/about2.jpg"
//  "/public/jpg/60.jpg"
//  "/public/jpg/37.jpg"
//  "/public/jpg/32.jpg"
//  "/public/jpg/38.jpg"
//  "/public/jpg/21.jpg"
//  "/public/jpg/46.jpg"
//  "/webp/coral/2.webp"
