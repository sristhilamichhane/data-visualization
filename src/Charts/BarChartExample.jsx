import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "../records.json";

data.map((data) => {
  return <div className="box" key={data.name}></div>;
});

const BarChartExample = () => {
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        stackOffset="sign"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
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
          stroke="pink"
          strokeWidth={3}
          fill="gray"
        />
        <Bar
          type="monotone"
          dataKey="angular"
          stroke="pink"
          strokeWidth={3}
          fill="gray"
        />
      </BarChart>
    </div>
  );
};

export default BarChartExample;
