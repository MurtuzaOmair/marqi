import Associations from "@/components/Associations";
import Nav from "@/components/Nav";
import React from "react";

const associations = () => {
  return (
    <div
      className={`associations-page w-screen h-screen bg-[#51375B] overflow-hidden`}
    >
      <Nav />
      <Associations />
    </div>
  );
};

export default associations;
