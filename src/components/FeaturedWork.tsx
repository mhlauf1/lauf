import React from "react";

const FeaturedWork = () => {
  return (
    <div className="bg-[#F1EDEA] gap-4 py-24 my-16 flex-col md:flex-row flex-wrap items-center justify-center mx-4 md:mx-20 flex lg:mx-36">
      <div className="flex flex-col w-full justify-center items-center md:flex-row gap-4">
        <div className="bg-neutral-100 rounded-lg shadow-md w-5/6 md:w-[625px] h-[400px]"></div>
        <div className="bg-neutral-100 rounded-lg shadow-md w-5/6 md:w-[625px] h-[400px]"></div>
      </div>
      <div className="flex flex-col w-full justify-center items-center  md:flex-row gap-4">
        <div className="bg-neutral-100 items-center rounded-lg shadow-md w-5/6 md:w-[625px] h-[400px]"></div>
        <div className="bg-neutral-100 rounded-lg shadow-md w-5/6 md:w-[625px] h-[400px]"></div>
      </div>
    </div>
  );
};

export default FeaturedWork;
