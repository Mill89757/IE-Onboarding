import React from "react";
import Header from "../src/components/Header";
import CheckTool from "../src/components/CheckTool";
import EntranceCard from "../src/components/EntranceCard";

const Index = () => {
  return (
    <>
      <div>
        <Header index={0} />
        <div className="h-[calc(100vh_-_80px)]">
          <div className="flex items-center justify-center gap-x-[86px] h-full">
            <EntranceCard
              title="Sustainability "
              description="What is included in sustainability?"
              link="/"
            />
            <EntranceCard
              title="Carbon Footprint "
              description="What is Carbond Footprint?"
              link="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
