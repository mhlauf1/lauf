"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define the structure for a project
interface Project {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}

// Consolidate project data into a single array for easier management
const projectsData: Project[] = [
  {
    href: "https://www.stocadvisory.com/",
    imageSrc: "/stoc-main.png",
    alt: "Stoc Advisory",
    title: "Stoc Advisory",
    description:
      "A modern digital presence for a forward-thinking advisory firm.",
  },
  {
    href: "https://www.cadenceprivatecapital.com/",
    imageSrc: "/cpc-new.png",
    alt: "Cadence Private Capital",
    title: "Cadence Private Capital",
    description:
      "Crafting a sophisticated online identity for a private capital leader.",
  },
  {
    href: "https://www.embarkpetservices.com/",
    imageSrc: "/embark-new.png",
    alt: "Embark Pet Services",
    title: "Embark Pet Services",
    description:
      "A friendly and approachable website for comprehensive pet care.",
  },
  {
    href: "https://www.mnmfgrecruiting.com/",
    imageSrc: "/mnmr-mockup.jpg",
    alt: "Minnesota Manufacturing Recruiting",
    title: "Minnesota Manufacturing Recruiting",
    description:
      "Connecting top talent with leading manufacturers through a streamlined web platform.",
  },
  {
    href: "https://www.bradydigitalconsulting.com/",
    imageSrc: "/brady-main-2.png",
    alt: "Brady Digital Consulting",
    title: "Brady Digital Consulting",
    description:
      "Connecting top talent with leading manufacturers through a streamlined web platform.",
  },
  {
    href: "https://www.strianoelectric.com/",
    imageSrc: "/striano-main.png",
    alt: "Striano Electric",
    title: "Striano Electric",
    description:
      "Powering New York City's Most Critical Infrastructure with a high-voltage website.",
  },
];

const FeaturedWork: React.FC = () => {
  const container = useRef<HTMLElement | null>(null);
  const titleWords = "Selected Work".split(" ");

  useGSAP(
    () => {
      // Register the plugin inside the hook for reliability
      gsap.registerPlugin(ScrollTrigger);

      // Animate the main "Selected Work" title word by word
      gsap.from(".title-word", {
        yPercent: 110,
        stagger: 0.05,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".title-container",
          start: "top 80%",
        },
      });

      // Use GSAP's matchMedia for responsive animations
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };

          const projects = gsap.utils.toArray<HTMLElement>(".project-item");
          projects.forEach((project) => {
            // FIX: The trigger is now the text container, not the whole project item
            const textContent = project.querySelector(".project-text-content");
            const h3 = project.querySelector(".project-title");
            const p = project.querySelector(".project-subtext");

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: textContent, // Trigger animation based on the text content
                // Use a different start trigger based on the screen size
                start: isMobile ? "top 96%" : "top 95%",
                once: true,
              },
            });

            tl.from(h3, {
              yPercent: 110,
              duration: 0.8,
              ease: "power2.out",
            }).from(
              p,
              {
                y: 20,
                opacity: 0,
                duration: 0.7,
                ease: "power2.out",
              },
              "-=0.5"
            );
          });
        }
      );
    },
    { scope: container }
  );

  return (
    <div className="bg-neutral-50 border-t border-neutral-200">
      <section
        ref={container}
        className="mx-[4%] flex flex-col border-x border-neutral-200  py-20"
      >
        <div className="flex px-4 md:px-12 flex-row items-center justify-between title-container">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight flex flex-wrap">
            {titleWords.map((word, index) => (
              <span key={index} className="overflow-hidden py-2 mr-4">
                <span className="title-word inline-block">{word}</span>
              </span>
            ))}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-12 px-4 md:px-12">
          {projectsData.map((project, index) => (
            <div key={index} className="project-item flex flex-col">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="project-image relative w-full md:h-[60vh] overflow-hidden">
                  <img
                    src={project.imageSrc}
                    className="w-full h-full object-cover"
                    alt={project.alt}
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold uppercase tracking-widest">
                      View Website
                    </p>
                  </div>
                </div>
              </a>
              {/* This new container holds the text and acts as the animation trigger */}
              <div className="project-text-content mt-5">
                <div className="overflow-hidden">
                  <h3 className="project-title font-semibold uppercase text-xl md:text-2xl tracking-tight mb-1">
                    {project.title}
                  </h3>
                </div>
                <div className="overflow-hidden">
                  <p className="project-subtext text-neutral-500 tracking-tight text-md md:text-lg">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedWork;
