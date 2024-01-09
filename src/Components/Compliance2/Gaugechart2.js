import React from "react";
import {
  ResponsiveContainer,
  Sector,
  Cell,
  PieChart,
  Pie,
  Tooltip,
  Label
} from "recharts";

const GaugeChart2 = () => {

    const CustomTooltip = ({ active, payload, label }) => {
    
        console.log(JSON.stringify(payload[0])+'label')
  
        if (active && payload && payload.length) {
          return (
            <div className="treemap-custom-tooltip speedOMtr">
              {/* <p>{`${payload[0].payload.root.name}`}</p>
              <p>{`${payload[0].payload.name} : ${payload[0].value}`}</p> */}
               {/* <p>{`${payload[0].payload.root.name}`}</p> */}
              <p>{`${payload[0].payload.name} : ${payload[0].value}`}</p>
            </div>
          );
        }
      
        return null;
      };
    
  const RADIAN = Math.PI / 180;

  const width = 250;
  const height = 200;
  const chartValue = 2.5;
  const slices = [
    {
      value: 3,
      color: "#DC9556",
      name:'Fail'
    },
    {
      value: 1,
      color: "#9BBE6F",
      name:'Pass'
    }
    // {
    //   value: 50,
    //   color: "#508B2C"
    // }
  ];

  const sumValues = slices.map((cur) => cur.value).reduce((a, b) => a + b);

  const arrowData = [
    { value: chartValue },
    { value: 0 },
    { value: sumValues - chartValue }
  ];

  const pieProps = {
    startAngle: 180,
    endAngle: 0,
    cx: width / 2,
    cy: width / 2,
    isAnimationActive: false
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="auto"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const Arrow = ({ cx, cy, midAngle, outerRadius }) => {
    // eslint-disable-line react/no-multi-comp
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const mx = cx + (outerRadius + width * 0.03) * cos;
    const my = cy + (outerRadius + width * 0.03) * sin;
    return (
      <g>
        <path
          d={`M${cx},${cy}L${mx},${my}`}
          strokeWidth="6"
          stroke="black"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx={cx} cy={cy} r={width * 0.08} fill="white" stroke="none" />
      </g>
    );
  };

  return (
    <div style={{ width, height: 400 }}>
      <ResponsiveContainer>
        <PieChart width={width} height={height}>
          <Pie
            stroke="none"
            data={slices}
            innerRadius={(width / 2) * 0.5}
            outerRadius={(width / 2) * 0.8}
            {...pieProps}
            // label
            label={renderCustomizedLabel}
          >
            {slices.map((each, i) => (
              <Cell key={`cell-${i}`} fill={slices[i].color} stroke="none" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Pie
            stroke="none"
            fill="none"
            activeIndex={1}
            activeShape={Arrow}
            data={arrowData}
            innerRadius={(width / 2) * 0.5}
            outerRadius={(width / 2) * 0.6}
            {...pieProps}
          >
            <Label
              value={chartValue}
              position="centerBottom" //
              offset={-20}
              className="gauge-label"
              fontSize="20px"
              fontWeight="bold"
            />
          </Pie>
        </PieChart>
       
      </ResponsiveContainer> 
    </div>
  );
};

export default GaugeChart2;
