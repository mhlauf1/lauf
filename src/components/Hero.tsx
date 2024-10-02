"use client";
import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[95vh] md:min-h-screen justify-between relative w-full gap-8 flex flex-col items-center pt-12 md:pt-20  bg-gradient-to-b from-white  via-slate-100 to-white">
      <Image src="/grid-hero.png" alt="Grid" fill className="opacity-[4%]" />
      <motion.div
        className="flex items-center bg-neutral-100 bg-opacity-80 backdrop-blur-sm text-sm rounded-full py-1.5 px-2 gap-3"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="bg-neutral-900 rounded-full py-1 px-3">
          <span className="text-neutral-100 font-semibold">Now Available</span>
        </div>
        <span className="text-neutral-600">for October Projects 🎊</span>
      </motion.div>
      <div className="flex flex-col gap-6 md:mt-6 items-center mb-10">
        <motion.h1
          className="text-4xl md:text-7xl font-semibold tracking-tighter text-center capitalize"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Full-Scale Website <br /> Design & Development
        </motion.h1>

        <motion.p
          className="w-full max-w-[64ch] px-4 leading-6 text-lg md:text-xl text-neutral-600 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Custom websites designed to elevate your brand and grow your business.{" "}
          A husband-wife team building websites built to drive results –
          tailored to your vision.
        </motion.p>
        <motion.div
          className="flex flex-col mt-4 items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <button className=" bg-gradient-to-t from-neutral-950 via-neutral-900 to-neutral-600 flex items-center gap-4 font-medium rounded-lg py-3 px-6 text-white">
            Let&apos;s work together
            <IoIosArrowForward />
          </button>
          <span className="text-sm text-neutral-500">
            Flat rates. No commitments. Defined outcomes.
          </span>
        </motion.div>
      </div>

      <motion.div
        className="w-full max-w-[1000px] px-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/hero-bg.png"
          width={1000}
          height={800}
          alt="Hero bg"
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </section>
  );
};

export default Hero;
