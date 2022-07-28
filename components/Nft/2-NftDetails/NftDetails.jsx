import React, { useState } from "react";
import CategoriesSection from "./UI/CategoriesSection";
import DescriptionSection from "./UI/DescriptionSection";
import OffersSection from "./UI/OffersSection";
import PriceHistorySection from "./UI/PriceHistorySection";

const NftDetails = () => {
  const [selected, setSelected] = useState("description");
  return (
    <section className="px-6 lg:px-12 xl:px-28 mt-24 ">
      <CategoriesSection
        selected={selected}
        setSelected={setSelected}
      ></CategoriesSection>
      {selected === "description" && <DescriptionSection></DescriptionSection>}
      {selected === "offers" && <OffersSection></OffersSection>}
      {selected === "price-history" && (
        <PriceHistorySection></PriceHistorySection>
      )}
    </section>
  );
};

export default NftDetails;
