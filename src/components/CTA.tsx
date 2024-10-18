import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CTA = () => {
  return (
    <section className="bg-[#4782ed] px-4 relative w-full h-auto py-24 md:py-36 flex flex-col items-center justify-center">
      <h3 className="text-3xl text-center font-semibold md:text-5xl lg:text-6xl w-[16ch] text-white">
        Ready to Elevate Your Online Presence?
      </h3>
      <p className="text-white text-center px-4 text-xl mt-6">
        Let&apos;s create something great together—start today!
      </p>
      <div className="mt-4">
        <a
          href="https://www.honeybook.com/widget/lauf_283541/cf_id/6703e04b7b400700392b6ee8"
          target="_blank"
        >
          <button className="bg-neutral-50 hover:bg-white text-[#4782ed] mt-4 duration-300 flex items-center gap-4 font-semibold rounded-full py-4 px-8 ">
            Let&apos;s work together
            <IoIosArrowForward />
          </button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
