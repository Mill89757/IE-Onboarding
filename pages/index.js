import React, { useState, useEffect } from "react";
import Header from "../src/components/Header";
import EntranceCard from "../src/components/EntranceCard";
import EntranceCard2 from "../src/components/EntranceCard2"; // Ensure you've duplicated and imported the second card.
import HeroCard from "../src/components/HeroCard";

const Index = () => {
  const [showProtectedContent, setShowProtectedContent] = useState(false);
  const PASSWORD = "panda";

  // Splitting the state for each card
  const [isSustainabilityCardOpen, setIsSustainabilityCardOpen] =
    useState(false);
  const [isCarbonCardOpen, setIsCarbonCardOpen] = useState(false);

  useEffect(() => {
    const hasEnteredPassword = localStorage.getItem("hasEnteredPassword");
    if (hasEnteredPassword === "true") {
      setShowProtectedContent(true);
    }
  }, []);

  const showContent = () => {
    const enteredPassword = prompt("Enter the password:");
    if (enteredPassword === PASSWORD) {
      localStorage.setItem("hasEnteredPassword", "true");
      setShowProtectedContent(true);
    } else {
      alert("Incorrect password. Access denied.");
    }
  };

  return (
    <>
      {showProtectedContent ? (
        <div className="grid gap-[calc(10px*1.618)]">
          <Header index={0} />

          {/* HeroCard */}
          <div className="w-screen h-[80.5vh] place-items-center golden-margin">
            <HeroCard
              title="Welcome to EnergySaver"
              subtitle="Making a greener planet"
              description="Discover and learn about the various facets of sustainability, and how you can contribute to a greener future."
            />
          </div>

          {/* EntranceCard Grid */}
          <div className="grid grid-cols-2 gap-4 container mx-auto golden-padding">
            <EntranceCard2
              id="sustainabilityCard"
              title="What is included in sustainability?"
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
              //link="/susinfo"
              onToggle={() =>
                setIsSustainabilityCardOpen(!isSustainabilityCardOpen)
              }
              isOpen={isSustainabilityCardOpen}
            />

            <EntranceCard2
              id="carbonCard"
              title="What is Carbon Footprint?"
              description={
                <>
                  <strong>Carbon Footprint</strong> represents the total
                  emissions of greenhouse gases. This includes both direct and
                  indirect emissions.
                  <br />
                  <br />
                  The primary contributor is carbon dioxide (CO2), but other
                  greenhouse gases play a part.
                  <br />
                  <br />
                  These emissions can come from individuals, organizations,
                  products, or events. Their importance lies in gauging human
                  impact on the environment, especially relating to climate
                  change.
                </>
              }
              //link="/carboninfo"
              onToggle={() => setIsCarbonCardOpen(!isCarbonCardOpen)}
              isOpen={isCarbonCardOpen}
            />
          </div>

          {/* Footer */}
          <footer className="bg-[#F7F9F7] py-6 mt-10">
            <div className="container mx-auto text-center">
              <p className="text-[#185E0E] mb-2">
                © {new Date().getFullYear()} EnergySaver, All Rights Reserved.
              </p>
              <p className="text-[#185E0E]">Designed with ♡ by Panda</p>
            </div>
          </footer>
        </div>
      ) : (
        <div className="flex h-screen w-screen bg-black justify-center items-center">
          <div className="w-[200px] h-[44px] flex items-center justify-center bg-white rounded-md">
            <button onClick={showContent}>Enter Password</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .golden-padding {
          padding: calc(10px);
        }
        .golden-margin {
          margin: calc(2px * 1.618);
        }
      `}</style>
    </>
  );
};

export default Index;
