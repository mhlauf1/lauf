"use client";
import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="px-4 md:px-20 lg:px-36 w-full flex flex-col pt-16 md:pt-20 bg-gradient-to-b from-white  via-neutral-50 to-white">
      <div className="flex gap-8 md:gap-0 flex-col md:items-end md:flex-row">
        <div className="flex md:flex-[2] flex-col gap-6 items-start">
          <motion.h1
            className="text-4xl md:text-7xl font-semibold tracking-tight capitalize"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Full-Scale Website <br />{" "}
            <span className="text-neutral-500">Design & Development</span>
          </motion.h1>
        </div>
        <div className="flex md:flex-[1]">
          <motion.p
            className="w-[90%] md:max-w-[36ch] leading-[150%]  text-lg md:text-xl text-neutral-600 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <span className="font-semibold">
              Husband-wife team building custom websites
            </span>{" "}
            designed to elevate your brand and grow your business. Based in
            Chicago.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="flex flex-col mt-16 items-start gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      >
        <button className=" bg-gradient-to-t font-semibold from-neutral-950 via-neutral-900 to-neutral-700 flex items-center gap-4 rounded-full py-4 px-8 text-white">
          Let&apos;s work together
          <IoIosArrowForward />
        </button>
        <span className="text-sm text-neutral-500">
          Flat rates. No commitments. Defined outcomes.
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
