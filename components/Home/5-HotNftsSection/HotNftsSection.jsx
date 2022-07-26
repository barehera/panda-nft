import React from "react";
import { nftData } from "../../../data/nftData";
import NftCard from "../UI/NftCard";
import FilterItem from "./UI/FilterItem";

const HotNftsSection = () => {
  return (
    <section className="px-32 mt-36">
      <div className="flex items-center justify-between mb-14">
        <h3 className="text-white text-5xl font-bold">Hot NFTs</h3>
        <div className="flex gap-6 items-center">
          <FilterItem title="Music"></FilterItem>
          <FilterItem title="Art" active={true}></FilterItem>
          <FilterItem title="Sports"></FilterItem>
          <FilterItem title="Virtual"></FilterItem>
          <FilterItem title="Videos"></FilterItem>
          <FilterItem title="More"></FilterItem>
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
