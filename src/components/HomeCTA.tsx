"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./Button";

// NEW: gsap pinning
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HomeCTA = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  return (
    <motion.section
      ref={sectionRef}
      // keep your color change exactly as before
      initial={{
        backgroundColor: "#F7F7F7",
        color: "#282725",
        borderTopColor: "#e5e5e5",
      }}
      animate={{
        backgroundColor: isInView ? "#6a59ff" : "#F7F7F7",
        color: isInView ? "#FFFFFF" : "#282725",
        borderTopColor: isInView ? "#3b3a38" : "#e5e5e5",
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="px-[4%] flex flex-col py-16"
    >
      <div className="flex w-full gap-1 flex-col justify-center items-center py-24">
        <h2 className="capitalize text-center text-4xl md:text-[6vw] max-w-[16ch] md:leading-[.95] font-light tracking-tight text-inherit">
          Lauf helps companies stand out online
        </h2>
        <div className="mt-5 md:mt-12">
          <Button href="/contact">Get started today</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeCTA;
