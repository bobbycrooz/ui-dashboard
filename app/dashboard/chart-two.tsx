"use client";

import { Bar } from "react-chartjs-2";
import React from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  Tooltip,
  // Legend
);

export const options = {
  responsive: true,
  // plugins: {
  //   legend: { position: "top" as const },
  //   title: {
  //     display: true,
  //     text: "Chart.js Bar Chart",
  //   },
  // },
  maintainAspectRatio: false,
  scales: {
    x: {
      border: { display: false },
      grid: { display: false }
    },

    y: {
      border: { display: false },

      grid: { color: "#EAEAEA8a", lineWidth: 0.8, tickBorderDash: [1, 1], borderDash: [4, 4] }
    }
  }
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10000, 20000, 30000, 35000, 28000, 50000, 12000, 23000, 32000, 21000, 15000, 18000],
      barThickness: 30,
      backgroundColor: [
        "#34CAA51F",
      ],
      borderRadius: 20
    },
  ],
};

export default function ReactChart () {
  return (
    <div className="w-full h-[300px]">
      <Bar options={options} data={data}/>
    </div>
  );
}
