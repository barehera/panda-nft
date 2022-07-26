import React from "react";
import { featuredArtistsData } from "../../../data/featuredArtistsData";
import ArtistCard from "./UI/ArtistCard";

const FeaturedArtistsSection = () => {
  return (
    <section className=" px-6 lg:px-12 xl:px-28 mt-24 lg:mt-44">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-14">
        <h3 className="text-white text-2xl lg:text-5xl font-bold mb-4 lg:mb-0">
          Featured Artists
        </h3>
        <button className="text-white border text-sm lg:text-base border-primary px-6 lg:px-12 h-12 lg:h-16 rounded-2xl">
          View More
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredArtistsData.map((data) => (
          <ArtistCard key={data.id} data={data}></ArtistCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtistsSection;
