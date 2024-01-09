import React, {  useState } from "react";
import { Box } from "@mui/material";
import Chart from "react-apexcharts";

export default function PieHitrust() {
    
    const [state1] = useState({
        options: { labels: ['service A', 'service B', 'service C', 'service D', 'service E']},
          series: [44, 55, 41, 17, 15],bar: [44, 55, 41, 17, 15]
         
        
      
      })
  return (
    <div>
         <Box sx={{ display: 'flex', justifyContent: 'center' , alignContent: 'center' }}>
            {/* <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="450"
            />
             <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="450"
            />
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="450"
            /> */}
             
            <Chart options={state1.options} series={state1.series} labels={state1.labels} type="pie" width="400"   />

        </Box>

    </div>
  )
}
