import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Header from "../src/components/Header";

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

export default function Compare(props) {
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

  // Find the index of the user value in the dataset
  const userIndex = findClosestIndex(dummy_data, user_value);

  // Create an array to store background colors for each data point
  const backgroundColors = dummy_data.map((value, index) =>
    index === userIndex ? "rgba(255, 0, 0, 0.7)" : "rgba(24, 94, 14, 0.5)"
  );

  // Configuration for the bar chart
  const chartConfig = {
    type: "bar",
    data: {
      labels: dummy_label,
      datasets: [
        {
          label: "Carbon Footprint (kgCO2e)",
          data: dummy_data,
          borderColor: "#185E0E",
          backgroundColor: backgroundColors,
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Carbon Footprint Distribution from Victoria, Australia",
        },
      },
    },
  };

  // Ref to store the chart instance
  const chartRef = useRef(null);

  useEffect(() => {
    // Create the chart after the component mounts
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      chartRef.current.chart = new Chart(ctx, chartConfig);
    }

    // Clean up chart instance when component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.chart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <Header index={2} />
      <div className="w-full h-[calc(100vh_-_80px)] flex items-center justify-center">
        <div className="w-[801px] h-[572px]">
          <h1 className="text-[#185E0E] text-2xl font-medium italic w-full text-center">
            Where are you comparing with other’s carbon footprint?
          </h1>
          <div className="w-full h-[512px] flex items-center justify-center">
            {/* Add the canvas element to render the chart */}
            <canvas ref={chartRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
