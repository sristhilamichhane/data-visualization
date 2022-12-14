import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import data from "../records.json";

data.map((data) => {
  return <div className="box" key={data.name}></div>;
});

const AreaCharts = () => {
  return (
    <div>
      <AreaChart width={600} height={300} data={data}>
        <Area
          type="monotone"
          dataKey="react"
          stroke="#2196f3"
          strokeWidth={3}
          fill="gray"
        />
        <Area
          type="monotone"
          dataKey="angular"
          stroke="red"
          strokeWidth={3}
          fill="yellow"
        />
        <Area
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
      </AreaChart>
    </div>
  );
};

export default AreaCharts;
