import React from "react";
import infoIcon from "../../../assets/info-card-icon.svg";
import Image from "next/image";
import InfoCard from "./UI/InfoCard";

const CreateAndSellYourNftSection = () => {
  return (
    <section className=" px-6 lg:px-12 xl:px-28 mt-24 lg:mt-44 ">
      <h3 className="text-white text-2xl lg:text-5xl font-bold mb-14 text-center">
        Create and sell your NFTs
      </h3>
      <div className="grid lg:grid-cols-3 gap-6">
        <InfoCard
          title="Set up your wallet"
          desc="Once you’ve set up your wallet of choice, connect it to OpenSea by
        clicking the wallet icon in the top right corner."
          border={false}
          bg={true}
        ></InfoCard>
        <InfoCard
          title="Add your NFTs"
          desc="Once you’ve set up your wallet of choice, connect it to OpenSea by
        clicking the wallet icon in the top right corner."
          border={true}
          bg={false}
        ></InfoCard>
        <InfoCard
          title="List them for sale"
          desc={
            "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
          }
          border={false}
          bg={true}
        ></InfoCard>
      </div>
    </section>
  );
};

export default CreateAndSellYourNftSection;
