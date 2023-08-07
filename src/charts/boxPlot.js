import { BoxPlotChart } from "@sgratzl/chartjs-chart-boxplot";
import { useEffect, useRef } from "react";

export default function BoxPlot() {
  // Generate random data for the x-axis (corresponding to years 2020, 2021, and 2022)
  const generateRandomData = () => {
    const labels = ["2020", "2021", "2022"];
    const randomData = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 100)
    );
    return { labels, data: randomData };
  };

  const chartRef = useRef(null);

  useEffect(() => {
    // Get the chart context from the canvas element
    const ctx = chartRef.current.getContext("2d");

    // Generate random data for the chart
    const { labels, data } = generateRandomData();

    // Create the box plot chart
    new BoxPlotChart(ctx, {
      type: "boxplot",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Box Plot",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            outlierColor: "#999999",
            padding: 10,
            itemRadius: 0,
            data: [data],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div style={{ width: "80%", height: "80%" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
