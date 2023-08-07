import Header from "../src/components/Header";
import CheckTool from "../src/components/CheckTool";
import { useState } from "react";
import FlashMessage from "../src/components/FlashMessage";
import Link from "next/link";

const static_result = [
  "Congratulations! you have a minimal impact on the environment in terms of carbon dioxide emissions.",
];

function isFloatWithTwoDecimalPlaces(str) {
  return /^\d+(\.\d{1,2})?$/.test(str);
}

function isPositiveNumber(str) {
  const num = parseFloat(str);
  return !isNaN(num) && num > 0;
}

export default function Stats() {
  const [electricityBill, setElectricityBill] = useState(0);
  const [gasBill, setGasBill] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const [flashMessage, setFlashMessage] = useState("");
  const [isShowFlashMessage, setIsShowFlashMessage] = useState(false);

  return (
    <>
      {isShowFlashMessage && (
        <FlashMessage
          isShowFlashMessage={isShowFlashMessage}
          flashMessage={flashMessage}
          setIsShowFlashMessage={setIsShowFlashMessage}
        />
      )}
      <Header index={2} />
      <div className="w-full h-[calc(100vh_-_80px)] flex items-center justify-center">
        {isCalculated ? (
          <div className="h-[586px] w-[620px] flex flex-col items-center">
            {/* calculated result */}
            <h1 className="text-[#185E0E] text-4xl font-medium italic w-full">
              Your carbon footprint is:
            </h1>
            <div className="mt-[24px] w-[610px] h-[146px] flex items-center justify-center bg-[#F7F9F7] rounded-[15px]">
              <h1 className="text-[#185E0E] text-8xl font-bold italic">
                {carbonFootprint}
              </h1>
            </div>

            {/* static recommendation */}
            <h1 className="text-[#185E0E] text-4xl font-medium italic pt-[42px] w-full">
              Result:
            </h1>
            <div className="w-[610px] h-[146px] flex items-center justify-center bg-[#F7F9F7] rounded-[15px] mt-[42px]">
              <h1 className="text-[#185E0E] text-xl font-normal italic p-[16px]">
                {static_result[0]}
              </h1>
            </div>

            {/* action button */}
            <div className="w-full flex mt-[42px]">
              <Link
                className="w-[290px] h-[72px] mr-auto flex items-center justify-center rounded-[25px] bg-[#C7DCC4]"
                href="/compare"
              >
                <h1 className="text-[#185E0E] text-xl font-semibold">
                  Compare
                </h1>
              </Link>
              <div
                className="w-[290px] h-[72px] flex items-center justify-center rounded-[25px] bg-[#C7DCC4]"
                onClick={() => {
                  setIsCalculated(false);
                }}
              >
                <h1 className="text-[#185E0E] text-xl font-semibold">Back</h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[460px] w-[560px] flex flex-col items-center bg-[#F7F9F7] p-[40px] rounded-xl">
            {/* input filed */}
            <div className="h-[260px] space-y-[60px]">
              <div>
                <h1 className="text-[#185E0E] text-9xl font-bold sm:text-4xl italic h-[50px] text-center">
                  Carbon Footprint Calculator
                </h1>
              </div>
              <div className="flex h-[40px]">
                <h1 className="text-2xl text-[#185E0E]">Electricity Usage</h1>
                <input
                  className="ml-auto h-[40px] bg-[#D1E1CE] p-[6px] rounded-[4px]"
                  onChange={(e) => {
                    setElectricityBill(e.target.value);
                  }}
                />
              </div>
              <div className="flex h-[40px]">
                <h1 className="text-2xl text-[#185E0E]">Gas Usage</h1>
                <input
                  className="ml-auto h-[40px] bg-[#D1E1CE] p-[6px] rounded-[4px]"
                  onChange={(e) => {
                    setGasBill(e.target.value);
                  }}
                />
              </div>
            </div>

            <div
              className="h-[72px] w-[300px] flex items-center justify-center bg-[#D0E9CD] rounded-[25px] mt-auto cursor-pointer"
              onClick={() => {
                const isValidElectricityBill =
                  isFloatWithTwoDecimalPlaces(electricityBill) &&
                  isPositiveNumber(electricityBill);
                const isValidGasBill =
                  isFloatWithTwoDecimalPlaces(gasBill) &&
                  isPositiveNumber(gasBill);
                if (isValidElectricityBill && isValidGasBill) {
                  //   console.log(
                  //     "Your input electricity bill is: " + electricityBill
                  //   );
                  //   console.log("Your input gas bill is: " + gasBill);
                  setCarbonFootprint(1000);
                  setIsCalculated(true);
                } else {
                  setFlashMessage(
                    "Only accept positive number or float number with 2 decimal places"
                  );
                  setIsShowFlashMessage(true);
                }
              }}
            >
              <h1 className="text-[#185E0E] font-bold text-lg ">Submit</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
