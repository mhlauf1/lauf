import React from "react";
import { solutionData } from "@/utils/data";
import { IoCheckmarkOutline } from "react-icons/io5";

const Item = ({
  title,
  description,
  listItems,
}: {
  title: string;
  description: string;
  listItems: string[];
}) => (
  <div className="flex flex-col flex-1 items-start gap-2">
    <div className="rounded-full h-16 w-16 bg-neutral-300"></div>
    <h4 className="font-medium text-neutral-800 mt-3 text-2xl">{title}</h4>
    <p className="md:w-[90%] w-full leading-[150%] text-neutral-600">
      {description}
    </p>
    <div className="h-[1px] bg-neutral-300 w-full my-4"></div>
    <div className="flex flex-col gap-4 items-start">
      {listItems.map((item) => (
        <div
          key={item}
          className="flex flex-row text-neutral-600 items-center gap-3"
        >
          <IoCheckmarkOutline color="#4FAC14" size={24} />
          <p className="text-neutral-600">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const Solution = () => {
  return (
    <section className="border border-neutral-100 mt-24 shadow-md md:rounded-2xl max-w-screen-2xl mx-auto px-4 md:px-0 flex flex-col gap-2 md:gap-3 bg-gradient-to-b from-white  via-slate-100 to-white  items-center py-24 md:py-24 mb-24">
      <h2 className="text-3xl lg:text-4xl text-neutral-800  w-full md:w-[22ch] text-center tracking-tight font-medium">
        Tired of Wasting Time Getting Your Business Online?
      </h2>
      <p className="text-lg mt-2 w-[75%] md:w-full text-center text-neutral-600">
        Get your business online efficiently with a website designed to deliver
        results from the start.{" "}
      </p>
      <div className="flex flex-col md:flex-row mt-16  w-full justify-center gap-16">
        {solutionData.map((item) => (
          <div key={item.id}>
            <Item
              title={item.name}
              description={item.description}
              listItems={item.tags}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solution;
