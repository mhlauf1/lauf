import { CiGlobe } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[94vh] mt-16 flex flex-col justify-between ">
      {/* Background image */}
      <div className="m-2 md:m-4 relative flex flex-1">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 -z-10"></div>
        <Image
          src="/main.jpg"
          alt="Invest"
          fill
          priority
          className="object-cover -z-20"
        />
        <div className="flex flex-col w-full px-4 md:px-[6%] justify-end pt-24 pb-8 flex-1">
          <h1 className="leading-[1.05] max-w-[12ch] tracking-tight text-white lg:text-[104px] text-[clamp(3.5rem,6vw,7.375rem)]">
            Digital presence for capital firms
          </h1>
          <div className="flex flex-col">
            <p className="text-neutral-100 md:max-w-[53ch] text-xl md:text-2xl mt-3">
              We work with focused investment and advisory teams to create
              websites that build trust, attract opportunities, and support
              long-term growth.
            </p>
            <div className="flex flex-col md:flex-row w-full md:items-end justify-between mt-8">
              <div className="">
                <Link className="" href="/contact">
                  <button className="bg-white tracking-tight justify-between flex gap-3 font-semibold items-center py-4 px-8 rounded-full">
                    Get started
                    <MdArrowOutward size={22} />
                  </button>
                </Link>
              </div>
              <div className="flex items-center md:items-start mt-12 md:mt-0  gap-3">
                <CiGlobe className="text-neutral-100 w-[32px] h-[32px] md:w-[36px] md:h-[36px]" />
                <p className="text-neutral-100 leading-snug">
                  Design and development team
                  <br /> based in Madison, WI
                </p>
              </div>
            </div>
            <div className="bg-neutral-300 w-full h-[1px] my-6 md:my-12"></div>
            <div className="hidden md:block">
              <p className="text-white">Recent Clients</p>
              {(() => {
                const clients = [
                  {
                    name: "Stoc Advisory",
                    url: "https://www.stocadvisory.com/",
                    tag: "Website",
                  },
                  {
                    name: "Cadence Private Capital",
                    url: "https://cadenceprivatecapital.com/",
                    tag: "Website",
                  },
                  {
                    name: "Brady Digital Consulting",
                    url: "https://www.bradydigitalconsulting.com/",
                    tag: "Website",
                  },
                ];

                return (
                  <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
                    {clients.map((c) => (
                      <a
                        key={c.name}
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white/10 backdrop-blur rounded-md py-4 px-5 flex flex-col gap-1 justify-center outline-none ring-0 focus-visible:ring-2 focus-visible:ring-white/60"
                        aria-label={`Open ${c.name} website`}
                        title={`Open ${c.name} website`}
                      >
                        <span className="text-neutral-300">{c.tag}</span>
                        <p className="text-white text-xl pr-24">{c.name}</p>

                        {/* Hover reveal on the right */}
                        <span
                          className="
                pointer-events-none
                absolute right-5 top-1/2 -translate-y-1/2
                inline-flex items-center gap-2
                text-white/90 text-sm font-medium tracking-tight
                opacity-0 translate-x-1 transition-all duration-200
                group-hover:opacity-100 group-hover:translate-x-0
              "
                        >
                          View website <MdArrowOutward size={18} />
                        </span>
                      </a>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
