import React from "react";
import { playgroundData } from "@/utils/data";

// add image
type PlaygroundItemProps = {
  name: string;
};

const PlaygorundItem = ({ name }: PlaygroundItemProps) => (
  <div className="w-full flex flex-1 gap-3  flex-col">
    <div className="h-[600px] md:h-[700px] rounded-lg w-full bg-neutral-200"></div>
    <h3 className="tracking-tight mt-1 md:mt-3 text-neutral-700">{name}</h3>
  </div>
);

const Playgorund = () => {
  return (
    <section className="flex flex-col w-full px-4 md:px-20 lg:px-36 py-24 md:py-32">
      <div className="px-4 md:px-0 w-full flex-1 flex flex-col md:flex-row items-row gap-6 md:gap-3">
        {playgroundData.map((item) => (
          <div className="w-full" key={item.id}>
            <PlaygorundItem name={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Playgorund;
