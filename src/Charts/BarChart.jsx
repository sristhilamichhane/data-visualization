import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "2017", react: 32, angular: 37, vue: 10 },
  { name: "2018", react: 42, angular: 77, vue: 20 },
  { name: "2019", react: 52, angular: 87, vue: 30 },
  { name: "2020", react: 22, angular: 57, vue: 40 },
  { name: "2021", react: 82, angular: 37, vue: 60 },
  { name: "2022", react: 100, angular: 30, vue: 20 },
];

const BarChart = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line
        type="monotone"
        dataKey="react"
        stroke="#2196f3"
        strokeWidth={3}
        fill="gray"
      />
      <Line
        type="monotone"
        dataKey="angular"
        stroke="red"
        strokeWidth={3}
        fill="yellow"
      />
      <Line
        type="monotone"
        dataKey="vue"
        stroke="brown"
        strokeWidth={3}
        fill="purple"
      />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default BarChart;