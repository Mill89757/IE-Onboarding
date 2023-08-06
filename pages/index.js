import React, { useState } from "react";
import Header from "../src/components/Header";
import CheckTool from "../src/components/CheckTool";
import EntranceCard from "../src/components/EntranceCard";

const Index = () => {
  const [showProtectedContent, setShowProtectedContent] = useState(false);
  const [password, setPassword] = useState("panda");

  const showContent = () => {
    const enteredPassword = prompt("Enter the password:");
    if (enteredPassword === password) {
      setShowProtectedContent(true);
    } else {
      alert("Incorrect password. Access denied.");
    }
  };

  return (
    <>
      {showProtectedContent ? (
        <div>
          <Header index={0} />
          <div className="h-[calc(100vh_-_80px)]">
            <div className="flex items-center justify-center gap-x-[86px] h-full">
              <EntranceCard
                title="Sustainability "
                description="What is included in sustainability?"
                link="/susinfo"
              />
              <EntranceCard
                title="Carbon Footprint "
                description="What is Carbond Footprint?"
                link="/carboninfo"
              />
            </div>
            )
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-screen bg-black justify-center items-center">
          <div className="w-[200px] h-[44px] flex items-center justify-center bg-white rounded-md">
            <button onClick={showContent}>Enter Password</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
