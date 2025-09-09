"use client";

import Image from "next/image";

const WhyUs: React.FC = () => {
  return (
    <section className="relative w-full px-4 md:px-[6%] pt-4 md:pt-16">
      <span className="uppercase font-medium text-neutral-700 tracking-widest text-xs font-mono">
        Why Choose Lauf
      </span>

      <div className="w-full border border-dashed border-neutral-300 mt-4 mb-8 md:mb-12" />

      {/* Layout */}
      <div className="flex gap-10 flex-col-reverse md:flex-row md:items-center items-stretch">
        {/* Left / Image */}
        <div className="relative md:w-1/2 md:h-[80vh]  overflow-hidden">
          {/* Maintain a pleasant aspect ratio at different breakpoints */}
          <div className="relative aspect-[4/4] md:h-full md:w-[50vw]">
            <Image
              src="/why-us.jpeg"
              alt="Desk and chair in a modern workspace"
              fill
              className="object-cover md:min-h-[80vh]"
              priority={false}
            />
          </div>
        </div>

        {/* Right / Copy */}
        <div className="md:w-1/2">
          <h2
            style={{ lineHeight: 1.15 }}
            className="mt-2 text-4xl capitalize sm:text-5xl md:text-6xl tracking-tight"
          >
            Win trust, create opportunities.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-neutral-600 md:max-w-[68ch]">
            Your site is designed to reflect your expertise, communicate clearly
            to investors and founders, and position you for long-term growth.
            Every build is fast, secure, and tailored to your needs, with
            automations that save time and reduce friction.
          </p>

          <p className="mt-4 text-lg md:text-xl text-neutral-900 font-medium md:max-w-[68ch]">
            The result is a professional presence that helps your firm focus on
            what matters most, closing deals and growing your business.
          </p>

          {/* Testimonial */}
          <div className="mt-12 md:mt-16 flex flex-col gap-8 border-t md:border-t-0 md:border-l border-dashed border-neutral-500 pt-6 md:pt-2 md:pl-6">
            <blockquote className="text-neutral-700 text-lg md:text-xl">
              &quot;Lauf delivered exceptional service throughout the entire
              process. We are thrilled with the end product, and we truly
              believe the new site has played a pivotal role in the continued
              growth and success of Brady Digital Consulting&quot;
            </blockquote>

            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-lg md:text-xl">Jack Brady</span>
                <span className="uppercase font-mono tracking-widest text-[10px] md:text-xs text-neutral-700">
                  Brady Digital Consulting
                </span>
              </div>

              <div className="relative">
                <Image
                  src="/brady-logo.png"
                  alt="Hero Client Logo"
                  width={125}
                  height={30}
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
