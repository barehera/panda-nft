import React from "react";
import { useRouter } from "next/router";

const HeaderItem = ({ title, path }) => {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(path)}
      className={`${
        router.pathname === path && "border-b-2 border-primary text-white"
      }  hover:text-white transition-all duration-300 ease-out cursor-pointer`}
    >
      {title}
    </li>
  );
};

export default HeaderItem;
