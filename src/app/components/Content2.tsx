import React from "react";
import Image from "next/image";
import Link from "next/link";
const Content2 = () => {
  type Article = {
    img: string;
    name: string;
    title: string;
    desc: string;
  };

  const articles: Article[] = [
    {
      img: "/image-currency.jpg",
      name: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      desc: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      img: "/image-restaurant.jpg",
      name: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      img: "/image-plane.jpg",
      name: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      img: "/image-confetti.jpg",
      name: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
    },
  ];
  return (
    <div className="w-full h-auto bg-[#fafafa] ">
      <div className="w-full max-w-[1440px] mx-auto px-10 sm:px-0 py-20">
        <div className="flex flex-col justify-center items-center lg:items-start gap-y-5">
          <div className="text-4xl text-darkBlue">Latest Articles</div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-8 lg:gap-y-0">
            {articles.map((article, index) => (
              <Link
                href="/"
                className="w-[230px]  smMd:w-[350px] md:w-[400px] lg:w-[240px] xl:w-[280px] h-auto rounded-md flex flex-col bg-white hover:shadow-xl"
                key={index}
              >
                <Image
                  src={article.img}
                  width={400}
                  height={400}
                  alt="currency"
                  className="w-full rounded-t-md h-[250px] lg:h-[200px] object-cover"
                />
                <div className="p-10 lg:p-5 flex flex-col gap-y-2">
                  <div className="text-xs text-zinc-400 font-normal">
                    By {article.name}
                  </div>
                  <div className="text-md text-darkBlue font-medium">
                    {article.title}
                  </div>
                  <div className="text-sm text-zinc-400">{article.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
