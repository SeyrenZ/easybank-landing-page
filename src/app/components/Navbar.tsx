import React from "react";
import { Logo } from "./svgs";
import Link from "next/link";
import { Button } from ".";
const Navbar = () => {
  type Provider = {
    name: string;
    link: string;
  };

  const links: Provider[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Careers",
      link: "/",
    },
  ];

  return (
    <div className="w-full fixed bg-white z-50">
      <div className="w-full max-w-[1440px] mx-auto px-32  flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-x-9">
          {links.map((provider, index) => (
            <Link
              className="text-sm text-zinc-400 font-medium hover:text-black py-7 border-b-[3px] border-transparent hover:border-limeGreen transition-all duration-200 ease-in-out"
              key={index}
              href={provider.link}
            >
              {provider.name}
            </Link>
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;