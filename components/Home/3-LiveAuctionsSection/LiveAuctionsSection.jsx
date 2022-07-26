import React from "react";
import { liveAuctionsData } from "../../../data/liveAuctionsData";
import NftCard from "../UI/NftCard";

const LiveAuctionsSection = () => {
  return (
    <section className="px-32 mt-36 ">
      <div className="flex items-center justify-between mb-14">
        <h3 className="text-white text-5xl font-bold">Live Auctions</h3>
        <button className="text-white border border-primary px-12 h-16 rounded-2xl">
          View More
        </button>
      </div>
      <section className="grid grid-cols-3 gap-6">
        {liveAuctionsData.map((data) => (
          <NftCard key={data.id} data={data}></NftCard>
        ))}
      </section>
    </section>
  );
};

export default LiveAuctionsSection;
