import React from "react";
import { offerData } from "../../../../data/offerData";
import OfferCard from "./OfferCard";

const OffersSection = () => {
  return (
    <section className="px-6 max-w-5xl mx-auto mt-12 text-white grid lg:grid-cols-2 gap-8 h-80 lg:h-48 overflow-y-auto scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-white">
      {offerData.map((offer) => (
        <OfferCard offer={offer} key={offer.id}></OfferCard>
      ))}
    </section>
  );
};

export default OffersSection;
