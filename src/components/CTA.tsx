import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="bg-[#4782ed] relative w-full h-auto py-24 md:py-36 flex flex-col items-center justify-center">
      <h3 className="text-3xl text-center font-semibold md:text-5xl lg:text-6xl w-[16ch] text-white">
        Ready to Elevate Your Online Presence?
      </h3>
      <p className="text-white text-xl mt-6">
        Let&apos;s create something great together—start today!
      </p>
      <button className=" bg-neutral-50  mt-8 hover:bg-white duration-300 flex items-center gap-4 font-semibold rounded-full py-4 px-8 text-[#4782ed]">
        Let&apos;s work together
        <IoIosArrowForward />
      </button>
      <div className="h-auto absolute bottom-12 right-12 opacity-50 w-[56px]">
        <Image
          src="/white-text.png"
          alt="Brady Digital Consulting Logo"
          layout="responsive"
          width={56}
          height={40}
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default CTA;
