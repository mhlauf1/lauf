"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="px-4 md:px-20 lg:px-36 w-full flex flex-col pt-16 md:pt-20 bg-gradient-to-b from-white  via-neutral-50 to-white">
      <div className="flex gap-8 md:gap-0 flex-col md:items-end md:flex-row">
        <div className="flex md:flex-[2] flex-col gap-6 items-start">
          <div className="flex md:hidden items-center bg-neutral-100 mb-2 bg-opacity-80 backdrop-blur-sm text-sm rounded-full py-1.5 px-2 gap-2 md:gap-3">
            <div className="bg-neutral-900 rounded-full py-1 px-3">
              <span className="text-neutral-100 font-semibold">
                Now Available
              </span>
            </div>
            <span className="text-neutral-600 font-semibold">
              for October Projects 🎊
            </span>
          </div>
          <motion.h1
            className="text-4xl w-full md:w-[16ch] md:text-7xl font-semibold tracking-tight capitalize"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Full-Scale Website{" "}
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
        <a href="/contact">
          <button className=" bg-gradient-to-t font-semibold from-neutral-950 via-neutral-900 to-neutral-700 flex items-center gap-4 rounded-full py-4 px-8 text-white">
            Let&apos;s work together
            <IoIosArrowForward />
          </button>
        </a>
        <span className="text-sm text-neutral-500">
          Flat rates. No commitments. Defined outcomes.
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
