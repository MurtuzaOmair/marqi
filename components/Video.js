"use client";

import { Suspense } from "react";

export default function Video() {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <VideoComponent />
    </Suspense>
  );
}

function VideoComponent() {
  const videoUrl = "/final-media/main/video/heroVideo.mp4";

  return (
    <div className="w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        rel="preload"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
