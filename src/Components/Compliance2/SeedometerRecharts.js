import React from "react";
import { Sector, Cell, PieChart, Pie } from "recharts";

const GaugeChart = () => {
  const width = 500;
  const chartValue = 20;
  const colorData = [
    {
      value: 5, // Meaning span is 0 to 40
      color: "#1bde69"
    },
    {
      value: 5, // span 40 to 140
      color: "#6aeb83"
    },
    {
      value: 5, // span 140 to 190
      color: "#ede65a"
    },
    {
      value: 5,
      color: "#f5e907"
    },
    {
      value: 5,
      color: "#cc6c6f"
    },
    {
      value: 5,
      color: "#ab090e"
    }
  ];

  const activeSectorIndex = colorData
    .map((cur, index, arr) => {
      const curMax = [...arr]
        .splice(0, index + 1)
        .reduce((a, b) => ({ value: a.value + b.value })).value;
      return chartValue > curMax - cur.value && chartValue <= curMax;
    })
    .findIndex((cur) => cur);

  const sumValues = colorData.map((cur) => cur.value).reduce((a, b) => a + b);

  const arrowData = [
    { value: chartValue },
    { value: 0 },
    { value: sumValues - chartValue }
  ];

  const pieProps = {
    startAngle: 180,
    endAngle: 0,
    cx: width / 2,
    cy: width / 2
  };

  const pieRadius = {
    innerRadius: "80%",
    outerRadius: (width / 2) * 0.4
  };

  const Arrow = ({ cx, cy, midAngle, outerRadius }) => {
    //eslint-disable-line react/no-multi-comp
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const mx = cx + (outerRadius + width * 0.03) * cos;
    const my = cy + (outerRadius + width * 0.03) * sin;
    //alert(cy + ' --'+cx +'---'+ mx+ '----' + my+'--'+midAngle +'--'+sin+'--'+cos+'--'+RADIAN)
    return (
      <g>
        <g transform={`translate(255, 255) rotate(${360 - midAngle})`}>
          <path
            d="M5.60469 9.37139C2.82684 9.54267 0.429368 7.66264 0.276978 5.19354C0.124588 2.72445 2.27269 0.564139 5.05054 0.392861L63.1551 1.279L5.60469 9.37139Z"
            fill="#2E2E2E"
          />
        </g>
        <text x={mx} y={my} textAnchor="middle" dominantBaseline="middle">
          {chartValue === 0 ? null : chartValue}
        </text>
      </g>
    );
  };

  return (
    <PieChart width={width} height={width / 2 + 30}>
      <text x={345} y={265} textAnchor="middle" dominantBaseline="middle">
        30
      </text>
      <text x={165} y={265} textAnchor="middle" dominantBaseline="middle">
        0
      </text>

      <Pie
        activeIndex={activeSectorIndex}
        innerRadius="55%"
        data={colorData}
        blendStroke
        fill="#8884d8"
        {...pieProps}
      >
        {colorData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colorData[index].color} />
        ))}
      </Pie>
      <Pie
        stroke="none"
        activeIndex={1}
        activeShape={Arrow}
        data={arrowData}
        outerRadius={pieRadius.innerRadius}
        fill="none"
        {...pieProps}
      />
    </PieChart>
  );
};

export default GaugeChart;
