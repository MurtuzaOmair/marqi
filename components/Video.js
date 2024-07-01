import Video from "next-video";
import heroVideo from "@/videos/11.webm";

const Vid = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/final-images/marqi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* 
      <video
        autoPlay
        loop
        style={{ width: "100vw", height: "500px", objectFit: "cover" }}
      >
        <source src="/final-images/11.webm" type="video/webm" />
      </video> 
      */}

      {/* <Video src={heroVideo} /> */}
    </div>
  );
};

export default Vid;
