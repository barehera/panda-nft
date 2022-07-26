import React from "react";
import { nftData } from "../../../data/nftData";
import NftCard from "../UI/NftCard";

const HotNftsSection = () => {
  return (
    <section className="px-32 mt-36">
      <div className="flex items-center justify-between mb-14">
        <h3 className="text-white text-5xl font-bold">Hot NFTs</h3>
        <div className="flex gap-6 items-center">
          <button className="text-white border border-primary font-medium px-8 py-4  rounded-2xl">
            Music
          </button>
          <button className="text-white border bg-primary shadow-p border-primary font-medium px-8 py-4  rounded-2xl">
            Art
          </button>
          <button className="text-white border border-primary font-medium px-8 py-4  rounded-2xl">
            Sports
          </button>
          <button className="text-white border border-primary font-medium px-8 py-4  rounded-2xl">
            Virtual
          </button>
          <button className="text-white border border-primary font-medium px-8 py-4  rounded-2xl">
            Videos
          </button>
          <button className="text-white border border-primary font-medium px-8 py-4  rounded-2xl">
            More
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-12 mb-14">
        {nftData.slice(3, 9).map((data) => (
          <NftCard key={data.id} data={data}></NftCard>
        ))}
      </div>
      <div className="flex items-center justify-center ">
        <button className="text-white h-14 py-4 px-12 border border-primary rounded-2xl">
          View More
        </button>
      </div>
    </section>
  );
};

export default HotNftsSection;
