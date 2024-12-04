"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";
import { heroImages } from "@/utils/data";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <motion.section
      className="min-h-auto  justify-around relative w-full flex flex-col items-center pt-12 md:pt-16 bg-gradient-to-b from-white via-neutral-50 to-white"
      {...animationProps}
    >
      <div className="flex flex-col gap-4 md:gap-6 px-4 md:px-8 w-full items-center mb-16 md:mb-6">
        <div className="flex items-center mb-8 bg-neutral-100 bg-opacity-80 backdrop-blur-sm text-sm rounded-full py-1.5 px-4 gap-2">
          <div className="bg-[#4782ed] rounded-full h-1.5 w-1.5"></div>
          <span className="text-neutral-600 text-md md:text-lg">
            Available for January Projects
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-center capitalize">
          Full-Scale Website <br /> Design & Development
        </h1>

        <p className="w-full hidden md:block max-w-[64ch] mt-3 px-4 leading-6 text-md md:text-xl text-neutral-600 text-center">
          <span className="font-semibold">
            Husband-wife team building custom websites <br />
          </span>{" "}
          designed to elevate your brand and grow your business.
        </p>
        <p className="w-full block md:hidden max-w-[64ch] mt-3 px-4 leading-6 text-md md:text-xl text-neutral-600 text-center">
          Husband-wife team building custom websites designed to elevate your
          brand and grow your business.
        </p>
        <a
          href="https://www.honeybook.com/widget/lauf_283541/cf_id/6703e04b7b400700392b6ee8"
          target="_blank"
        >
          <button className="bg-[#4782ed] hover:bg-[#5a91f5] text-white mt-4 duration-300 flex items-center gap-4 font-semibold rounded-full py-4 px-8">
            Let&apos;s work together
            <IoIosArrowForward />
          </button>
        </a>
      </div>
      <div className="w-full mt-12 md:mt-36">
        <HeroCarousel images={heroImages} />
      </div>
    </motion.section>
  );
};

export default Hero;
