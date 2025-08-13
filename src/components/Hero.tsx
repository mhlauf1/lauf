"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "./Button";

// Define the structure for a testimonial
interface Testimonial {
  image: string;
  quote: string;
  name: string;
  company: string;
}

// Data for the carousel with updated quotes
const testimonials: Testimonial[] = [
  {
    image: "/cpc-new.png",
    quote:
      "The personal attention, availability, and attention to detail made this a great all-around experience. We highly recommend Michael for any website design or development services.",
    name: "Peter Mark",
    company: "Cadence Private Capital",
  },
  {
    image: "/mnmr-mockup.jpg",
    quote:
      "Lauf transformed my run of the mill, self-made Wix website into a first class professional website. I couldn’t be happier with the website he created for me!",
    name: "Adam Mott",
    company: "Minnesota Manufacturing Recruiting",
  },

  {
    image: "/brady-main-2.png",
    quote:
      "Lauf delivered exceptional service throughout the entire process. We are thrilled with the end product, and we truly believe the new site has played a pivotal role in the continued growth and success of Brady Digital Consulting.",
    name: "Jack Brady",
    company: "Brady Digital Consulting",
  },
];

const Hero: React.FC = () => {
  const container = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const headlineWords = "Full-scale website design & development".split(" ");
  const pLines = [
    "Convert more, ship faster, and turn complex problems",
    "into simple online solutions. Learn more how we can ",
    "build your next web project.",
  ];
  const pLinesMobile = [
    "Convert more, ship faster, and turn complex",
    "problems into simple online solutions. Learn",
    "more how we can build your next web project.",
  ];

  // GSAP animations for the text
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero-location", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          ".hero-word",
          {
            yPercent: 110,
            stagger: 0.05,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .from(
          ".line",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .from(
          ".right-column",
          {
            x: 50,
            opacity: 0,
            delay: 0.2,
            duration: 1,
            ease: "power2.out",
          },
          "-=1.2"
        );
    },
    { scope: container }
  );

  // Effect for the auto-playing carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section ref={container} className="relative bg-neutral-900">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="flex flex-1 flex-col items-start pt-[5vh] bg-neutral-900 md:pt-[10vh] px-4 md:px-20 pb-16 md:pb-28">
          <div className="overflow-hidden mb-4">
            <span className="hero-location text-xs text-neutral-300 font-mono tracking-widest uppercase inline-block">
              Based in Madison, WI
            </span>
          </div>
          <h1 className="text-5xl md:text-5xl lg:text-[84px] text-white max-w-[11ch] font-light tracking-tight mb-6 md:mb-8 flex flex-wrap ">
            {headlineWords.map((word, index) => (
              <div key={index} className="overflow-hidden leading-[1.1] mr-4">
                <span className="hero-word inline-block">{word}</span>
              </div>
            ))}
          </h1>
          <div className="flex flex-1 flex-col text-md md:text-xl text-neutral-200">
            <div className="hidden md:block">
              {pLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <p className="line text-neutral-200 tracking-tight leading-snug">
                    {line}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:hidden block">
              {pLinesMobile.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <p className="line text-neutral-200 tracking-tight leading-snug">
                    {line}
                  </p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden mt-8">
              <div className="hero-button">
                <Button href="/contact">Start a project</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Carousel) */}
        <div className="right-column flex flex-1 flex-col w-full bg-neutral-900 md:pt-[10vh] px-4 md:px-20 pb-28 lg:justify-end">
          <div className="relative w-full h-full flex flex-col">
            {/* Carousel Content */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-row gap-2 items-center">
                <div className="size-1 rounded-full bg-[#6a59ff] animate-pulse"></div>
                <span className="font-mono text-xs text-neutral-200 uppercase">
                  Recent Projects
                </span>
              </div>

              <div className="flex items-center gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeIndex
                        ? "bg-neutral-100"
                        : "bg-neutral-500"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="relative h-[45vh] w-full overflow-hidden">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Image */}
                  <div className="w-full h-full bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Text & Controls */}
            <div className="flex-grow pb-24 mt-4 flex flex-col">
              <div className="relative ">
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute  inset-0 transition-opacity duration-700 ${
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p
                      style={{ lineHeight: 1.35 }}
                      className="text-base  text-neutral-100 font-medium "
                    >
                      &quot;{item.quote}&quot;
                    </p>
                    <div className="flex flex-col items-end mt-4">
                      <h4 className="font-medium tracking-tight text-neutral-200 text-right">
                        {item.name}
                      </h4>
                      <p className="text-xs font-mono uppercase tracking-widest mt-1 text-neutral-300 text-right">
                        {item.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
