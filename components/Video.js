import Video from "next-video";
import heroVideo from "@/videos/11.webm";

const Vid = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video
        width={2000}
        height={2000}
        style={{ width: "100vw", height: "500px", objectFit: "cover" }}
        autoPlay
        muted
        loop
      >
        <source src="/final-images/11.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        style={{ width: "100vw", height: "500px", objectFit: "cover" }}
      >
        <source src="/final-images/11.webm" type="video/webm" />
      </video>
      {/* <Video src={heroVideo} /> */}
    </div>
  );
};

export default Vid;
