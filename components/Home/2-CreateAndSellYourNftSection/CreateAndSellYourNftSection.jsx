import React from "react";
import infoIcon from "../../../assets/info-card-icon.svg";
import Image from "next/image";

const CreateAndSellYourNftSection = () => {
  return (
    <section className="px-32 mt-36 ">
      <h3 className="text-white text-5xl font-bold mb-14 text-center">
        Create and sell your NFTs
      </h3>
      <div className="grid grid-cols-3 gap-6">
        <article className="flex flex-col items-center justify-center py-14 px-8 bg-card rounded-2xl">
          <div className="mb-16 relative flex items-center justify-center">
            <Image src={infoIcon} className="z-10 bg-primary" />
            <div className="absolute w-20 h-20 bg-primary rounded-full"></div>
          </div>
          <h5 className="text-white text-2xl font-bold mb-6 text-center">
            Set up your wallet
          </h5>
          <p className="text-gray-300 text-sm text-center">
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </article>

        <article className="flex flex-col items-center justify-center py-20 px-8 bg-transparent rounded-2xl border border-[rgb(255,255,255,0.5)]">
          <div className="mb-16 relative flex items-center justify-center">
            <Image src={infoIcon} className="z-10 bg-primary" />
            <div className="absolute w-20 h-20 bg-primary rounded-full"></div>
          </div>
          <h5 className="text-white text-2xl font-bold mb-6 text-center">
            Add your NFTs
          </h5>
          <p className="text-gray-300 text-sm text-center">
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </article>

        <article className="flex flex-col items-center justify-center py-14 px-8 bg-card  rounded-2xl">
          <div className="mb-16 relative flex items-center justify-center">
            <Image src={infoIcon} className="z-10 bg-primary" />
            <div className="absolute w-20 h-20 bg-primary rounded-full"></div>
          </div>
          <h5 className="text-white text-2xl font-bold mb-6 text-center ">
            List them for sale
          </h5>
          <p className="text-gray-300 text-sm text-center">
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </p>
        </article>
      </div>
    </section>
  );
};

export default CreateAndSellYourNftSection;
