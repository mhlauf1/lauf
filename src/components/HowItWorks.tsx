"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { howItWorksSteps } from "@/utils/data";
import Image from "next/image";

const HowItWorks = () => {
  const headerRef = React.useRef(null);
  const stepsRef = React.useRef(null);
  const imageRef = React.useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const areStepsInView = useInView(stepsRef, { once: true, amount: 0.1 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  const headerAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const stepsAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: areStepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const imageAnimationProps = {
    initial: { opacity: 0, scale: 0.95 },
    animate: isImageInView
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: 0.95 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section
      id="how-it-works"
      className="mx-4 md:mx-20 lg:mx-36 flex flex-col gap-2 md:gap-3 rounded-xl items-center py-28 md:py-36"
    >
      <motion.div
        ref={headerRef}
        {...headerAnimationProps}
        className="text-center"
      >
        <h3
          style={{ lineHeight: "120%" }}
          className="text-3xl font-semibold md:text-5xl tracking-tight lg:text-6xl text-neutral-800"
        >
          How It Works
        </h3>
        <p className="mt-2 md:text-lg md:w-[42ch] text-center text-neutral-600">
          Getting your business online with us is simple and efficient.
          Here&apos;s the process:
        </p>
      </motion.div>
      <div className="flex flex-col rounded-xl py-4 md:py-212 md:flex-row gap-16">
        <motion.div
          ref={stepsRef}
          {...stepsAnimationProps}
          className="flex w-full flex-1 flex-col md:flex-row gap-12"
        >
          <div className="flex flex-1 flex-col gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                className="p-2 border-b pb-4 text-neutral-800"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  areStepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="flex flex-1 text-center justify-between items-end flex-col">
          <motion.div
            className="h-auto w-2/3 hidden md:flex"
            ref={imageRef}
            {...imageAnimationProps}
          >
            <Image
              src="/hiw-image.png"
              height={100}
              width={100}
              layout="responsive"
              alt="How It Works"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
