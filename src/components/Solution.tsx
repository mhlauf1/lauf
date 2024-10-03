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
    <p className=" w-full leading-[150%] text-neutral-600">{description}</p>
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
    <section className="px-4 md:px-20 lg:px-36 gap-10 flex flex-col md:flex-row py-16 md:py-24">
      <div className="flex flex-1 rounded-lg bg-[#F1EDEA]"></div>
      <div className="flex flex-col py-24 items-start flex-1">
        <h2
          style={{ lineHeight: "130%" }}
          className="text-3xl lg:text-4xl text-neutral-800  w-full  font-semibold"
        >
          Tried of wasting time getting your business online?{" "}
          <span className="text-neutral-500">
            Get your business online efficiently with a website designed to
            deliver results from the start.
          </span>
        </h2>
        <div>
          <ul className="mt-10 text-xl px-4 leading-[170%] font-semibold text-neutral-900 space-y-4 list-disc">
            <li>
              Tailored for your business.{" "}
              <span className="text-neutral-500 font-medium">
                Our designs are uniquely crafted to align with your specific
                business goals, ensuring a standout brand identity.
              </span>
            </li>
            <li>
              Built for the future.{" "}
              <span className="text-neutral-500 font-medium">
                Our scalable architecture and cross-device compatibility are
                tailored to adapt to evolving trends, making your site
                future-proof with cutting-edge features.
              </span>
            </li>
            <li>
              Fast & Ongoing Support.{" "}
              <span className="text-neutral-500 font-medium">
                We offer reliable service with a commitment to continuous care,
                ensuring quick loading speeds for an optimal user experience.
              </span>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Solution;
