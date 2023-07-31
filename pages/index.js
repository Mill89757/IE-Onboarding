import React from "react";
import Header from "../src/components/Header";
import CheckTool from "../src/components/CheckTool";
import KnowledgeCard from "../src/components/KnowledgeCard";

const Index = () => {
  return (
    <>
      <div>
        <Header />
        <div className="h-[calc(100vh_-_80px)]">
          <div className="flex items-center justify-center gap-x-[86px] h-full">
            <KnowledgeCard
              title="Sustainability "
              description="What is included in sustainability?"
            />
            <KnowledgeCard
              title="Carbon Footprint "
              description="What is Carbon Footprint?"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
