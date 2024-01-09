import React from "react";
import { Box } from "@mui/material";
import Chart from "react-apexcharts";


// class BarChart extends React.Component {

    
//     render(){
//         return {
//             <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            
//             </Box>
//         }
//     }
// }

function BarCh(){

  const chartdata ={
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "service-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "service-2",
        data: [20, 30, 35, 10, 29, 80, 80, 51]
      }
    ]
  }
    
    //   const [state1] = useState({
    //     options: {},
    //       series: [44, 55, 41, 17, 15],bar: [44, 55, 41, 17, 15],
    //       labels: ['A', 'B', 'C', 'D', 'E']
        
      
    //   })
    return (
      
        <Box sx={{ display: 'flex', justifyContent: 'center' , alignContent: 'center' }}>
            <Chart
              options={chartdata}
              series={chartdata.series}
              type="bar"
              width="450"
            />
             {/* <Chart
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
            />
             
            <Chart options={state1.options} series={state1.series} labels={state1.labels} type="pie" width="380" /> */}

        </Box>

      

    )
}

export default BarCh;