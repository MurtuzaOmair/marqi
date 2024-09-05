const Video = () => {
  return (
    <div className="w-full h-[80vh] md:h-screen flex items-center justify-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        preload="metadata"
      >
        <source src="/final-media/main/video/heroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
