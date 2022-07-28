import Image from "next/image";
import React from "react";
import priceImage from "../../../../assets/price-history.png";

const PriceHistorySection = () => {
  return (
    <section className=" max-w-5xl mx-auto mt-12">
      {/*TODO - Add real graph here */}
      <div className="relative w-full h-60 lg:h-96">
        <Image src={priceImage} layout="fill" />
      </div>
    </section>
  );
};

export default PriceHistorySection;
