import React from "react";
import Image from "next/image";
import ownerImage from "../../../assets/owner.png";
import fireIcon from "../../../assets/fire-icon.svg";

const NftInfo = ({ singleNftData }) => {
  return (
    <section className="px-6 lg:px-12 xl:px-28 mt-24">
      {/*Nft Image */}
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          {singleNftData.image ? (
            <div className="relative flex items-center justify-center w-full h-[350px] lg:h-[510px]">
              <Image
                src={singleNftData.image}
                layout="fill"
                className="rounded-2xl"
              />
              <div className="absolute bottom-6 bg-card bg-opacity-80 px-12 py-2 lg:px-24 lg:py-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <Image src={fireIcon} />
                  <p className="text-white text-sm lg:text-base font-bold">
                    {singleNftData.time}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>loading</div>
          )}
        </div>
        <div className="flex flex-col justify-between gap-6 lg:gap-0">
          {/*Nft Name */}
          <h2 className="text-white text-2xl  lg:text-5xl font-bold">
            {singleNftData.name}
          </h2>
          {/*Nft Description */}
          <p className="text-gray-500 text-sm lg:text-base ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            placeat doloribus deserunt voluptatibus perspiciatis adipisci fuga
            asperiores cumque dolore accusamus.
          </p>
          {/*Price Bid - Lost Bid Section */}
          <div className="flex flex-row items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm lg:text-base">Price Bid</p>
              <p className="text-white text-base lg:text-2xl font-bold">
                {singleNftData.bid}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm lg:text-base">Price Bid</p>
              <p className="text-white text-base lg:text-2xl font-bold">
                2.44 eTH
              </p>
            </div>
          </div>
          {/*Creator and Owner Section */}
          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:items-center justify-between min-h-24 bg-card rounded-2xl p-4 ">
            <div className="flex items-center gap-4">
              <Image
                src={singleNftData.creatorImage}
                width="52px"
                height="52px"
                className="rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h6 className="text-gray-600 text-sm lg:text-base">Creator</h6>
                <p className="text-white text-sm lg:text-base font-medium">
                  {singleNftData.creatorName}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={ownerImage}
                width="52px"
                height="52px"
                className="rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h6 className="text-gray-600 text-sm lg:text-base">Owner</h6>
                <p className="text-white text-sm lg:text-base font-medium">
                  NftKing
                </p>
              </div>
            </div>
          </div>
          {/*button Section */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-between">
            <button className="h-12 lg:h-16 w-full text-white bg-[rgba(30,80,255,0.15)] border border-primary rounded-2xl">
              Purchase Now
            </button>
            <button className="h-12 lg:h-16 w-full text-white bg-primary rounded-2xl">
              Place A Bid
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftInfo;
