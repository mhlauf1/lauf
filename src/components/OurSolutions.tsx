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
      "Clarify goals, uncover challenges, and map out a focused plan that shows exactly how your website will perform.",
  },
  {
    title: "Design",
    time: "1–2 weeks",
    description:
      "Create a unique visual identity with clean layouts, intuitive navigation, and a style that builds instant trust.",
  },
  {
    title: "Development",
    time: "1 week",
    description:
      "Transform designs into a fast, responsive, and secure website built with modern code and best practices.",
  },
  {
    title: "Production",
    time: "Live",
    description:
      "Launch, connect all tools, and fine-tune performance so the site attracts and converts from day one.",
  },
];

const OurSolutions: React.FC = () => {
  const container = useRef<HTMLElement | null>(null);
  const headlineWords = "Our Solutions".split(" ");
  const subHeadlineLines = [
    "Our team is focused on solving your challenges and streamlining",
    "operations so you can run things more efficiently.",
  ];

  useGSAP(
    () => {
      // Register the plugin inside the hook for reliability.
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".headline-container",
          start: "top 80%", // Start animation when the section is 80% from the top
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
            start: "top 85%",
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
            "-=0.6"
          )
          .from(
            solution.querySelector(".solution-span"),
            { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" },
            "-=0.5"
          )
          .from(
            solution.querySelector(".solution-p"),
            { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" },
            "-=0.5"
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
              <div className="flex flex-col">
                {subHeadlineLines.map((line, index) => (
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
        <div className="grid grid-cols-1  gap-12 w-full  mt-20 md:grid-cols-4">
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
                <span className="solution-span text-xs ms:text-sm uppercase font-mono">
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
