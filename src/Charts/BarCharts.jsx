import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "../records.json";

data.map((data) => {
  return <div className="box" key={data.name}></div>;
});

const BarCharts = () => {
  return (
    <div>
      <BarChart width={500} height={300} data={data} stackOffset="sign">
        <ReferenceLine y={0} stroke="#000" />
        <Bar
          type="monotone"
          dataKey="react"
          stroke="pink"
          strokeWidth={3}
          fill="gray"
        />
        <Bar
          type="monotone"
          dataKey="vue"
          stroke="blue"
          strokeWidth={3}
          fill="yellow"
        />
        <Bar
          type="monotone"
          dataKey="angular"
          stroke="green"
          strokeWidth={3}
          fill="red"
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default BarCharts;
