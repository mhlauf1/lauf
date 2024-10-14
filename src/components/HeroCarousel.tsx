"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
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
  const baseVelocity = -2.5; // Adjust this value to change the speed
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
          <div
            key={index}
            className="flex-shrink-0 flex items-end w-76 h-64 mx-2"
          >
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              width={350}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroCarousel;
