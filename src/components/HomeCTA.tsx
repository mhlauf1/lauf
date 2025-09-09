import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const HomeCTA = () => {
  return (
    <section className="px-4 md:px-[6%] relative w-full h-[65vh] flex flex-col justify-center mt-24 mb-12">
      <div className="absolute top-0 mx-4 md:mx-[6%] left-0 right-0 bottom-0 bg-black/50 -z-20"></div>
      <Image
        src="/cta.jpeg"
        alt="cta image"
        fill
        className="inset-0 object-cover px-4 md:px-[6%] -z-50"
      />
      <div className="flex  w-full gap-1 z-10 flex-col justify-center items-start px-4 md:px-[5%] py-16 md:py-24">
        <p className="text-neutral-100 tracking-widest uppercase font-medium text-xs font-mono">
          Need a Website?
        </p>
        <h2
          style={{ lineHeight: 1.15 }}
          className=" text-start mt-2 text-white capitalize tracking-tight text-4xl md:text-5xl lg:text-6xl md:max-w-[19ch]"
        >
          Start your project and position your firm to win more deals tomorrow.
        </h2>
        <div className="mt-16 md:w-auto w-full md:mt-12">
          <Link href="/contact">
            <button className="bg-white  flex gap-2  justify-between font-semibold items-center py-4 px-8 rounded-full">
              Get started
              <MdArrowOutward size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
