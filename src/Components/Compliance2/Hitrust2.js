import { Card, CardContent } from '@mui/material'
import React from 'react'
import OverallStatus from '../compliance/HitrustSubComp/OverallStatus'
import HitrustImg from '../images/hitrust_logo.PNG'
// import GaugeChart from './SeedometerRecharts'
import GaugeChart2 from './Gaugechart2'

export default function Hitrust2() {
  return (<>
      {/* <div>Hitrust2</div> */}
 
   <div className='hitrust2_blk'>
            <div className='hitrust2_blk_lft'>
            <Card sx={{ minWidth: 275 }} className='card_hi' style={{padding:0,margin:'20px',height:'300px'}} >
            <CardContent className='card_con'>
            <h5 className='hitrust_heading'><span className='HiTrust_img'><img alt='hitrust_img' src={HitrustImg}/></span> Hi-trust Features</h5>
            {/* <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p> */}
            <div className='Hitrust_Con_cover'>
            <div className='Hitrust_Content'><span>Title :</span> <p>OverAll Status</p></div>

<div className='Hitrust_Content'><span>Pass :</span> <p>1</p></div>
<div className='Hitrust_Content'><span>Fail :</span> <p>2</p></div>
<div className='Hitrust_Content'><span>Description :</span> <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p></div>
            </div>
           


            </CardContent></Card>
            </div>
            <div className='hitrust2_blk_rft'>

            <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'300px'}} >
            <CardContent>
            <h5 className='hitrust_heading'>  OverAll Status Graph</h5>
          <div className='OverAll'>
          <OverallStatus/>

          {/* <div className='OverAll_lft'>

          </div>
          <div className='OverAll_rft'></div> */}

          </div>

                </CardContent></Card>

            </div>

        </div>

        <div className='hitrust2_cards_overall'>
        <Card sx={{ minWidth: 75 }} className='card_hi' style={{padding:0,margin:'20px',height:'300px'}} >
            <CardContent className='hitrust_card' style={{backgroundColor:'#fff'}}>
              {/* <GaugeChart/> */}
              <GaugeChart2/>
              </CardContent></Card>
        </div>

  </>
  )
}
