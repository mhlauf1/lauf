import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CTA = () => {
  return (
    <section className="bg-black px-4 relative w-full h-auto py-24  flex flex-col items-center justify-center">
      <h3 className="text-3xl text-center tracking-tighter md:text-6xl w-[18ch] text-white">
        Ready to Elevate Your Online Presence?
      </h3>
      <p className="text-white text-center px-4 text-lg mt-6">
        Let&apos;s create something great together.
      </p>
      <div className="mt-2">
        <a
          href="https://www.honeybook.com/widget/lauf_283541/cf_id/6703e04b7b400700392b6ee8"
          target="_blank"
        >
          <button className="bg-neutral-50 hover:bg-white text-neutral-800 mt-4 duration-300 flex items-center gap-4 tracking-tight rounded-lg py-4 px-8 ">
            Let&apos;s work together
            <IoIosArrowForward />
          </button>
        </a>
      </div>
      <div className="absolute bottom-[-300px] left-0 right-0"></div>
    </section>
  );
};

export default CTA;
