import React from "react";
import { featuredArtistsData } from "../../../data/featuredArtistsData";
import ArtistCard from "./UI/ArtistCard";

const FeaturedArtistsSection = () => {
  return (
    <section className="px-32 mt-36">
      <div className="flex items-center justify-between mb-14">
        <h3 className="text-white text-5xl font-bold">Featured Artists</h3>
        <button className="text-white border border-primary px-12 h-16 rounded-2xl">
          View More
        </button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {featuredArtistsData.map((data) => (
          <ArtistCard key={data.id} data={data}></ArtistCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtistsSection;
