import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Categories", "Status"],
  ["pass", 72],
  ["fail", 28],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
];

export const options = {
//   title: "My Daily Activities",
  // is3D: true,
slices: {
    1: { offset: 0.2 },
    // 12: { offset: 0.3 },
    // 14: { offset: 0.4 },
    // 15: { offset: 0.5 },
  },
  fontSize:14,
  // pieHole: 0.4,

  colors : [ '#339966','#F33959'],
  chartArea: {
    left: "15%",
    top: "3%",
    height: "80%",
    width: "80%"
}
};

export function PieChart3d() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
  );
}
