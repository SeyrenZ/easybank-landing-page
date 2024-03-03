"use client";
import React, { useState, useEffect, useRef } from "react";
import { IconClose, IconHamburger, Logo } from "./svgs";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  // handle closing when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      {isMenuOpen && (
        <div className="w-full h-full fixed bg-black opacity-50 z-40 block md:hidden"></div>
      )}
      <div className="w-full fixed bg-white z-50">
        <div className="w-full max-w-[1440px] mx-auto px-10 sm:py-5 smMd:px-5 flex items-center justify-between relative">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex gap-x-9 smMd:gap-x-5 sm:hidden ">
            {links.map((provider, index) => (
              <Link
                className="text-sm smMd:text-xs text-zinc-400 font-medium hover:text-black py-7 border-b-[3px] border-transparent hover:border-limeGreen transition-all duration-200 ease-in-out"
                key={index}
                href={provider.link}
              >
                {provider.name}
              </Link>
            ))}
          </div>
          <div className="sm:hidden">
            <Button />
          </div>
          {isMenuOpen ? (
            <IconClose className="hidden sm:block" onClick={handleMenu} />
          ) : (
            <IconHamburger className="hidden sm:block" onClick={handleMenu} />
          )}
        </div>
        {isMenuOpen && (
          <>
            <div
              ref={menuRef}
              className="w-[350px] h-[300px] bg-white rounded-lg absolute z-10 top-20 right-0 left-0 m-auto flex items-center justify-center block md:hidden"
            >
              <div className="flex flex-col items-center justify-center gap-y-5">
                {links.map((provider, index) => (
                  <Link
                    className="text-lg text-black hover:text-limeGreen font-medium "
                    key={index}
                    href={provider.link}
                  >
                    {provider.name}
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
