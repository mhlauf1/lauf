"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { howItWorksSteps } from "@/utils/data";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howItWorksSteps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 md:px-20 flex flex-col gap-2 md:gap-3  items-start md:items-center py-28 md:py-48 w-full">
      <h2 className="text-3xl lg:text-4xl w-full md:w-[20ch] text-center tracking-tight font-medium">
        How it works
      </h2>
      <p className="text-lg mt-2 text-neutral-600 text-center">
        Getting your business online with us is simple and efficient.
        Here&apos;s the process:
      </p>
      <div className="flex w-full flex-col md:flex-row gap-12 md:gap-24 px-4 md:px-0 mt-12">
        <div className="flex flex-1 justify-center flex-col">
          <div className="md:pl-20">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`mb-8 border-b pb-6 cursor-pointer ${
                  index === activeStep ? "text-black" : "text-gray-400"
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-medium mb-2">
                  Step {index + 1}: {step.title}
                </h3>
                <AnimatePresence>
                  {index === activeStep && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-neutral-600 md:w-[42ch] leading-[150%]"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="bg-neutral-100 rounded-2xl h-[70vh] flex flex-1 overflow-hidden">
          <AnimatePresence>
            <motion.img
              key={activeStep}
              src={howItWorksSteps[activeStep].image}
              alt={howItWorksSteps[activeStep].title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
