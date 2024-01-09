import { Box, Card, CardContent } from '@mui/material'
import React, { useState } from 'react'
import '../Hitrust.css'
import Chart from "react-apexcharts";
import Sk006table from './Sk006_table';
import Sk006Exclusion from './Sk006_exclusion';
// import Hitrusttable from '../HitrustTable';


export default function Sk006() {
  const [state1] = useState({
    options: {  colors : [ '#339966','#F33959'],labels: ['Pass', 'Fail'],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90
      }
    } 
  },
      series: [0,2],bar: [44, 55, 41, 17, 15]
     
    
  
  })
  return (
    <div>

<div className='ht_con'>
  <div className='ht_con_lft'>
  <Card sx={{ minWidth: 275 }} style={{height:'340px'}}>
   
      <CardContent >
      <h5>Audit and Logging</h5>
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
             
            <Chart options={state1.options} series={state1.series} labels={state1.labels} type="donut" width="420"  />

        </Box>

        </CardContent></Card>
  </div>
  <div className='ht_con_rft'>
  <Card sx={{ minWidth: 275 }} >
      <CardContent >
      <h5>Configuration </h5>
        {/* <Hitrusttable/> */}
        <Sk006table/>
        </CardContent></Card>

  </div>
</div>
<Card sx={{ minWidth: 275 }} style={{margin:'17px 0'}}>
      <CardContent >
      <div className='exclusion_ht'>
            <div>        <h5>Regulation/Authoritative Source Reference </h5>
            </div>
            <div><Sk006Exclusion/></div>

          </div>
        <br/>
        {/* <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> */}
          <ol>
            <li>HITRUST v9.3: Type: System.Level: 1.ID: 1270.09ad1System.12</li>
            <li>45 CFR Part Â§ 164.308(a)(5)(ii)(C) HIPAA.SR</li>
            <li>45 CFR Part Â§ 164.312(b) HIPAA.SR</li>
             <li> CIS CSC v7.1 6.2</li>
             <li>ISO/IEC 27002:2013 12.4.1</li>
             <li>ISO/IEC 27002:2013 12.4.3</li>
             <li>ISO/IEC 27799:2016 12.4.1</li>
             <li>ISO/IEC 27799:2016 12.4.3</li>
             <li>NIST Cybersecurity Framework v1.1 ID.SC-4</li>
             <li>NIST Cybersecurity Framework v1.1 PR.PT-1</li>
             <li>NIST SP 800-53 R4 AR-4</li>
             <li> NIST SP 800-53 R4 AU-12</li>
              <li>NIST SP 800-53 R4 AU-2</li>
              <li> NIST SP 800-53 R4 AU-6</li>


          </ol>
        </CardContent></Card>
    </div>
  )
}
