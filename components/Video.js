import Video from "next-video";
import heroVideo from "@/videos/11.webm";

const Vid = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* <video
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
      </video> */}
      <video
        controls
        width="640"
        height="360"
        // autoPlay
        // loop
        className="rounded-lg shadow-lg"
      >
        <source src="/final-images/13.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <Video src={heroVideo} /> */}
    </div>
  );
};

export default Vid;
