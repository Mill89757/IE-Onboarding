import CheckTool from "./CheckTool";
import { useState } from "react";
import Link from "next/link";

export default function Header(props) {
  const index = props.index;

  return (
    <>
      <div className="flex w-full  h-[80px] bg-[#C2DDBF]">
        <div className="ml-[24px] w-[460px] flex mr-auto items-center">
          <h1 className="text-white text-9xl font-bold sm:text-4xl italic h-[50px]">
            Energy Saver
          </h1>
        </div>

        <Link
          className={`flex w-[180px] items-center justify-center h-full cursor-pointer ${
            index === 0 ? "bg-[#A3C09F]" : "hover:bg-[#A3C09F]"
          }`}
          href="/"
        >
          <h1 className="text-[#185E0E] font-bold text-2xl">Home</h1>
        </Link>
        <Link
          className={`flex w-[180px] items-center justify-center h-full cursor-pointer ${
            index === 1 ? "bg-[#A3C09F]" : "hover:bg-[#A3C09F]"
          }`}
          href={"/current"}
        >
          <h1 className="text-[#185E0E] font-bold text-2xl">Current</h1>
        </Link>
        <Link
          className={`flex w-[180px] items-center justify-center h-full cursor-pointer ${
            index === 2 ? "bg-[#A3C09F]" : "hover:bg-[#A3C09F]"
          }`}
          href={"/stats"}
        >
          <h1 className="text-[#185E0E] font-bold text-2xl">MyStats</h1>
        </Link>
      </div>
    </>
  );
}
