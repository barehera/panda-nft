import React from "react";

const CategoriesSection = ({ selected, setSelected }) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto">
      <button
        className={`${
          selected === "description"
            ? "bg-primary text-white "
            : "bg-transparent text-gray-500"
        } h-10 lg:h-14 px-12 rounded-2xl font-medium text-sm lg:text-base  `}
        onClick={() => setSelected("description")}
      >
        Description
      </button>
      <button
        className={`${
          selected === "offers"
            ? "bg-primary text-white "
            : "bg-transparent text-gray-500"
        } h-10 lg:h-14 px-12 rounded-2xl font-medium text-sm lg:text-base  `}
        onClick={() => setSelected("offers")}
      >
        Offers
      </button>
      <button
        className={`${
          selected === "price-history"
            ? "bg-primary text-white "
            : "bg-transparent text-gray-500"
        } h-10 lg:h-14 px-12 rounded-2xl font-medium text-sm lg:text-base  `}
        onClick={() => setSelected("price-history")}
      >
        Price History
      </button>
    </section>
  );
};

export default CategoriesSection;
