import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Generate random data for the scatter plot
function generateRandomData(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({ x: Math.random() * 100, y: Math.random() * 100 });
  }
  return data;
}

export default function ScatterPlot() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Get the chart context from the canvas element
    const ctx = chartRef.current.getContext("2d");

    // Generate random data for the scatter plot
    const scatterData = generateRandomData(50); // You can adjust the number of points

    // Create the scatter plot chart
    new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Scatter Plot",
            backgroundColor: "rgba(255, 99, 132, 0.7)",
            borderColor: "rgba(255, 99, 132, 1)",
            data: scatterData,
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
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div style={{ width: "80%", height: "90%" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
