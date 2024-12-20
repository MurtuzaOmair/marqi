"use client";

export default function Video() {
  return (
    <div className="w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      <video
        src={"/final-media/main/video/heroVideo.mp4"}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100vw", // Full width of the viewport
          height: "100vh", // Full height of the viewport
          objectFit: "cover", // Covers the entire screen
        }}
      ></video>
    </div>
  );
}
