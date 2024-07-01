import React from "react";

const TheDesign = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-[100%]">
        <div className="gridlayout grid grid-cols-12 gap-4">
          <div className=" row-span-4  col-span-6 lg:row-span-2">
            <img
              style={{ filter: "grayscale(70%" }}
              src="/webp/coral/111.webp"
              alt="Image"
              className="w-full h-[15rem] lg:h-[25rem]"
            />
          </div>
          <div className=" row-span-4  col-span-6 lg:row-span-2">
            <img
              style={{ filter: "grayscale(100%" }}
              src="/jpg/33.jpg"
              alt="Image"
              className="w-full h-[15rem] lg:h-[25rem]"
            />
          </div>
          <div className=" col-span-12 lg:col-span-12 row-span-3">
            <img
              src="/carol.jpg"
              alt="Image"
              className="w-full h-[15rem] lg:h-[50rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheDesign;
