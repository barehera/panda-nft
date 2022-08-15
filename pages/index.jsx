import Header from "../components/Header/Header";
import HeroSection from "../components/Home/1-HeroSection/HeroSection";
import CreateAndSellYourNftSection from "../components/Home/2-CreateAndSellYourNftSection/CreateAndSellYourNftSection";
import LiveAuctionsSection from "../components/Home/3-LiveAuctionsSection/LiveAuctionsSection";
import FeaturedArtistsSection from "../components/Home/4-FeaturedArtistsSection/FeaturedArtistsSection";
import HotNftsSection from "../components/Home/5-HotNftsSection/HotNftsSection";
import CreateNftCardSection from "../components/Home/6-CreateNftCardSection/CreateNftCardSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/*For background blue blured circles and lines */}
      <div className=" bg-[rgba(30,80,255,0.5)] w-full xl:w-[640px] h-[590px] blur-[700px] absolute top-0 left-0 -z-50"></div>
      <div className=" bg-[rgba(30,80,255,0.5)] w-full xl:w-[640px] h-[590px] blur-[700px] absolute top-[120rem] xl:top-[80rem] right-0 -z-50"></div>
      <div className=" bg-[rgba(30,80,255,0.5)] w-full xl:w-[640px] h-[590px] blur-[700px] absolute top-[240rem] xl:top-[160rem] left-0 -z-50"></div>
      <div className=" bg-[rgba(30,80,255,0.5)] w-full xl:w-[640px] h-[590px] blur-[700px] absolute top-[360rem] xl:top-[240rem] right-0 -z-50"></div>
      <div className="absolute w-full h-full grid grid-cols-5 xl:px-24 -z-50">
        <div className="border-x opacity-10"></div>
        <div className="border-r opacity-10"></div>
        <div className="border-r opacity-10"></div>
        <div className="border-r opacity-10"></div>
        <div className="border-r opacity-10"></div>
      </div>
      {/*For background blue blured circles and lines */}
      <div className="max-w-[110rem] mx-auto">
        <Header></Header>
        <main>
          <HeroSection></HeroSection>
          <CreateAndSellYourNftSection></CreateAndSellYourNftSection>
          <LiveAuctionsSection></LiveAuctionsSection>
          <FeaturedArtistsSection></FeaturedArtistsSection>
          <HotNftsSection></HotNftsSection>
          <CreateNftCardSection></CreateNftCardSection>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}
