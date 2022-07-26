import React from "react";

const FilterItem = ({ title, active }) => {
  return (
    <button
      className={`${
        active && "bg-primary shadow-p"
      } text-white border border-primary font-medium px-8 py-4  rounded-2xl`}
    >
      {title}
    </button>
  );
};

export default FilterItem;
