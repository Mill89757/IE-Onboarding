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
      <div>
        <Header index={0} />
        <div className="h-[calc(100vh_-_80px)]">
          {showProtectedContent ? (
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
          ) : (
            <div className="flex items-center justify-center h-full">
              <button onClick={showContent}>Enter Password</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
