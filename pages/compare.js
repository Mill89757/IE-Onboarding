import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import Header from "../src/components/Header";
import BarChart from "../src/charts/barChart";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function findClosestIndex(numbers, target) {
  let closestIndex = 0;
  let closestDifference = Math.abs(target - numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    const currentDifference = Math.abs(target - numbers[i]);
    if (currentDifference < closestDifference) {
      closestIndex = i;
      closestDifference = currentDifference;
    }
  }

  return closestIndex;
}

export default function Compare({ locations }) {
  const user_value = 4500;

  const dummy_data = [
    7982.33, 6419.33, 6399.17, 4588.17, 4513.83, 4015.67, 3907.5, 3833.17,
    3558.33, 3499.33, 3442.17, 3223.67, 3039.67, 2975.83,
  ];

  const dummy_label = [
    "3980",
    "3156",
    "3804",
    "3807",
    "3912",
    "3806",
    "3802",
    "3805",
    "3975",
    "3977",
    "3803",
    "3177",
    "3978",
  ];

  const [emissionData, setEmissionData] = useState([]);
  const [postcodeLabels, setPostcodeLabels] = useState([]);

  console.log(locations);

  return (
    <div>
      <Header index={2} />
      <div className="w-full h-[calc(100vh_-_80px)] flex items-center justify-center">
        <div style={{ width: "80%", height: "80%" }}>
          <h1 className="text-[#185E0E] text-2xl font-medium italic w-full text-center">
            Where are you comparing with other’s carbon footprint?
          </h1>
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const locations = await prisma.location.findMany();

    return {
      props: {
        locations: locations,
      },
    };
  } catch (error) {
    console.error("Error fetching location data:", error);
    return {
      props: {
        locations: [1],
      },
    };
  }
}
