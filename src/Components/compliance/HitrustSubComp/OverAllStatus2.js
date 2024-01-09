// import { Box, Card, CardContent } from '@mui/material'
import React, { useState } from 'react'
import Chart from "react-apexcharts";


export default function OverallStatus2() {
  

    const [state1] = useState({
        options: { colors : [ '#339966','#F33959'],labels: ['Pass', 'Fail'],
            stroke: {
            show: true,
            // curve: 'smooth',
            // lineCap: 'butt',
            // data: [66],
            
            colors: ['','rgba(255,255,255,1)'],
            width: 12,
            // dashArray: 0, 
        },
        chart: {
        //   dropShadow: {
        //     enabled: true,
        //     top: 15,
        //     left: 0,
        //     blur: 7,
        //     color:['rgba(0,0,0,0.6)'],
        //     // color:
        //     //  ['rgb(235, 77, 77)', 'rgb(211, 102, 96)', 'rgb(187, 126, 116)', 'rgb(163, 151, 135)', 'rgb(139, 176, 154)',
        //     // 'rgb(115, 201, 173)', 'rgb(91, 225, 193)', 'rgb(67, 250, 212)'],
        //     opacity: 0.2
        //   },
          // dropShadow: {
          //     enabled: true,
          //     // enabledOnSeries: [0,2],
          //     top: 5,
          //     left: 0,
          //     blur: 3,
          //     color:  ['#fff','#000','#2D91EF'],
          //     opacity: 0.5
          // },
        //   stroke: {
        //     show: true,
        //     curve: 'smooth',
        //     lineCap: 'butt',
        //     colors: ['#000','#fff'],
        //     width: 2,
        //     dashArray: 0, 
        // }
      },
      grid: {
        // show: true,
        padding: {
          // top: -8,
          bottom: 30
        }
      },
        plotOptions: {
          pie: {
            // startAngle: -90,
            // endAngle: 90
            dataLabels: {
              offset: -20, // Moving the label position on slice
            }
          }
          
        } 
        // events: {
        //   animationEnd: function(ctx) {
        //     ctx.toggleDataPointSelection(2)
        //   }}
      },
          series: [72,28],bar: [44, 55, 41, 17, 15]
          
         
       
      
      })
    return (<>
      {/* <Box sx={{ display: 'flex' , alignContent: 'center' ,justifyContent:'center'}}> */}
        {/* <Box sx={{ display: 'flex', justifyContent: 'center' , alignContent: 'center' }}> */}
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
                   <Chart options={state1.options} series={state1.series} labels={state1.labels} type="pie" width="350"  />

               {/* <Card sx={{ minWidth: 275 }} style={{margin:'20px 0px' , padding:'0', width:'100%' }}>
               <h5 style={{margin:'10px'}}>Overall Status</h5>

        <CardContent style={{display:'flex', justifyContent:'center',alignContent:'center'}}>
       

            </CardContent></Card> */}

        {/* </Box> */}
    </>
    
  )
}
