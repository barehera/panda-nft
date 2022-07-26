import React from "react";

const FilterItem = ({ title, active }) => {
  return (
    <button
      className={`${
        active && "bg-primary shadow-p"
      } text-white border border-primary text-sm lg:text-base font-medium px-4 lg:px-8 py-2 lg:py-4  rounded-2xl`}
    >
      {title}
    </button>
  );
};

export default FilterItem;
