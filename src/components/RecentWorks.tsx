import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { recentWorkData } from "@/utils/data";

// add image
type WorkItemProps = {
  name: string;
  tags: string[];
};

const WorkItem = ({ name, tags }: WorkItemProps) => (
  <div className="flex-1 w-full flex gap-3  flex-col">
    <div className="flex md:flex-row flex-col items-start gap-3 md:items-center justify-between">
      <h3 className="text-2xl md:text-3xl font-semibold text-neutral-700">
        {name}
      </h3>
      <div className="flex flex-row gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-neutral-400 rounded-md py-1.5 md:py-2 px-3 md:px-4 font-semibold tracking-wide text-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="h-[600px] md:h-[800px] rounded-lg w-full bg-[#F1EDEA]"></div>
  </div>
);

const RecentWorks = () => {
  return (
    <section className="flex flex-col w-full py-24 md:py-36">
      <div className="flex px-4 md:px-20 lg:px-36 ">
        <h3
          style={{ lineHeight: "120%" }}
          className="text-3xl font-semibold w-[24ch]  lg:text-5xl text-neutral-800"
        >
          Recent projects
        </h3>
      </div>
      <div className="px-4 md:px-20 lg:px-36 pt-12 flex flex-col gap-12 md:gap-20">
        {recentWorkData.map((item) => (
          <div className="w-full" key={item.id}>
            <WorkItem name={item.name} tags={item.tags} />
          </div>
        ))}
      </div>
      <div className="py-36 flex px-4 md:px-20 lg:px-36">
        <p
          style={{ lineHeight: "130%" }}
          className="text-3xl md:text-4xl lg:text-5xl text-neutral-500 font-semibold md:max-w-[52ch]"
        >
          <span className="text-neutral-900">
            Build better websites, faster—without compromising on high-quality
            design.
          </span>{" "}
          A strategic approach combined with customer-focused, lean development
          ensures your vision becomes a polished, ready-to-launch site.
        </p>
      </div>
    </section>
  );
};

export default RecentWorks;
