import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="px-32  relative">
      {/*This is background blured circles */}
      <div className=" bg-[rgba(30,80,255,1)] w-[460px] h-[200px] blur-[400px] absolute bottom-0 left-0 -z-50"></div>

      <footer className="grid grid-cols-5 py-16 gap-20 ">
        <section className="col-span-2 ">
          <div className="mb-6">
            <Image src={logo} />
          </div>
          <p className="text-gray-500 text-base mb-28">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <p className="text-white text-sm">2021 All Right Reserved</p>
        </section>
        <section>
          <h5 className="text-white text-2xl font-bold mb-6">Resources</h5>
          <div className="text-gray-500 flex flex-col gap-4">
            <p>Help Center</p>
            <p>Platform Status</p>
            <p>Partners</p>
            <p>Gas-Free Marketplace</p>
            <p>Blog</p>
          </div>
        </section>
        <section>
          <h5 className="text-white text-2xl font-bold mb-6">Company</h5>
          <div className="text-gray-500 flex flex-col gap-4">
            <p>Our Team</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Career</p>
          </div>
        </section>
        <section>
          <h5 className="text-white text-2xl font-bold mb-6">Contact</h5>
          <div className="text-gray-500 flex flex-col gap-4">
            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            <div className="text-white flex items-center text-4xl gap-7">
              <AiOutlineFacebook></AiOutlineFacebook>
              <AiOutlineTwitter></AiOutlineTwitter>
              <AiOutlineInstagram></AiOutlineInstagram>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
