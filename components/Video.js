import Video from "next-video";
import getStarted from "/videos/get-started.mp4";

const Videos = () => {
  return (
    // <div className="w-full h-screen flex items-center justify-center">
    //   <video
    //     className="w-full h-full object-cover brightness-[0.9]"
    //     autoPlay
    //     muted
    //     loop
    //     preload="auto"
    //   >
    //     <source src="/final-images/12.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    // </div>
    <Video src={getStarted} />
  );
};

export default Videos;
