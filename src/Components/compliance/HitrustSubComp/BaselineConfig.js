import { Box, Card, CardContent } from '@mui/material'
import React, { useState } from 'react'
import '../Hitrust.css'
import Chart from "react-apexcharts";
import Baselinetable from './Baseline_table';
import BaselineExclusion from './Baseline_exclution';
// import Hitrusttable from '../HitrustTable';


export default function BaselineConfig() {
  var arr = [{"matchedKey":"cuisineType","cuisineType":"Indian","group":"group"},
  {"matchedKey":"cuisineType","cuisineType":"Italian","group":"group"},
  {"matchedKey":"cuisineType","cuisineType":"Asian","group":"group"},
  {"matchedKey":"cuisineType","cuisineType":"Japanese","group":"group"},
  {"matchedKey":"cuisineType","cuisineType":"African","group":"group"}]

// var cuisines = arr.map(function(el) {
//   return el.cuisineType;
// });

let cuisines =[]

for(let i=0;i<arr.length;i++){
  cuisines.push(arr[i].cuisineType)
}

console.log(cuisines +'arr cuisiness'); // array
    const [state1] = useState({
        options: {  colors : [ '#339966','#F33959'],labels: ['Pass', 'Fail'],
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90
          }
        } 
      },
          series: [4, 1],bar: [44, 55, 41, 17, 15]
         
        
      
      })
  return (
    <div>

<div className='ht_con'>
  <div className='ht_con_lft'>
  <Card sx={{ minWidth: 275 }} style={{height:'340px'}}>
   
      <CardContent >
      <h5>BaseLine Configuration</h5>
        {/* <PieHitrust/> */}
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
             
            <Chart style={{paddingTop:'14%'}} options={state1.options} series={state1.series} labels={state1.labels} type="donut" width="420"  />

        </Box>

        </CardContent></Card>
  </div>
  <div className='ht_con_rft'>
  <Card sx={{ minWidth: 275 }} >
      <CardContent >
      <h5>Configuration </h5>
        {/* <Hitrusttable/> */}
        <Baselinetable/>
        </CardContent></Card>

  </div>
</div>
<Card sx={{ minWidth: 275 }} style={{margin:'17px 0'}} className='Hitrust_Reg' >
      <CardContent >
          <div className='exclusion_ht'>
            <div>        <h5>Regulation/Authoritative Source Reference </h5>
            </div>
            <div><BaselineExclusion/></div>

          </div>
        <br/>
      
<ol type='1'>
  <li>HITRUST v9.3 Type: System.Level: 1.ID: 0627.10h1System.45</li>
  <li>21 CFR Part 11.10(a)</li>
  <li>CIS Controls: CIS CSC v7.1 7.1</li>
  <li>ISO/IEC 27002:2013: 12.5.1</li>
  <li>NIST Cybersecurity Framework v1.1 PR.IP-1</li>
  {/* <li>Many desktop publishing packages and web page editors now use Lorem Ipsum</li> */}

</ol>
        </CardContent></Card>
    </div>
  )
}
