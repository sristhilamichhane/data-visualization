import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import data from "../records.json";

data.map((data) => {
  return <div className="box" key={data.name}></div>;
});

const LineCharts = () => {
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

export default LineCharts;
