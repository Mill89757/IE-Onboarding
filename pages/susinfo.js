import React from "react";
import Header from "../src/components/Header";
import CheckTool from "../src/components/CheckTool";
import InfoCard from "../src/components/InfoCard";

const Index = () => {
  return (
    <>
      <div>
        <Header />
        <div className="h-[calc(100vh_-_80px)]">
          <div className="flex items-center justify-center gap-x-[86px] h-full">
            <InfoCard
              title="Sustainability "
              description="Sustainability includes Renewable Energy, Waste Management, Public Transportation, Conservation and Biodiversity, Sustainable Building Practices and Environmental Education and Awareness"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
