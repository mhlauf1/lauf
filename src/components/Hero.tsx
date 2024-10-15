"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";
import { heroImages } from "@/utils/data";
import FormModal from "./FormModal";

const Hero = () => {
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <motion.section
      className="min-h-auto md:min-h-screen justify-around relative w-full flex flex-col items-center pt-12 md:pt-16 bg-gradient-to-b from-white via-neutral-50 to-white"
      {...animationProps}
    >
      <div className="flex flex-col gap-4 md:gap-6 px-4 w-full items-center mb-16 md:mb-6">
        <div className="flex items-center mb-8 bg-neutral-100 bg-opacity-80 backdrop-blur-sm text-sm rounded-full py-1.5 px-4 gap-2">
          <div className="bg-[#4782ed] rounded-full h-1.5 w-1.5"></div>
          <span className="text-neutral-600 text-md md:text-lg">
            Available for October Projects
          </span>
        </div>
        <h1 className="text-4xl md:text-7xl font-semibold tracking-tight text-center capitalize">
          Full-Scale Website <br /> Design & Development
        </h1>

        <p className="w-full hidden md:block max-w-[64ch] mt-3 px-4 leading-6 text-md md:text-xl text-neutral-600 text-center">
          <span className="font-semibold">
            Husband-wife team building custom websites <br />
          </span>{" "}
          designed to elevate your brand and grow your business.
        </p>
        <p className="w-full block md:hidden max-w-[64ch] mt-3 px-4 leading-6 text-md md:text-xl text-neutral-600 text-center">
          <span className="font-semibold">
            Husband-wife team building custom websites
          </span>{" "}
          designed to elevate your brand and grow your business.
        </p>
        <FormModal />
      </div>
      <div className="w-full">
        <HeroCarousel images={heroImages} />
      </div>
    </motion.section>
  );
};

export default Hero;
