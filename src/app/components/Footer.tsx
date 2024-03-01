import React from "react";
import {
  IconFacebook,
  IconInstagram,
  IconPinterest,
  IconTwitter,
  IconYoutube,
  LogoWhite,
} from "./svgs";
import Link from "next/link";
import { Button } from ".";

const Footer = () => {
  type Provider = {
    name: string;
    link: string;
  };

  const links: Provider[] = [
    {
      name: "About us",
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
    {
      name: "Support",
      link: "/",
    },
    {
      name: "Privacy Policy",
      link: "/",
    },
  ];
  return (
    <div className="w-full h-auto bg-darkBlue ">
      <div className="w-full max-w-[1440px] mx-auto h-auto px-10 py-10 gap-y-10 lg:gap-y-0 flex smMd:flex-col items-center justify-between">
        <div className="flex smMd:flex-col  items-center justify-start gap-x-40 gap-y-8 lg:gap-y-0">
          <div className="flex  flex-col smMd:items-center gap-y-8 lg:gap-y-12">
            <LogoWhite />
            <div className="flex gap-x-3">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="no referrer"
              >
                <IconFacebook />
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="no referrer"
              >
                <IconYoutube />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="no referrer"
              >
                <IconTwitter />
              </Link>
              <Link
                href="https://www.pinterest.com"
                target="_blank"
                rel="no referrer"
              >
                <IconPinterest />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="no referrer"
              >
                <IconInstagram />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-3 text-sm text-white">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="smMd:text-center"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end smMd:items-center gap-y-6">
          <Button />
          <div className="text-sm text-zinc-400">
            © Easybank. All Rights Reserved{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
