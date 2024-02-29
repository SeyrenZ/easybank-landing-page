import React from "react";
import { IconApi, IconBudgeting, IconOnBoarding, IconOnline } from "./svgs";

const Content1 = () => {
  return (
    <div className="w-full h-auto bg-[#f3f4f6] relative z-10">
      <div className="w-full max-w-[1440px] mx-auto h-auto px-32 py-20 flex flex-col justify-center items-start">
        <div className="flex flex-col gap-y-5">
          <div className="text-4xl text-darkBlue">Why Choose Easybank?</div>
          <div className="text-lg text-zinc-500">
            We levegare Open Banking to turn your bank account into your
            financial hub. <br />
            Control your finances like never before
          </div>
        </div>
        <div className="mt-16 grid grid-cols-4 gap-x-10 ">
          <div className="flex flex-col gap-y-8 items-start justify-center">
            <IconOnline />
            <div className="text-2xl text-darkBlue font-medium">
              Online Banking
            </div>
            <div className="text-md text-zinc-500">
              Our modern web and mobile
              <br /> applications allow you to keep
              <br /> track of your finances wherever you
              <br /> are in the world.
            </div>
          </div>
          <div className="flex flex-col gap-y-8 items-start justify-center">
            <IconBudgeting />
            <div className="text-2xl text-darkBlue font-medium">
              Simple Budgeting
            </div>
            <div className="text-md text-zinc-500">
              See exactly where your money
              <br /> goes each month. Receive
              <br />
              notifications when you're close to
              <br /> hitting your limits.
            </div>
          </div>
          <div className="flex flex-col gap-y-8 items-start justify-center">
            <IconOnBoarding />
            <div className="text-2xl text-darkBlue font-medium">
              Fast Onboarding
            </div>
            <div className="text-md text-zinc-500">
              We don't do branches- Open your
              <br /> account in minutes online and start
              <br /> taking control of your finances
              <br /> right away.
            </div>
          </div>
          <div className="flex flex-col gap-y-8 items-start justify-center">
            <IconApi />
            <div className="text-2xl text-darkBlue font-medium">Open API</div>
            <div className="text-md text-zinc-500">
              Manage your savings, investments.
              <br /> pension, and much more from one
              <br /> account. Tracking your money has
              <br /> never been easier.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
