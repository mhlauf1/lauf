"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define a TypeScript interface for our solution data
interface Solution {
  title: string;
  time: string;
  description: string;
}

const solutionsData: Solution[] = [
  {
    title: "Strategy",
    time: "1 week",
    description:
      "We begin by mapping out a strategic blueprint for your website. This collaborative process ensures we understand your goals and that every decision is purposeful from the very beginning.",
  },
  {
    title: "Design",
    time: "1–2 weeks",
    description:
      "We translate our shared strategy into a beautiful and functional design. Through a collaborative process of mood boards and mockups, we refine the visual direction until it perfectly captures your brand's identity.",
  },
  {
    title: "Development",
    time: "1 week",
    description:
      "With the design finalized, we build your website with clean, high-performance code. You can review the progress on a private staging link, ensuring a transparent and fast development phase.",
  },
  {
    title: "Production",
    time: "Live",
    description:
      "We manage the complete launch process to get your site live. Post-launch, we offer ongoing support to ensure your website remains a powerful and secure asset for your business.",
  },
];

const OurSolutions: React.FC = () => {
  const container = useRef<HTMLElement | null>(null);
  const headlineWords = "Our Solutions".split(" ");
  const subHeadlineLines = [
    "Our team is focused on solving your challenges and streamlining operations",
    "so you can run things more efficiently.",
  ];

  const subHeadlineMobile = [
    "Our team is focused on solving your",
    "challenges and streamlining operations so",
    "you can run things more efficiently.",
  ];

  useGSAP(
    () => {
      // Register the plugin inside the hook for reliability.
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".headline-container",
          start: "top 90%", // Start animation when the section is 80% from the top
        },
      });

      // Animate the main headline word by word
      tl.from(".solution-word", {
        yPercent: 110,
        stagger: 0.05,
        duration: 0.7,
        ease: "power2.out",
      });

      // Animate the sub-headline paragraph line by line
      tl.from(
        ".solution-sub-line",
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      ); // Overlap with the headline animation

      // Animate each solution card as it scrolls into view
      const solutions = gsap.utils.toArray<HTMLElement>(".solution-item");
      solutions.forEach((solution) => {
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: solution,
            start: "top 90%", // Changed to 90% to trigger earlier
            once: true,
          },
        });

        // Stagger the animation of the elements within each card
        cardTl
          .from(solution.querySelector(".solution-line"), {
            scaleX: 0,
            duration: 0.8,
            ease: "power2.out",
          })
          .from(
            solution.querySelector(".solution-h3"),
            {
              yPercent: 110,
              duration: 0.7,
              ease: "power2.out",
            },
            "-=0.7"
          )
          .from(
            solution.querySelector(".solution-span"),
            { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" },
            "-=0.6"
          )
          .from(
            solution.querySelector(".solution-p"),
            { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" },
            "-=0.6"
          );
      });
    },
    { scope: container }
  );

  return (
    <div className=" border-t">
      <section
        ref={container}
        className="mx-[4%] border-x px-4 md:px-12  border-neutral-200 flex flex-col py-16 md:py-28"
      >
        <div className="flex flex-row items-end justify-between">
          <div>
            <div className="headline-container">
              <h2 className="text-4xl sm:text-5xl md:text-6xl  font-light tracking-tight mb-4 flex flex-wrap leading-tight">
                {headlineWords.map((word, index) => (
                  <div key={index} className="overflow-hidden mr-3">
                    <span className="solution-word inline-block">{word}</span>
                  </div>
                ))}
              </h2>
            </div>
            <div className="flex items-end flex-row  justify-between">
              <div className=" flex-col hidden md:block">
                {subHeadlineLines.map((line, index) => (
                  <div key={index} className="overflow-hidden">
                    <p className="solution-sub-line tracking-tight text-lg md:text-xl md:max-w-[54ch]">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
              <div className=" flex-col md:hidden block">
                {subHeadlineMobile.map((line, index) => (
                  <div key={index} className="overflow-hidden">
                    <p className="solution-sub-line tracking-tight text-lg md:text-xl md:max-w-[54ch]">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  gap-12 w-full mt-12 md:mt-20 md:grid-cols-4">
          {solutionsData.map((item, index) => (
            <div
              key={index}
              className="solution-item flex flex-col items-start"
            >
              <div className="solution-line w-[30px] h-[2px] bg-[#6a59ff] transform-origin-left"></div>
              <div className="overflow-hidden mt-4 md:mt-8 mb-2 md:mb-4">
                <h3 className="solution-h3 text-xl md:text-3xl font-medium tracking-tight">
                  {item.title}
                </h3>
              </div>
              <div className="overflow-hidden mb-2 md:mb-3">
                <span className="solution-span text-xs ms:text-sm uppercase tracking-widest font-mono">
                  {item.time}
                </span>
              </div>
              <div className="overflow-hidden">
                <p className="solution-p text-neutral-700 tracking-tight">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurSolutions;
