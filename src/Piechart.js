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

function PieChart(){

    // const [state] = useState({
    //     options: {
    //       chart: {
    //         id: "basic-bar"
    //       },
    //       xaxis: {
    //         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    //       }
    //     },
    //     series: [
    //       {
    //         name: "series-1",
    //         data: [30, 40, 45, 50, 49, 60, 70, 91]
    //       },
    //       {
    //         name: "series-2",
    //         data: [20, 30, 35, 10, 29, 80, 80, 51]
    //       }
    //     ]
      
    //   })
    
      // const [state1] = useState({
      //   options: { labels: ['service A', 'service B', 'service C', 'service D', 'service E']},
      //     series: [44, 55, 41, 17, 15],bar: [44, 55, 41, 17, 15]
         
        
      
      // })
      const chartdata = {
        options: { labels: ['service A', 'service B', 'service C', 'service D', 'service E']},
            series: [44, 55, 41, 17, 15]
      }
    return (
      
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
             
            <Chart options={chartdata} series={chartdata.series}  type="pie" width="450"  />
            {/* <Chart
        options={{
          labels: ["A", "B", "C", "D", "E"],
          chart: { sparkline: { enabled: true } },
          // series:[
          //   {
          //     name:'series1',
          //     data:[44,55,66,77]
          //   }
          // ]
        }}
        // series={[44, 55, 41, 17, 15]}
        series={{
          data: [44,55,66,77]
        }}
        type="donut"
        width="380"
      /> */}
       

        </Box>

      

    )
}

export default PieChart;