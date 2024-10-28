"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import useIsDesktop from "@/hooks/useIsDesktop"; // Adjust the path based on your project structure

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";

interface HeroCarouselProps {
  images: string[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images }) => {
  const isDesktop = useIsDesktop(); // Determine if the screen is desktop size

  const baseVelocity = isDesktop ? -3.5 : -6.5; // Adjust this value to change the speed
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t: number, delta: number) => {
    const moveBy = baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const resetPosition = () => {
        const containerWidth = container.clientWidth;
        if (baseX.get() <= -containerWidth) {
          baseX.set(baseX.get() + containerWidth);
        }
      };

      const observer = new ResizeObserver(resetPosition);
      observer.observe(container);

      return () => observer.disconnect();
    }
  }, [baseX]);

  return (
    <div className="overflow-hidden">
      <motion.div ref={containerRef} className="flex" style={{ x }}>
        {images.concat(images).map((src, index) => (
          <div key={index} className="flex-shrink-0 flex items-end  mx-2">
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              width={450}
              height={300}
              className="object-cover w-auto md:h-[250px]  h-[225px]  rounded-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroCarousel;
