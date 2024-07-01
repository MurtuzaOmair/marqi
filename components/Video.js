import Video from "next-video";
import heroVideo from "@/videos/11.webm";

const Vid = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video
        className="w-full h-full object-cover brightness-[0.9] z-[1000000000000000] "
        autoPlay
        muted
        loop
      >
        <source src="/final-images/11.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* <Video src={heroVideo} /> */}
    </div>
  );
};

export default Vid;
