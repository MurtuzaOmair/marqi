const Vid = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/final-images/marqi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Vid;
