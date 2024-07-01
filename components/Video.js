const Vid = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video
        width={2000}
        height={2000}
        className="w-full h-full object-cover"
        // autoPlay
        // muted
        // loop
      >
        <source src="/final-images/marqi2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Vid;
