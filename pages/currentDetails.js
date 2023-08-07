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
    <>
      <Header index={1} />
      <div className="h-[calc(100vh_-_80px)]">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex-col w-4/5">
            <div
              style={{ width: "80%", height: "80%" }}
              className="flex items-center justify-center"
            >
              <div className="">
                <label className="text-gray-600 font-medium mr-2">
                  Emission Source:
                </label>
                <select
                  // value={dataSource}
                  onChange={(e) => setDataSource(e.target.value)}
                  className="py-2 px-4 border rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="gas">Gas</option>
                  <option value="electricity">Electricity</option>
                </select>
              </div>
            </div>
            <div className="h-[400px]">
              {receivedData === "Average Electricity Usage" ? (
                <BoxPlot data={data} />
              ) : (
                <ScatterPlot data={data} />
              )}
            </div>
            <div className="w-full flex justify-center mt-[10px]">
              <Link
                className="h-[44px] w-[120px] flex items-center justify-center bg-[#D0E9CD] rounded-[25px] cursor-pointer"
                href="/current"
              >
                <h1 className="text-[#185E0E] font-bold text-lg ">Back</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
