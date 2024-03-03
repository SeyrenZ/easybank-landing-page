import React from "react";
import { IntroBgDesktop, IntroBgDesktop2, IntroBgMobile } from "./svgs";
import { Button } from ".";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-[1000px] sm:h-[800px] lg:h-[680px] bg-[#fafafa] relative z-30">
      <div className="w-full max-w-[1440px] pl-10 smMd:pl-0 mx-auto flex flex-col justify-start items-center relative gap-y-8 lg:gap-y-0">
        <div className="w-full flex justify-center lg:hidden relative overflow-hidden">
          <IntroBgMobile className="absolute z-0 w-full md:hidden" />
          <IntroBgDesktop2 className="absolute z-0 bottom-[-200px]  left-0 sm:hidden" />
          <div className="relative z-10">
            <Image
              src="/image-mockups-topcrop.png"
              width={600}
              height={600}
              alt="."
            />
          </div>
        </div>
        <Image
          src="/image-mockups.png"
          width={750}
          height={750}
          alt="."
          className=" absolute z-20 right-[-250px] xl:right-[-150px] top-[-70px] smMd:hidden"
        />
        <div className="w-full h-[680px] pb-10 relative">
          <div className="h-full flex items-center smMd:items-start smMd:justify-center relative">
            <IntroBgDesktop className="bottom-[-120px] right-[-600px] xl:right-[-470px] absolute  block smMd:hidden" />
            <div className="flex flex-col gap-y-5 smMd:items-center">
              <div className="text-5xl xl:text-6xl text-darkBlue leading-[1.10] text-center lg:text-left">
                Next generation <br />
                digital banking
              </div>
              <div className="text-md xl:text-xl text-zinc-400  text-center lg:text-left">
                Take your financial life online. Your Easybank{" "}
                <br className="block xl:hidden" /> account
                <br className="hidden xl:block" /> will be a one-stop-shop for
                spending, <br className="hidden sm:block" />
                saving,
                <br className="sm:hidden" /> budgeting, investing. and much more
              </div>
              <div className="mt-5">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
