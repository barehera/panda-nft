import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="text-white px-32 pt-10 flex items-center justify-between bg-transparent z-10">
      <div>
        <Image src={logo}></Image>
      </div>
      <nav>
        <ul className="text-gray-500 font-semibold flex gap-8 ">
          <li className="text-white">Home</li>
          <li className="hover:text-white transition-all duration-300 ease-out cursor-pointer">
            Discover
          </li>
          <li className="hover:text-white transition-all duration-300 ease-out cursor-pointer">
            Docs
          </li>
          <li className="hover:text-white transition-all duration-300 ease-out cursor-pointer">
            Blog
          </li>
          <li className="hover:text-white transition-all duration-300 ease-out cursor-pointer">
            About Us
          </li>
          <li className="hover:text-white transition-all duration-300 ease-out cursor-pointer">
            Contact Us
          </li>
        </ul>
      </nav>
      <button className="border border-primary w-40 h-14 rounded-lg">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
