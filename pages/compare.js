import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import Header from "../src/components/Header";
import BarChart from "../src/charts/barChart";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";

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

export default function Compare({ records }) {
  const router = useRouter();
  const carbonFootprint = router.query.carbonFootprint;

  const scope_3_kg_co2e_data = [];
  records.forEach((element) => {
    scope_3_kg_co2e_data.push(element.emission.scope_3_kg_co2e);
  });
  // sort the total_emission_kg_co2e_data array in ascending order
  scope_3_kg_co2e_data.sort((a, b) => a - b);

  return (
    <div>
      <Header index={2} />
      <div className="w-full h-[calc(100vh_-_80px)] flex items-center justify-center">
        <div style={{ width: "80%", height: "80%" }}>
          <h1 className="text-[#185E0E] text-2xl font-medium italic w-full text-center">
            Where are you comparing with other’s carbon footprint?
          </h1>
          <BarChart user_value={carbonFootprint} data={scope_3_kg_co2e_data} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const records = await prisma.record.findMany({
      select: {
        postcode: true,
        year: true,
        emission: {
          select: {
            scope_3_kg_co2e: true,
          },
        },
      },
    });

    return {
      props: {
        records: records,
      },
    };
  } catch (error) {
    console.error("Error fetching location data:", error);
    return {
      props: {
        records: [1],
      },
    };
  }
}
