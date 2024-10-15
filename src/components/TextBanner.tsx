"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const TextBanner: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <div className="pt-24 pb-12 md:pb-36 md:pt-36 flex px-4 md:px-20 lg:px-36">
      <motion.p
        ref={ref}
        style={{ lineHeight: "130%" }}
        className="text-2xl md:text-3xl lg:text-4xl text-neutral-500 tracking-tight font-semibold md:w-[44ch]"
        {...animationProps}
      >
        <span className="text-neutral-900">
          We create websites with modern design and smart functionality.
        </span>{" "}
        Our team are focused on solving your challenges and streamlining
        operations, so you can run things more efficiently.
      </motion.p>
    </div>
  );
};

export default TextBanner;
