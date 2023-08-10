import { BoxPlotChart } from "@sgratzl/chartjs-chart-boxplot";
import { useEffect, useRef } from "react";

const data = [
  [
    [
      19159882, 86626806, 20781457, 2421938, 16768410, 37133916, 15799475,
      85868899, 1094897, 32657122, 10112869, 141795136, 44192793, 10809659,
    ],
    [
      36598752, 1107768, 49792858, 15646970, 18647172, 85900720, 9311803,
      20825228, 31946772, 141777887, 2454849, 16221872, 84245111, 10031428,
    ],
    [
      2454849, 37275932, 15148750, 80303265, 1094657, 8774555, 56096283,
      19452271, 30033341, 165708991, 10123172, 17209131, 18611076, 83413233,
    ],
  ],
  [
    [
      13345, 10473, 416662, 565930, 1107217, 64778, 281119, 194565, 520361,
      194472, 166954, 1067603, 1786990,
    ],
    [
      192935, 1057852, 404364, 194565, 520361, 1086444, 282095, 13345, 165296,
      10516, 63061, 1793566, 636136,
    ],
    [
      194565, 520361, 1062896, 9769, 284160, 1789639, 190366, 160717, 1045830,
      60951, 13345, 395628, 717685,
    ],
  ],
];

export default function BoxPlot(props) {
  const chartRef = useRef(null);

  const passed_data = data[props.data_index];

  useEffect(() => {
    // Get the chart context from the canvas element
    const ctx = chartRef.current.getContext("2d");

    // Destroy the old chart instance if it exists
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Create the box plot chart
    chartRef.current.chart = new BoxPlotChart(ctx, {
      type: "boxplot",
      data: {
        labels: ["2020", "2021", "2022"],
        datasets: [
          {
            label: "Energy Usage",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            outlierColor: "#999999",
            padding: 10,
            itemRadius: 0,
            data: passed_data,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true, // Start y-axis at zero
            title: {
              display: true,
              text: "Source Usage (kWh)/(MJ)",
            },
          },
          x: {
            title: {
              display: true,
              text: "Year",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            display: true,
            text: "The energy usage of the past 3 years",
          },
        },
      },
    });
  }, [passed_data]); // Add passed_data as a dependency to trigger the useEffect when it changes

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div style={{ width: "80%", height: "80%" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
