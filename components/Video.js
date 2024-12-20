"use client";

export default function Video() {
  return (
    <video
      src={"/final-media/main/video/fhd.mp4"}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden object-cover"
    ></video>
  );
}
