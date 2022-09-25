import React from "react";
import "../components/BarChart.css";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

function BarChart() {
  const data = {
    labels: ["Offline orders", "Online orders", "Tradesr"],
    datasets: [
      {
        label: "Offline orders",
        data: [30, 40, 35, 45, 50, 35, 45],
        borderColor: "#347AE2",
        hitRadius: 30,
        backgroundColor: ["#347AE2"],
        borderWidth: 0.5,
      },
      {
        label: "Online orders",
        data: [45, 30, 32, 26, 40, 50, 36],
        borderColor: "#FF9500",
        hitRadius: 30,
        backgroundColor: ["#FF9500"],
      },
      {
        label: "Trades",
        data: [45, 30, 32, 26, 40, 50, 36],
        borderColor: "#34C759",
        hitRadius: 30,
        backgroundColor: ["#34C759"],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Orders Analytics",
    },
    options: {
      responsive: true,
    },
  };
  return <Doughnut data={data} options={options} />;
}

export default BarChart;
