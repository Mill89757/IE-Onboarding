import React from "react";
import Header from "../src/components/Header";
import CheckTool from "../src/components/CheckTool";
import InfoCard from "../src/components/InfoCard2";

const Index = () => {
  return (
    <>
      <div>
        <Header />
        <div className="h-[calc(100vh_-_80px)]">
          <div className="flex items-center justify-center gap-x-[86px] h-full">
            <InfoCard
              title="Sustainability"
              description={
                <>
                  <b>Sustainability includes:</b>
                  <ul className="list-disc ml-5">
                    <li>Renewable Energy</li>
                    <li>Waste Management</li>
                    <li>Public Transportation</li>
                    <li>Conservation and Biodiversity</li>
                    <li>Sustainable Building Practices</li>
                    <li>Environmental Education and Awareness</li>
                  </ul>
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
