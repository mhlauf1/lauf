import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { recentWorkData } from "@/utils/data";

// add image
type WorkItemProps = {
  name: string;
  tags: string[];
};

const WorkItem = ({ name, tags }: WorkItemProps) => (
  <div className="w-auto flex gap-3  flex-col">
    <div className="h-[500px] rounded-lg md:w-[1000px] bg-neutral-200"></div>
    <h3 className=" text-xl md:text-2xl tracking-tight mt-3 text-neutral-700">
      {name}
    </h3>
    <div className="flex flex-row gap-2 flex-wrap md:w-1/2">
      {tags.map((tag) => (
        <span className="border border-neutral-100 bg-gradient-to-r from-white  via-neutral-50 to-white rounded-full py-1.5 md:py-2 px-3 md:px-4 text-sm text-neutral-600">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const RecentWorks = () => {
  return (
    <section className="flex flex-col w-full py-24 md:py-36">
      <div className="flex px-4 md:px-20 flex-row items-center justify-between">
        <h3 className="text-xl tracking-tight">Recent work</h3>
        <div className="md:flex hidden items-center flex-row gap-3">
          <IoMdArrowBack />
          <IoMdArrowForward />
        </div>
      </div>
      <div className="px-4 md:px-0 md:pl-20 pt-4 flex flex-col md:flex-row items-row gap-12 md:gap-3">
        {recentWorkData.map((item) => (
          <div key={item.id}>
            <WorkItem name={item.name} tags={item.tags} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
