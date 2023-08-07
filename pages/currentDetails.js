import React from "react";

import Header from "../src/components/Header";
import BoxPlot from "../src/charts/boxPlot";
import ScatterPlot from "../src/charts/scatterPlot";
import { useRouter } from "next/router";

import CheckTool from "../src/components/CheckTool";
import Link from "next/link";

export default function CurrentDetails(props) {
  const data = [];
  const router = useRouter();
  const receivedData = router.query.data;

  return (
    <div>
      <Header index={1} />
      <div className="h-[calc(100vh_-_80px)]">
        <div className="flex items-center justify-center w-full h-full">
          <div style={{ width: "80%", height: "60%" }} className="flex-col">
            {receivedData === "Average Electricity Usage" ? (
              <BoxPlot data={data} />
            ) : (
              <ScatterPlot data={data} />
            )}
            <div className="w-full flex justify-center mt-[20px]">
              <Link
                className="h-[72px] w-[300px] flex items-center justify-center bg-[#D0E9CD] rounded-[25px] cursor-pointer"
                href="/current"
              >
                <h1 className="text-[#185E0E] font-bold text-lg ">Back</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
