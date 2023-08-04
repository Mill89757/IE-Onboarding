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
              title="Carbon Footprint"
              description="Carbon footprint refers to the total amount of greenhouse gases, primarily carbon dioxide (CO2), and other greenhouse gases emitted directly or indirectly by an individual, organization, product, or event. It is a measure of the impact of human activities on the environment, particularly in terms of their contribution to climate change."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
