import Image from "next/image";
import React from "react";
import eth from "../../../../assets/eth-icon.svg";

const ArtistCard = ({ data }) => {
  return (
    <article className="bg-card flex flex-col items-center justify-center rounded-2xl">
      <div className="relative mb-16 w-full h-52">
        <Image src={data.bgImage} className="rounded-t-2xl" layout="fill" />
        <div className="absolute -bottom-12 flex items-center justify-center w-full">
          <Image src={data.image} />
        </div>
      </div>
      <div className="pb-6 flex flex-col items-center justify-center">
        <h5 className="text-white text-2xl font-bold mb-2">{data.name}</h5>
        <div className="flex items-center gap-2">
          <Image src={eth} />
          <p className="text-white text-base font-bold">{data.quantity}</p>
        </div>
      </div>
    </article>
  );
};

export default ArtistCard;
