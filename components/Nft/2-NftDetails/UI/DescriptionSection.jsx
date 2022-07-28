import React from "react";

const DescriptionSection = () => {
  return (
    <section className=" max-w-5xl mx-auto mt-12">
      <p className="text-gray-200 text-sm lg:text-base lg:w-2/3">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <ul className="mt-6 flex flex-col gap-4 lg:w-1/3">
        <li className="flex items-center justify-between">
          <h5 className="text-white text-sm lg:text-base font-bold">
            Contract Address
          </h5>
          <p className="text-gray-500 text-sm lg:text-base">0x49cf...a28b</p>
        </li>
        <li className="flex items-center justify-between">
          <h5 className="text-white text-sm lg:text-base font-bold">
            Token ID
          </h5>
          <p className="text-gray-500 text-sm lg:text-base">4133</p>
        </li>
        <li className="flex items-center justify-between">
          <h5 className="text-white text-sm lg:text-base font-bold">
            Token Standard
          </h5>
          <p className="text-gray-500 text-sm lg:text-base">ERC-721</p>
        </li>
        <li className="flex items-center justify-between">
          <h5 className="text-white text-sm lg:text-base font-bold">
            Blockchain
          </h5>
          <p className="text-gray-500 text-sm lg:text-base">Ethereum</p>
        </li>
      </ul>
    </section>
  );
};

export default DescriptionSection;
