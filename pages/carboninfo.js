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
              description={
                <>
                  <strong>Carbon Footprint</strong> represents the total emissions of greenhouse gases. This includes both direct and indirect emissions. 
                  <br/><br/>
                  The primary contributor is carbon dioxide (CO2), but other greenhouse gases play a part.
                  <br/><br/>
                  These emissions can come from individuals, organizations, products, or events. Their importance lies in gauging human impact on the environment, especially relating to climate change.
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;