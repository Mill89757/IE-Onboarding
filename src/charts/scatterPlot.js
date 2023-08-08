import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { preProcessFile } from "typescript";

const data = [
  [
    [
      36598752, 1107768, 49792858, 19159882, 86626806, 20781457, 2454849,
      37275932, 15148750, 80303265, 1094657, 8774555, 56096283, 15646970,
      18647172, 85900720, 9311803, 20825228, 31946772, 141777887, 2421938,
      16768410, 37133916, 15799475, 85868899, 1094897, 32657122, 19452271,
      30033341, 165708991, 10123172, 2454849, 16221872, 84245111, 10031428,
      10112869, 141795136, 44192793, 10809659, 17209131, 18611076, 83413233,
    ],
    [
      3659875, 110776, 4979285, 2107587, 9528948, 2285960, 171839, 2609315,
      1060412, 5621228, 76625, 614218, 3926739, 1564697, 1864717, 8590072,
      931180, 2082522, 3194677, 14177788, 266413, 1844525, 4084730, 1737942,
      9445578, 120438, 3592283, 1361659, 2102333, 11599629, 708622, 245484,
      1622187, 8424511, 1003142, 1112415, 15597465, 4861207, 1189062, 1204639,
      1302775, 5838926,
    ],
  ],
  [
    [
      192935, 1057852, 404364, 13345, 10473, 416662, 565930, 194565, 520361,
      1062896, 9769, 284160, 1789639, 194565, 520361, 1086444, 282095, 1107217,
      64778, 281119, 190366, 160717, 1045830, 60951, 13345, 165296, 10516,
      63061, 1793566, 636136, 194565, 520361, 194472, 166954, 1067603, 1786990,
      13345, 395628, 717685,
    ],
    [
      771743, 4231409, 1617456, 53383, 41892, 1666648, 2263720, 778261, 2081444,
      4251586, 39077, 1136641, 7158556, 778261, 2081444, 4345778, 1128383,
      4428868, 259114, 1124479, 761467, 642870, 4183322, 243805, 53383, 661186,
      42064, 252245, 7174267, 2544546, 778261, 2081444, 777891, 667817, 4270412,
      7147962, 53383, 1582515, 2870743,
    ],
  ],
];

// Generate random data for the scatter plot
function generateRandomData(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({ x: Math.random() * 100, y: Math.random() * 100 });
  }
  return data;
}

function processData(data) {
  const processed_data = [];
  for (let i = 0; i < data[0].length; i++) {
    processed_data.push({ x: data[0][i], y: data[1][i] });
    console.log(processed_data[i]);
  }
  return processed_data;
}

export default function ScatterPlot(props) {
  const chartRef = useRef(null);

  const index = props.data_index;

  const passed_data = processData(data[index]);

  useEffect(() => {
    // Get the chart context from the canvas element
    const ctx = chartRef.current.getContext("2d");

    // // Generate random data for the scatter plot
    // const scatterData = generateRandomData(50); // You can adjust the number of points
    // Destroy the old chart instance if it exists
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Create the scatter plot chart
    chartRef.current.chart = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Scatter Plot",
            backgroundColor: "rgba(255, 99, 132, 0.7)",
            borderColor: "rgba(255, 99, 132, 1)",
            data: passed_data,
            pointRadius: 5, // Adjust the size of the points
            pointHoverRadius: 7, // Adjust the size of the points on hover
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
          y: {
            type: "linear",
            position: "left",
          },
        },
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
              text: "Carbon Footprint (kgCO2e)",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Chart.js Scatter Plot",
          },
        },
      },
    });
  }, [passed_data]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div style={{ width: "80%", height: "80%" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
