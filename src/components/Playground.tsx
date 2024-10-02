import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { playgroundData } from "@/utils/data";
import { FaCircle } from "react-icons/fa";

// add image
type PlaygroundItemProps = {
  name: string;
};

const PlaygorundItem = ({ name }: PlaygroundItemProps) => (
  <div className="w-auto flex gap-3  flex-col">
    <div className="h-[600px] md:h-[700px] rounded-lg w-full md:w-[500px] bg-neutral-200"></div>
    <h3 className="tracking-tight mt-1 md:mt-3 text-neutral-700">{name}</h3>
  </div>
);

const Playgorund = () => {
  return (
    <section className="flex flex-col w-full py-16 md:py-24">
      <div className="px-4 md:px-0 md:pl-20 flex flex-col md:flex-row items-row gap-6 md:gap-3">
        {playgroundData.map((item) => (
          <div key={item.id}>
            <PlaygorundItem name={item.title} />
          </div>
        ))}
      </div>
      <div className="hidden md:flex px-4 md:px-20  mt-8 flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <FaCircle size={8} />
          <FaCircle size={8} color="lightgrey" />
          <FaCircle size={8} color="lightgrey" />
          <FaCircle size={8} color="lightgrey" />
          <FaCircle size={8} color="lightgrey" />
        </div>
        <div className="flex items-center flex-row gap-3">
          <div className="p-4 border border-neutral-300 rounded-lg">
            <IoMdArrowBack size={24} />
          </div>
          <div className="p-4 border border-neutral-300 rounded-lg">
            <IoMdArrowForward size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playgorund;
