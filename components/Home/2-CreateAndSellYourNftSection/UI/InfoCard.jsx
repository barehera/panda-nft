import React from "react";
import infoIcon from "../../../../assets/info-card-icon.svg";
import Image from "next/image";

const InfoCard = ({ bg, border, title, desc }) => {
  return (
    <article
      className={`${bg ? "bg-card" : "bg-transparent"} ${
        border ? "border border-[rgb(255,255,255,0.5)]" : "border-none"
      } flex flex-col items-center justify-center py-8  lg:py-16 px-2 lg:px-8 rounded-2xl`}
    >
      <div className=" mb-6 lg:mb-10 relative flex items-center justify-center w-20 h-20 rounded-full">
        <Image
          src={infoIcon}
          className="z-10 bg-primary"
          width={24}
          height={24}
        />
        <div className="absolute w-20 h-20 bg-primary rounded-full"></div>
      </div>
      <h5 className="text-white text-base lg:text-2xl font-bold mb-6 text-center">
        {title}
      </h5>
      <p className="text-gray-300 text-xs lg:text-sm text-center">{desc}</p>
    </article>
  );
};

export default InfoCard;
