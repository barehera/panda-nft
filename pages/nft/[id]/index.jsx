import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header/Header";
import NftInfo from "../../../components/Nft/1-NftInfo/NftInfo";
import NftDetails from "../../../components/Nft/2-NftDetails/Nftdetails";
import AnotherNfts from "../../../components/Nft/3-AnotherNfts/AnotherNfts";
import { nftData } from "../../../data/nftData";

const index = () => {
  const router = useRouter();
  const [singleNftData, setSingleNftData] = useState([]);

  useEffect(() => {
    if (router.query.id) {
      nftData.forEach((nft) => {
        if (nft.id === router.query.id) {
          setSingleNftData(nft);
        }
      });
    }
  }, [router]);

  return (
    <div className="relative overflow-hidden">
      {/*For background blue blured circles and lines */}
      <div className=" bg-[rgba(30,80,255,0.5)] w-full xl:w-[640px] h-[590px] blur-[700px] absolute top-0 left-0 -z-50"></div>
      <div className=" bg-[rgba(30,80,255,0.5)] w-full xl:w-[640px] h-[590px] blur-[700px] absolute top-[120rem] xl:top-[80rem] right-0 -z-50"></div>
      <div className=" bg-[rgba(30,80,255,0.5)] w-full xl:w-[640px] h-[590px] blur-[700px] absolute top-[240rem] xl:top-[160rem] left-0 -z-50"></div>
      <div className="absolute w-full h-full grid grid-cols-5 xl:px-24 -z-50">
        <div className="border-x opacity-10"></div>
        <div className="border-r opacity-10"></div>
        <div className="border-r opacity-10"></div>
        <div className="border-r opacity-10"></div>
        <div className="border-r opacity-10"></div>
      </div>
      {/*For background blue blured circles and lines */}
      <Header></Header>
      <main>
        <NftInfo singleNftData={singleNftData}></NftInfo>
        <NftDetails></NftDetails>
        <AnotherNfts id={singleNftData.id}></AnotherNfts>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default index;
