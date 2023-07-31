import CheckTool from "./CheckTool";
import { useState } from "react";

export default function Header() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="flex w-full  h-[80px] bg-[#C2DDBF]">
        <div className="ml-[24px] w-[460px] flex mr-auto items-center">
          <h1 className="text-white text-9xl font-bold sm:text-4xl italic h-[50px]">
            Energy Saver
          </h1>
        </div>

        <div
          className={`flex w-[180px] items-center justify-center h-full cursor-pointer ${
            index === 0 ? "bg-[#A3C09F]" : "hover:bg-[#A3C09F]"
          }`}
          onClick={console.log("Hi, I am home button")}
        >
          <h1 className="text-[#185E0E] font-bold text-2xl">Home</h1>
        </div>
        <div
          className={`flex w-[180px] items-center justify-center h-full cursor-pointer ${
            index === 1 ? "bg-[#A3C09F]" : "hover:bg-[#A3C09F]"
          }`}
          onClick={console.log("Hi, I am current button")}
        >
          <h1 className="text-[#185E0E] font-bold text-2xl">Current</h1>
        </div>
        <div
          className={`flex w-[180px] items-center justify-center h-full cursor-pointer ${
            index === 2 ? "bg-[#A3C09F]" : "hover:bg-[#A3C09F]"
          }`}
          onClick={console.log("Hi, I am MyStats button")}
        >
          <h1 className="text-[#185E0E] font-bold text-2xl">MyStats</h1>
        </div>
      </div>
    </>
  );
}
