import { CiGlobe } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[94vh] mt-16 flex flex-col justify-between ">
      {/* Background image */}
      <div className="m-2 md:m-4 relative flex flex-1">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 -z-10"></div>
        <Image
          src="/main-1.jpeg"
          alt="Invest"
          fill
          priority
          className="object-cover -z-20"
        />
        <div className="flex flex-col w-full px-4 md:px-[6%] justify-end pt-24  md:pb-8 flex-1">
          <h1 className="leading-[1.05] max-w-[12ch] tracking-tight text-white lg:text-[104px] text-[clamp(3.5rem,6vw,7.375rem)]">
            Websites That Win Investors
          </h1>
          <div className="flex flex-col">
            <p className="text-neutral-100 md:max-w-[46ch] text-xl md:text-2xl mt-3">
              We work with focused investment teams to create websites that
              build trust, attract opportunities, and support long-term growth.
            </p>

            <div className="flex flex-col md:flex-row w-full md:items-end justify-between mt-8">
              <div>
                <Link href="/contact">
                  <button className="bg-white flex gap-3 font-semibold items-center py-4 px-8 rounded-full">
                    Launch An Investor-Ready Site
                    <MdArrowOutward size={22} />
                  </button>
                </Link>
              </div>
              <div className="flex items-start mt-16 md:mt-0 flex-col gap-3">
                <CiGlobe size={36} className="text-neutral-100" />
                <p className="text-neutral-100 leading-snug">
                  <b>Design and development team</b>
                  <br /> based in Madison, WI
                </p>
              </div>
            </div>
            <div className="bg-neutral-300 w-full h-[1px] my-6 md:my-12"></div>
            <div className="hidden md:block">
              <p className="text-white">Recents</p>
              <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-md py-4 px-5 flex flex-col gap-1 justify-center">
                  <span className="text-neutral-300">New Work</span>
                  <p className="text-white text-xl">Stoc Advisory</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-md py-4 px-5 flex flex-col gap-1 justify-center">
                  <span className="text-neutral-300">Client</span>
                  <p className="text-white text-xl">Cadence Private Capital</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-md py-4 px-5 flex flex-col gap-1 justify-center">
                  <span className="text-neutral-300">Coming Soon</span>
                  <p className="text-white text-xl">Playbook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
