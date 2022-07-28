import React from "react";
import Image from "next/image";

const OfferCard = ({ offer }) => {
  return (
    <article className="flex items-center gap-4">
      <Image src={offer.image} width={64} height={64} />
      <div className="flex-1">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
          <h4 className="text-white text-sm lg:text-base font-bold">
            {offer.name}
          </h4>
          <p className="text-gray-600 text-xs">place a bid</p>
        </div>
        <p className="text-gray-600 text-xs">{offer.date}</p>
      </div>
      <div className="flex flex-col items-end justify-end">
        <p className="text-white text-sm lg:text-base font-bold">{offer.bid}</p>
        <p className="text-gray-600 text-xs">= $12.247</p>
      </div>
    </article>
  );
};

export default OfferCard;
