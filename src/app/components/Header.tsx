import React from "react";
import { IntroBgDesktop } from "./svgs";
import { Button } from ".";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="w-full h-[680px] pt-10 bg-[#fafafa]">
        <div className="pl-32 w-full max-w-[1440px] mx-auto flex flex-col justify-start relative">
          <Image
            src="/image-mockups-crop.png"
            width={600}
            height={600}
            alt="."
            className="absolute z-20 right-0 top-[-70px]"
          />
          <div className="w-full h-[680px] pb-10 relative overflow-hidden ">
            <IntroBgDesktop className="bottom-[-120px] right-[-470px] absolute z-0 " />
            <div className="h-full flex items-center relative z-10 ">
              <div className="flex flex-col gap-y-5">
                <div className="text-6xl text-darkBlue leading-[1.10]">
                  Next generation <br />
                  digital banking
                </div>
                <div className="text-xl text-left text-zinc-400">
                  Take your financial life online. Your Easybank account
                  <br /> will be a one-stop-shop for spending, saving,
                  <br /> budgeting, investing. and much more
                </div>
                <div className="mt-5">
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
