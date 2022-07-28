import React, { useEffect, useState } from "react";
import { nftData } from "../../../data/nftData";
import NftCard from "../../UI/NftCard";

const AnotherNfts = ({ id }) => {
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(
      nftData.filter((nft) => {
        return nft.id !== id;
      })
    );
  }, [id]);
  return (
    <section className="px-6 lg:px-12 xl:px-28 my-24 lg:my-44 ">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-7 lg:mb-14">
        <h3 className="text-white text-2xl lg:text-5xl font-bold mb-4 lg:mb-0">
          Another NFTs
        </h3>
        <button className="text-white border border-primary px-6 lg:px-12 h-12 lg:h-16 rounded-2xl">
          View More
        </button>
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.slice(2, 5).map((data) => (
          <NftCard key={data.id} data={data}></NftCard>
        ))}
      </section>
    </section>
  );
};

export default AnotherNfts;
