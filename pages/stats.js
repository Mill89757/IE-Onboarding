import Header from "../src/components/Header";
import CheckTool from "../src/components/CheckTool";
import { useState } from "react";
import FlashMessage from "../src/components/FlashMessage";

const static_prompt = [];

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

export default function Stats() {
  const [electricityBill, setElectricityBill] = useState(0);
  const [gasBill, setGasBill] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const [flashMessage, setFlashMessage] = useState(static_prompt);
  const [isShowFlashMessage, setIsShowFlashMessage] = useState(false);

  return (
    <CheckTool>
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
            <h1 className="text-[#185E0E] text-4xl font-bold italic ">
              Your carbon footprint is:{" "}
            </h1>
            <div className="w-[610px] h-[146px] flex items-center justify-center">
              <h1 className="text-[#185E0E] text-9xl font-bold italic">{}</h1>
            </div>
          </div>
        ) : (
          <div className="h-[380px] w-[480px] flex flex-col items-center">
            {/* input filed */}
            <div className="h-[260px] space-y-[60px]">
              <div>
                <h1 className="text-[#185E0E] text-9xl font-bold sm:text-4xl italic h-[50px] text-center">
                  Carbon Footprint Calculator
                </h1>
              </div>
              <div className="flex h-[40px]">
                <h1 className="text-2xl text-[#185E0E]">Electricity Bill</h1>
                <input
                  className="ml-auto h-[40px] bg-[#D1E1CE] p-[6px] rounded-[4px]"
                  onChange={(e) => {
                    setElectricityBill(e.target.value);
                  }}
                />
              </div>
              <div className="flex h-[40px]">
                <h1 className="text-2xl text-[#185E0E]">Gas Bill</h1>
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
                if (isNumeric(electricityBill) && isNumeric(gasBill)) {
                  console.log(
                    "Your input electricity bill is: " + electricityBill
                  );
                  console.log("Your input gas bill is: " + gasBill);
                } else {
                  setFlashMessage("Your input are not numeric values! ");
                  setIsShowFlashMessage(true);
                }
              }}
            >
              <h1 className="text-[#185E0E] font-bold text-lg ">Submit</h1>
            </div>
          </div>
        )}
      </div>
    </CheckTool>
  );
}
