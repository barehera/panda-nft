import React from "react";
import Image from "next/image";
import hero1 from "../../../assets/hero-1.png";
import hero2 from "../../../assets/hero-2.png";
import hero3 from "../../../assets/hero-3.png";
import heroLogos from "../../../assets/hero-logos.png";

const HeroSection = () => {
  return (
    <section className="mt-24 lg:mt-44">
      <article className="grid lg:grid-cols-2 gap-12 px-6 lg:px-12 xl:px-28">
        <h2 className="text-2xl lg:text-6xl text-white font-bold text-center lg:text-left">
          Discover a New Era of Crypto Currency
        </h2>
        <div className="text-white flex flex-col justify-center lg:justify-between items-center lg:items-start">
          <p className="text-gray-500 text-center lg:text-start text-sm lg:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="text-white font-semibold mt-4 lg:mt-0">
            Get Started
          </button>
        </div>
      </article>
      <div className="flex gap-2 lg:gap-6 mt-24 w-full mb-12 lg:mb-32">
        <div className="relative w-full h-[120px] md:h-[200px] lg:h-[300px]">
          <Image src={hero1} className="rounded-r-3xl" layout="fill" />
        </div>
        <div className="relative w-full h-[120px] md:h-[200px] lg:h-[300px]">
          <Image src={hero2} className="rounded-3xl" layout="fill" />
        </div>
        <div className="relative w-full h-[120px] md:h-[200px] lg:h-[300px]">
          <Image src={hero3} className="rounded-l-3xl " layout="fill" />
        </div>
      </div>
      <div className="w-full items-center justify-center flex px-6">
        <Image src={heroLogos} />
      </div>
    </section>
  );
};

export default HeroSection;
