import Link from "next/link";
import React from "react";

const Button = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="inline-block bg-neutral-700 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-neutral-800 border duration-300 border-neutral-800 hover:border-white/50 transition-colors"
  >
    {children}
  </a>
);

const ButtonDark = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <button className="flex flex-row items-center gap-3 text-[#F9CDCD] font-medium px-8 py-3 border border-[#F9CDCD] text-lg cursor-pointer duration-300 rounded-md">
        <div className="size-1.5 rounded-full bg-[#357DED] animate-pulse"></div>

        {children}
      </button>
    </Link>
  );
};

export { Button, ButtonDark };
