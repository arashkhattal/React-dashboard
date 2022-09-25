import React from "react";
import "../components/LineChart.css";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Offline orders",
        data: [30, 40, 35, 45, 50, 35, 45],
        borderColor: "#347AE2",
        tension: 0.4,
        hitRadius: 30,
      },
      {
        label: "Online orders",
        data: [45, 30, 32, 26, 40, 50, 36],
        borderColor: "#FF9500",
        tension: 0.4,
        hitRadius: 30,
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Orders Analytics",
    },
    scales: {
      yAxes: [
        {
          ticks: { min: 0, max: 100, stepSize: 20 },
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  return <Line data={data} options={options} />;
}

export default LineChart;
