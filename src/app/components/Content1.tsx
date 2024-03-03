import React from "react";
import { IconApi, IconBudgeting, IconOnBoarding, IconOnline } from "./svgs";

const Content1 = () => {
  return (
    <div className="w-full h-auto bg-[#f3f4f6] relative z-20 ">
      <div className="w-full max-w-[1440px] mx-auto px-10 h-auto py-20 flex flex-col justify-center items-center lg:items-start">
        <div className="flex flex-col gap-y-5">
          <div className="text-4xl text-darkBlue text-center lg:text-left">
            Why Choose Easybank?
          </div>
          <div className="text-lg text-zinc-500 text-center lg:text-left">
            We levegare Open Banking to turn your bank
            <br className="block lg:hidden sm:hidden" /> account into your
            financial hub. <br className="hidden lg:block" />
            Control your
            <br className="block lg:hidden sm:hidden" /> finances like never
            before
          </div>
        </div>
        <div className="max-w-[450px] lg:max-w-full mt-16 grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-10 lg:gap-y-0">
          <div className="flex flex-col gap-y-8 items-center lg:items-start">
            <IconOnline />
            <div className="text-2xl text-darkBlue font-medium">
              Online Banking
            </div>
            <div className=" text-md text-zinc-500 text-center lg:text-left">
              Our modern web and mobile applications allow
              <br className="block lg:hidden sm:hidden" /> you to keep track of
              your finances wherever you
              <br className="block lg:hidden sm:hidden" /> are in the world.
            </div>
          </div>
          <div className="flex flex-col gap-y-8 items-center lg:items-start">
            <IconBudgeting />
            <div className="text-2xl text-darkBlue font-medium">
              Simple Budgeting
            </div>
            <div className=" text-md text-zinc-500 text-center lg:text-left">
              See exactly where your money goes each month.
              <br className="block lg:hidden sm:hidden" /> Receive notifications
              when you're close to your{" "}
              <br className="block lg:hidden sm:hidden" /> hitting your limits.
            </div>
          </div>
          <div className="flex flex-col gap-y-8 items-center lg:items-start">
            <IconOnBoarding />
            <div className="text-2xl text-darkBlue font-medium">
              Fast Onboarding
            </div>
            <div className=" text-md text-zinc-500 text-center lg:text-left">
              We don't do branches- Open your account in
              <br className="block lg:hidden sm:hidden" /> minutes online and
              start taking control of your{" "}
              <br className="block lg:hidden sm:hidden" />
              finances right away.
            </div>
          </div>
          <div className="flex flex-col gap-y-8 items-center lg:items-start">
            <IconApi />
            <div className="text-2xl text-darkBlue font-medium">Open API</div>
            <div className=" text-md text-zinc-500 text-center lg:text-left">
              Manage your savings, investments. pension, and
              <br className="block lg:hidden sm:hidden" /> much more from one
              account. Tracking your
              <br className="block lg:hidden sm:hidden" /> money has never been
              easier.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
