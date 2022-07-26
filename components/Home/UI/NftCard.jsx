import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import fireIcon from "../../../assets/fire-icon.svg";
const NftCard = ({ data }) => {
  return (
    <article className="bg-card p-6 rounded-2xl">
      {/*Image container */}
      <div className="relative w-full h-80 mb-6">
        <Image src={data.image} layout="fill" className="rounded-2xl" />
        <div className="absolute top-4 right-4 bg-white w-8 h-8 rounded-full flex items-center justify-center">
          {data.liked ? (
            <AiFillHeart className="text-xl text-red-500"></AiFillHeart>
          ) : (
            <AiOutlineHeart className="text-xl text-black"></AiOutlineHeart>
          )}
        </div>
      </div>
      {/*Creator and bid info section */}
      <div className="mb-4 lg:mb-8">
        <div className="flex items-center justify-between mb-2">
          <h6 className="text-white text-sm lg:text-base font-bold">
            {data.name}
          </h6>
          <p className="text-gray-500 text-sm lg:text-base">Current Bid</p>
        </div>
        <div className="flex items-center justify-between">
          <figure className="flex items-center gap-2">
            <div>
              <Image src={data.creatorImage} className="rounded-full" />
            </div>
            <p className="text-white text-xs lg:text-sm">@{data.creatorName}</p>
          </figure>
          <h6 className="text-white text-sm lg:text-base font-bold">
            {data.bid}
          </h6>
        </div>
      </div>
      {/*remaining time and bid button */}
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="flex items-center gap-4 mb-4 xl:mb-0">
          <Image src={fireIcon} />
          <p className="text-white text-sm lg:text-base font-bold ">
            {data.time}
          </p>
        </div>
        <button className="w-full xl:w-auto bg-primary text-sm lg:text-base text-white font-semibold h-8 lg:h-12 px-6 lg:px-12 rounded-2xl shadow-p">
          Bid
        </button>
      </div>
    </article>
  );
};

export default NftCard;
