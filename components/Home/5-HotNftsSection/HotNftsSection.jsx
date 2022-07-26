import React from "react";
import { nftData } from "../../../data/nftData";
import NftCard from "../UI/NftCard";
import FilterItem from "./UI/FilterItem";

const HotNftsSection = () => {
  return (
    <section className="px-6 lg:px-12 xl:px-28 mt-36">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-14">
        <h3 className="text-white text-2xl lg:text-5xl font-bold mb-4 lg:mb-0 text-center lg:text-left">
          Hot NFTs
        </h3>
        <div className="flex gap-2 lg:gap-6 items-center overflow-y-auto scrollbar-thin  scrollbar-thumb-primary  pb-6 sm:justify-center">
          <FilterItem title="Music"></FilterItem>
          <FilterItem title="Art" active={true}></FilterItem>
          <FilterItem title="Sports"></FilterItem>
          <FilterItem title="Virtual"></FilterItem>
          <FilterItem title="Videos"></FilterItem>
          <FilterItem title="More"></FilterItem>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-12 mb-14">
        {nftData.slice(3, 9).map((data) => (
          <NftCard key={data.id} data={data}></NftCard>
        ))}
      </div>
      <div className="flex items-center justify-center ">
        <button className="text-white text-sm lg:text-base h-12 lg:h-14 px-6 lg:px-12 border border-primary rounded-2xl">
          View More
        </button>
      </div>
    </section>
  );
};

export default HotNftsSection;
