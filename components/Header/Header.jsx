import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import logo from "../../assets/logo.png";
import HeaderItem from "./UI/HeaderItem";

const Header = () => {
  const router = useRouter();
  return (
    <header className="text-white px-6 lg:px-12 xl:px-28 pt-10 flex items-center justify-between bg-transparent z-10">
      <div onClick={() => router.push("/")} className="cursor-pointer">
        <Image src={logo}></Image>
      </div>
      <nav className="hidden lg:block">
        <ul className="text-gray-500 font-semibold flex gap-8 ">
          <HeaderItem path="/" title="Home"></HeaderItem>
          <HeaderItem path="" title="Discover"></HeaderItem>
          <HeaderItem path="" title="Docs"></HeaderItem>
          <HeaderItem path="" title="Blog"></HeaderItem>
          <HeaderItem path="" title="About Us"></HeaderItem>
          <HeaderItem path="" title="Contact Us"></HeaderItem>
        </ul>
      </nav>
      <button className="border border-primary text-sm lg:text-base px-4 lg:px-8 h-14 rounded-lg">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
