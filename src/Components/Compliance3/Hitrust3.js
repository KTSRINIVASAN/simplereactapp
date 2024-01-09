import React, { Component } from 'react'
import OverallStatus from '../compliance/HitrustSubComp/OverallStatus'
import HitrustImg from '../images/hitrust_logo.PNG'
// import { styled } from '@mui/material/styles';

import { Box, Button,Card, CardContent } from '@mui/material'
// import { OverlayTrigger, Tooltip } from 'react-bootstrap'
// import { Button } from 'react-bootstrap/lib/InputGroup'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import Chart from "react-apexcharts";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';




import "bootstrap/dist/css/bootstrap.css";
import BaselineExclusion from '../compliance/HitrustSubComp/Baseline_exclution';
import { PieChart3d } from '../compliance/PieChart3d';
import OverallStatus2 from '../compliance/HitrustSubComp/OverAllStatus2';
import BaselineSpeedOMtr from './BaselineSpeedOMtr';
import BaseLineGuage from './BaselineGuage';
import NwGuage from './NwGuage';
import ResAccessGuage from './ResAccessGuage';
import DataEncrypGuage from './DataEncryp';
import RoleBasedGuage from './RoleBasedGuage';
import AuditGuage from './AuditingGuage';
import TransProtoGuage from './TransProtoGuage';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0071fb',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
//   [`&.${rows.protein[4]}`]: {
//     fontSize: 74,
//   },
  
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
//   '&:nth-of-type(4)': {
//     backgroundColor: '#ffc0bd',
//     // color:'#FF0000 !important',
//     font: '#ff0000',
//   },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, forcasted) {
  return { name, calories, fat, carbs, protein,forcasted };
}

const rows = [
  createData('Configuration Recorder Enabled', 'Pass', 350, 380, 360, '500$'),
  createData('CheckIAMRole', 'Pass',250, 280, 290, '500$'),
  createData('CheckConfigRules', 'Pass',150, 175 ,170, '500$'),
  createData('Inbound Traffic In Security Groups', 'Fail',150, 175 ,170, '500$'),

  createData('CloudTrail logging for S3 Bucket', 'Pass',510, 580,  520, '500$'),
//   createData('Ok', 'COST CODE A', 300, 330,  310, '500$'),
];

const rows2 = [
  createData('HITRUST v9.3 Type: System.Level: 1.ID: 0627.10h1System.45', 'Pass', 350, 380, 360, '500$'),
  createData('21 CFR Part 11.10(a)', 'Pass',250, 280, 290, '500$'),
  createData('CIS Controls: CIS CSC v7.1 7.1', 'Pass',150, 175 ,170, '500$'),
  createData('ISO/IEC 27002:2013: 12.5.1', 'Fail',150, 175 ,170, '500$'),

  createData('NIST Cybersecurity Framework v1.1 PR.IP-1', 'Pass',510, 580,  520, '500$'),
//   createData('Ok', 'COST CODE A', 300, 330,  310, '500$'),
];
// import { Tooltip } from 'react-bootstrap'


export default class Compliance3 extends Component {
  constructor() {
    super()
    this.state = {
      isBarCompliance:true,
      isLineCompliance:false,
      isOverAll: true,
      isbaseConfigBlk:false,
      isNetworkCompliance:false,
      isresAccess:false,
      isDataEncryption:false,
      isroleBasedAccess:false,
      isAuditLog:false,
      isTransmissionProtection:false,
      seriesCompBar: [{
        name: "Pass",
        data: [1,2,4,1,3,4,1]
        // data: [...`${this.state.seriesBarCost}`]
        // data: [...barCostseries]
    }
      ,
      {
        name: "Fail",
        data: [2,1,3,4,1,2,1]
      }
    ],
      optionsCompBar: {
          colors: ['#0071fb', '#003f5c', '#bc5090', '#ff6361', '#ffa600', '#5758d0'],
          // chart: {
          //     width: 380,
          //     type: 'pie',
          // },
          
            labels: ['BaseLine Configuration', 'Network Compliance', 'Restricted Access', 'Data Encryption At Rest', 'Role Based Access Control','Audit and Logging','Transmission Protection'],
          // labels: this.state.CosGraphBarYPreMonth,
          responsive: [{
              breakpoint: 480,
              options: {
                  // chart: {
                  //   width: 200
                  // },
                  legend: {
                      position: 'bottom'
                  },
                  xaxis: {
                      // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                      // categories: previousMonCosService,
                      title: {
                          text: `Compliance Chart`
                      },
                  },

              }
          }]
      },

      baseConfig: {
        options: {  colors : [ '#339966','#F33959'],labels: ['Pass', 'Fail'],
        plotOptions: {
          pie: {
            // startAngle: -90,
            // endAngle: 90,
            // dataLabels: {
            //   offset: 0,
            // },
            // expandOnClick: true,
            donut: {
              size: '83%'
            }
          }
        } ,
        legend: {
          show: true,
          position: 'bottom',
      },
      grid: {
        // show: false,
        padding: {
          // top: -7,
          // bottom: -135
        }
      }
      },
          series: [4, 1],bar: [44, 55, 41, 17, 15]
         
        
      
      },
      nwComp: {
        options: {  colors : [ '#339966','#F33959'],labels: ['Pass', 'Fail'],
        plotOptions: {
          pie: {
            // startAngle: -90,
            // endAngle: 90,
            // dataLabels: {
            //   offset: 0,
            // }
            donut: {
              size: '83%'
            }
          }
          
        } ,
        legend: {
          show: true,
          position: 'bottom',
      },
      grid: {
        // show: false,
        // padding: {
        //   top: -8,
        //   bottom: -135
        // }
      }
      },
          series: [1, 1],bar: [44, 55, 41, 17, 15]
         
        
      
      },
      resAction: {
        options: {  colors : [ '#339966','#F33959'],labels: ['Pass', 'Fail'],
        plotOptions: {
          pie: {
            // startAngle: -90,
            // endAngle: 90,
            // dataLabels: {
            //   offset: 0,
            // }
            donut: {
              size: '83%'
            }
          }
        } ,
        legend: {
          show: true,
          position: 'bottom',
      },
      grid: {
        // show: false,
        // padding: {
        //   top: -8,
        //   bottom: -135
        // }
      }
      },
          series: [1, 2],bar: [44, 55, 41, 17, 15]
         
        
      
      },
      dataEncryp: {
        options: {  colors : [ '#339966','#F33959'],labels: ['Pass', 'Fail'],
        plotOptions: {
          pie: {
            // startAngle: -90,
            // endAngle: 90,
            donut: {
              size: '83%'
            }
            // dataLabels: {
            //   offset: 0,
            // }
          }
        } ,
        legend: {
          show: true,
          position: 'bottom',
      },
      grid: {
        // show: false,
        // padding: {
        //   top: -8,
        //   bottom: -135
        // }
      }
      },
          series: [3,0],bar: [44, 55, 41, 17, 15]
         
        
      
      },
      roleBasedAccess: {
        options: {  colors : [ '#339966','#F33959'],labels: ['Pass', 'Fail'],
        plotOptions: {
          pie: {
            // startAngle: -90,
            // endAngle: 90,
            donut: {
              size: '83%'
            }
            
          }
        } ,
        legend: {
          show: true,
          position: 'bottom',
      },
      grid: {
        // show: false,
        // padding: {
        //   top: -8,
        //   bottom: -135
        // }
      }
      },
          series: [2,0],bar: [44, 55, 41, 17, 15]
         
        
      
      },
      auditLog: {
        options: {  colors : [ '#339966','#F33959'],labels: ['Pass', 'Fail'],
        plotOptions: {
          pie: {
            // startAngle: -90,
            // endAngle: 90,
            // dataLabels: {
            //   offset: 0,
            // }
            donut: {
              size: '83%'
            }
          }
        } ,
        legend: {
          show: true,
          position: 'bottom',
      },
      grid: {
        // show: false,
        // padding: {
        //   top: -8,
        //   bottom: -135
        // }
      }
      },
          series: [0,2],bar: [44, 55, 41, 17, 15]
         
        
      
      },
      transProt: {
        options: {  colors : [ '#339966','#F33959'],labels: ['Pass', 'Fail'],
        fill: {
          type: 'gradient',
        },
        // legend: {
        //   formatter: function(val, opts) {
        //     return val + " - " + opts.w.globals.series[opts.seriesIndex]
        //   }},
        plotOptions: {
          pie: {
            // startAngle: -90,
            // endAngle: 90,
            // dataLabels: {
            //   offset: 0,
            // }
            donut: {
              size: '83%'
            }
          },
          // fill: {
          //   type: 'gradient',
          // },
          // legend: {
          //   formatter: function(val, opts) {
          //     return val + " - " + opts.w.globals.series[opts.seriesIndex]
          //   }
          // },
        } ,
        legend: {
          show: true,
          position: 'bottom',
          formatter: function(val, opts) {
            return val + " : " + opts.w.globals.series[opts.seriesIndex]
          }
      },
      grid: {
        // show: false,
        // padding: {
        //   top: -8,
        //   bottom: -135
        // }
      }
      },
          series: [0,1],bar: [44, 55, 41, 17, 15]
         
        
      
      },
      
    }}

  getTooltip = () => {
    return <Tooltip id="tooltip">this is tooltip text</Tooltip>;
  };

  overAllHtBlk = ()=>{
    this.setState({
      isOverAll:true,
      isbaseConfigBlk:false,
      isNetworkCompliance:false,
      isresAccess:false,
      isDataEncryption:false,
      isroleBasedAccess:false,
      isAuditLog:false,
      isTransmissionProtection:false,


    })
  }

  baseConfigBlk = ()=>{
    this.setState({
      isOverAll:false,
      isbaseConfigBlk:true,
      isNetworkCompliance:false,
      isresAccess:false,
      isDataEncryption:false,
      isroleBasedAccess:false,
      isAuditLog:false,
      isTransmissionProtection:false,



    })
  }
  networkCompliance =()=>{
    this.setState({
      isOverAll:false,
      isbaseConfigBlk:false,
      isNetworkCompliance:true,
      isresAccess:false,
      isDataEncryption:false,
      isroleBasedAccess:false,
      isAuditLog:false,
      isTransmissionProtection:false,



    })
  }
  resAccessBlk =()=>{
    this.setState({
      isOverAll:false,
      isbaseConfigBlk:false,
      isNetworkCompliance:false,
      isresAccess:true,
      isDataEncryption:false,
      isroleBasedAccess:false,
      isAuditLog:false,
      isTransmissionProtection:false,

    })
   
  }
  dataEncryption =()=>{
    this.setState({
      isOverAll:false,
      isbaseConfigBlk:false,
      isNetworkCompliance:false,
      isresAccess:false,
      isDataEncryption:true,
      isroleBasedAccess:false,
      isAuditLog:false,
      isTransmissionProtection:false,

    })
     }
     roleBasedAccess =()=>{
      this.setState({
        isOverAll:false,
        isbaseConfigBlk:false,
        isNetworkCompliance:false,
        isresAccess:false,
        isDataEncryption:false,
        isroleBasedAccess:true,
        isAuditLog:false,
        isTransmissionProtection:false,

      })
     }
     AuditLog =()=>{
      this.setState({
        isOverAll:false,
        isbaseConfigBlk:false,
        isNetworkCompliance:false,
        isresAccess:false,
        isDataEncryption:false,
        isroleBasedAccess:false,
        isAuditLog:true,
        isTransmissionProtection:false,

      })
     }
     TransProtect =()=>{
      this.setState({
        isOverAll:false,
        isbaseConfigBlk:false,
        isNetworkCompliance:false,
        isresAccess:false,
        isDataEncryption:false,
        isroleBasedAccess:false,
        isAuditLog:false,
        isTransmissionProtection:true,

      })
     }

     
renderBarCompliance=()=>{
  this.setState({
    isBarCompliance:true,
    isLineCompliance:false
  })
}

renderLineCompliance=()=>{
  this.setState({
    isBarCompliance:false,
    isLineCompliance:true
  })
}
  render() {
    const HtmlTooltip = styled(({ className, ...props }) => (
      <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
      },
    }));
    // const baseConfigTT = <Tooltip id="tooltip" style={{ width: "100%" }}>thisisalongstringthanusualhencenotfilledincontiner</Tooltip>
    return (<>
      {/* <div>Compliance</div> */}
      {this.state.isOverAll && <>
        <h5 className='hi_Headers'>Hitrust Details</h5>

        <div className='hitrust2_blk'>
            <div className='hitrust2_blk_lft'>
            <Card sx={{ minWidth: 275 }} className='card_hi' style={{padding:0,margin:'20px',height:'300px'}} >
            <CardContent className='card_con'>
            <h5 className='hitrust_heading'><span className='HiTrust_img'><img alt='hitrust_img' src={HitrustImg}/></span> Compliance Features</h5>
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
            <h5 className='hitrust_heading1'>  OverAll Status Graph</h5>
          <div className='OverAll'>
          {/* <OverallStatus/> */}
          <div className='pie3d'><PieChart3d/></div>
          {/* <OverallStatus2/> */}
          

          {/* <div className='OverAll_lft'>

          </div>
          <div className='OverAll_rft'></div> */}

          </div>

                </CardContent></Card>

            </div>

        </div>

        <div>
        <h5 className='hi_Headers'>All-In_One View</h5>
        <Card sx={{ minWidth: 75 }}  style={{padding:0,margin:'20px'}} >
            <CardContent className='hitrust_All_Ctag_Con'>
        <Box className='All_catg_chartHeader'>
        <ul className='chartHeader' >
                                                    {/* <li><NavLink to="/costs/costOfSavings/piechart" className= 'chart_menu' activeClassName ='active'><PieChartIcon/></NavLink></li> */}
                                                    <li><button className={this.state.isBarCompliance ? "activeb" : ""} onClick={this.renderBarCompliance}  ><BarChartIcon style={{ fontSize: '25px' }} /></button></li>
                                                    {/* className="mobile__CTA--btn chart_menu"  */}
                                                    <li><button className={this.state.isLineCompliance ? "activeb" : ""} onClick={this.renderLineCompliance} ><SsidChartIcon style={{ fontSize: '25px' }} /></button></li>



                                                </ul>
        </Box>
        <Box className='hitrust_All_Ctag'>
        {this.state.isBarCompliance && <>
        
        {/* <p>sBarCompliance</p> */}
        <Chart
                                                    options={this.state.optionsCompBar}
                                                    series={this.state.seriesCompBar}
                                                    type="bar"
                                                    width="610"
                                                />

        </>}

        {this.state.isLineCompliance && <>
          {/* <p>sLineCompliance</p> */}

          <Chart
                                                    options={this.state.optionsCompBar}
                                                    series={this.state.seriesCompBar}
                                                    type="line"
                                                    width="610"
                                                />
        </>}
        </Box>

        
              </CardContent></Card>
        </div>

        <div className='hitrust2_cards_overall'>
        <h5 className='hi_Headers'>Hi Trust Detailed Categories View</h5>
        <Card sx={{ minWidth: 75 }} className='ht2_cards_singlez' style={{padding:0,margin:'20px'}} >
            <CardContent className='hitrust_cardz'>
            <Box style={{ display: 'flex', justifyContent: 'center', margin: '25px 0 0 0'}}>
        <Card sx={{ minWidth: 75 }} className='ht2_cards_single' style={{padding:0,margin:'20px'}} >
            <CardContent className='hitrust_card'>
              <div className='singleHeader'>
              <h5 >BaseLine Configuration <span>&#40; SK001 &#41;</span>   </h5>
             
              <span className='hitrust_icon1'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                               
                                <span style={{ fontSize: 14 }}> Vendor supplied software used in operational systems is maintained at a level supported by the supplier </span>
                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
          
              </div>
              <div className='single_Content'>
                <BaseLineGuage/>
                {/* <BaselineSpeedOMtr/> */}
              {/* <Chart style={{paddingTop:'10%'}} options={this.state.baseConfig.options} series={this.state.baseConfig.series} labels={this.state.baseConfig.labels} type="donut" width="280" /> */}
              {/* <p>Sk001</p> */}

              <Button variant="contained" className='hitrust_viewDt' onClick={this.baseConfigBlk}>View Details</Button>

              </div>
             
              
              </CardContent></Card>
              <Card sx={{ minWidth: 75 }} className='ht2_cards_single' style={{padding:0,margin:'20px'}} >
            <CardContent className='hitrust_card'>
              <div className='singleHeader'>
              <h5 >Network Compliance <span>&#40; SK002 &#41;</span> </h5>
             
              <span className='hitrust_icon1'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                               
                                <span style={{ fontSize: 14 }}> Vendor supplied software used in operational systems is maintained at a level supported by the supplier </span>
                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
          
              </div>
              <div className='single_Content'>
                <NwGuage/>
              {/* <Chart style={{paddingTop:'10%'}} options={this.state.nwComp.options} series={this.state.nwComp.series} labels={this.state.nwComp.labels} type="donut" width="280"   /> */}
              {/* <p>Sk002</p> */}
              <Button variant="contained" className='hitrust_viewDt' onClick={this.networkCompliance}>View Details</Button>

              </div>
             
              
              </CardContent></Card>
              <Card sx={{ minWidth: 75 }} className='ht2_cards_single' style={{padding:0,margin:'20px'}} >
            <CardContent className='hitrust_card'>
              <div className='singleHeader'>
              <h5 >Restricted Access <span>&#40;SK003&#41;</span> </h5>
             
              <span className='hitrust_icon1'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                               
                                <span style={{ fontSize: 14 }}> Vendor supplied software used in operational systems is maintained at a level supported by the supplier </span>
                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
          
              </div>
              <div className='single_Content'>
                <ResAccessGuage/>
              {/* <Chart style={{paddingTop:'10%'}} options={this.state.resAction.options} series={this.state.resAction.series} labels={this.state.resAction.labels} type="donut" width="280"   /> */}
              {/* <p>Sk003</p> */}
              <Button variant="contained" className='hitrust_viewDt' onClick={this.resAccessBlk}>View Details</Button>

              </div>
             
              
              </CardContent></Card>
             

        </Box>
        <Box  style={{ display: 'flex', justifyContent: 'center', margin: '25px 0 0 0'}}>
        <Card sx={{ minWidth: 75 }} className='ht2_cards_single' style={{padding:0,margin:'20px'}} >
            <CardContent className='hitrust_card'>
              <div className='singleHeader'>
              <h5 >Data Encryption At Rest <span>&#40; SK004 &#41;</span> </h5>
             
              <span className='hitrust_icon1'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                               
                                <span style={{ fontSize: 14 }}> Vendor supplied software used in operational systems is maintained at a level supported by the supplier </span>
                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
          
              </div>
              <div className='single_Content'>
                <DataEncrypGuage/>
              {/* <Chart style={{paddingTop:'10%'}} options={this.state.dataEncryp.options} series={this.state.dataEncryp.series} labels={this.state.dataEncryp.labels} type="donut" width="280"   /> */}
              {/* <p>Sk004</p> */}
              <Button variant="contained" className='hitrust_viewDt' onClick={this.dataEncryption}>View Details</Button>

              </div>
             
              
              </CardContent></Card>
              <Card sx={{ minWidth: 75 }} className='ht2_cards_single' style={{padding:0,margin:'20px'}} >
            <CardContent className='hitrust_card'>
              <div className='singleHeader'>
              <h5 >Role Based Access Control <span>&#40; SK005 &#41;</span> </h5>
             
              <span className='hitrust_icon1'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                               
                                <span style={{ fontSize: 14 }}> Vendor supplied software used in operational systems is maintained at a level supported by the supplier </span>
                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
          
              </div>
              <div className='single_Content'>
                <RoleBasedGuage/>
              {/* <Chart style={{paddingTop:'10%'}} options={this.state.roleBasedAccess.options} series={this.state.roleBasedAccess.series} labels={this.state.roleBasedAccess.labels} type="donut" width="280"   /> */}
              {/* <p>Sk005</p> */}
              <Button variant="contained" className='hitrust_viewDt' onClick={this.roleBasedAccess}>View Details</Button>

              </div>
             
              
              </CardContent></Card>
              <Card sx={{ minWidth: 75 }} className='ht2_cards_single' style={{padding:0,margin:'20px'}} >
            <CardContent className='hitrust_card'>
              <div className='singleHeader'>
              <h5 >Audit and Logging  <span>&#40; SK006 &#41;</span> </h5>
             
              <span className='hitrust_icon1'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                               
                                <span style={{ fontSize: 14 }}> Vendor supplied software used in operational systems is maintained at a level supported by the supplier </span>
                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
          
              </div>
              <div className='single_Content'>
                <AuditGuage/>
              {/* <Chart style={{paddingTop:'10%'}} options={this.state.auditLog.options} series={this.state.auditLog.series} labels={this.state.auditLog.labels} type="donut" width="280"   /> */}
              {/* <p>Sk006</p> */}
              <Button variant="contained" className='hitrust_viewDt' onClick={this.AuditLog}>View Details</Button>

              </div>
             
              
              </CardContent></Card>

        </Box>
        <Box  style={{ display: 'flex', justifyContent: 'start', margin: '0 0 0 25px'}}>
        <Card sx={{ minWidth: 75 }} className='ht2_cards_single' style={{padding:0,margin:'20px'}} >
            <CardContent className='hitrust_card'>
              <div className='singleHeader'>
              <h5 >Transmission Protection <span>&#40; SK007 &#41;</span></h5>
             
              <span className='hitrust_icon1'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                               
                                <span style={{ fontSize: 14 }}> Vendor supplied software used in operational systems is maintained at a level supported by the supplier </span>
                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
          
              </div>
              <div className='single_Content'>
                <TransProtoGuage/>
              {/* <Chart style={{paddingTop:'10%'}} options={this.state.transProt.options} series={this.state.transProt.series} labels={this.state.transProt.labels} type="donut" width="280"   /> */}
              {/* <p>Sk007</p> */}
              <Button variant="contained" className='hitrust_viewDt' onClick={this.TransProtect}>View Details</Button>

              </div>
             
              
              </CardContent></Card>
</Box>
              </CardContent></Card>
       

       
        </div>
      </>}
      {this.state.isbaseConfigBlk && <>

      <div className='baseConfig_Header'>
      <Button variant="contained" onClick={this.overAllHtBlk}>Back</Button>

      </div>
      <div className='hitrust2_blk'>
            <div className='hitrust2_blk_lft'>
            <Card sx={{ minWidth: 275 }} className='card_hi' style={{padding:0,margin:'20px',height:'300px'}} >
            <CardContent className='card_con'>
            <h5 className='hitrust_heading'><span className='HiTrust_img'><img alt='hitrust_img' src={HitrustImg}/></span> BaseLine Configuration</h5>
            {/* <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p> */}
            <div className='Hitrust_Con_cover'>
            <div className='Hitrust_Content'><span>Title :</span> <p>BaseLine Configuration &#40; SK001 &#41;</p></div>

<div className='Hitrust_Content'><span>Pass :</span> <p>1</p></div>
<div className='Hitrust_Content'><span>Fail :</span> <p>2</p></div>
<div className='Hitrust_Content'><span>Description :</span> <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p></div>
            </div>
           


            </CardContent></Card>
            </div>
            <div className='hitrust2_blk_rft'>

            <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'300px'}} >
            <CardContent>
            <h5 className='hitrust_heading1'>  Graph Status </h5>
          <div className='OverAll'>
          {/* <OverallStatus/> */}
          <Chart style={{paddingTop:'2%'}} options={this.state.baseConfig.options} series={this.state.baseConfig.series} labels={this.state.baseConfig.labels} type="donut" width="300"   />
          {/* <div className='OverAll_lft'>

          </div>
          <div className='OverAll_rft'></div> */}

          </div>

                </CardContent></Card>

            </div>

        </div>

        <div className='hiTrust_table'>
          <div className='hiTrust_table_lft'>
          <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
            <CardContent>
            <h5>Configuration  &#40; s &#41;</h5>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow className='budgetReport_table'>
            <StyledTableCell >Rules</StyledTableCell>
            <StyledTableCell >Status</StyledTableCell>
            {/* <StyledTableCell    >Cost: Current vs Budgeted</StyledTableCell> */}
            {/* <StyledTableCell >Current</StyledTableCell> */}
            {/* <StyledTableCell >Forcasted</StyledTableCell>
            <StyledTableCell>Budgeted</StyledTableCell> */}
          

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell className='budget_table'>{row.calories}</StyledTableCell>
              {/* <StyledTableCell style={{paddingLeft:'75px'}} className='budget_table'>{row.fat}</StyledTableCell> */}
              {/* <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.carbs}</StyledTableCell> */}
              {/* <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.protein}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.forcasted}</StyledTableCell> */}

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </CardContent></Card>
         
          </div>
          <div className='hiTrust_table_rft'>
          <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
            <CardContent>
              <div className='baseConfig_Header exclu'>
              <BaselineExclusion/>
              {/* <Button variant="contained" >View Exclusion</Button> */}
              </div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow className='budgetReport_table regulations_hitr '>
            <StyledTableCell >Regulations/Standards Source References</StyledTableCell>
            {/* <StyledTableCell >Status</StyledTableCell> */}
            {/* <StyledTableCell    >Cost: Current vs Budgeted</StyledTableCell> */}
            {/* <StyledTableCell >Current</StyledTableCell> */}
            {/* <StyledTableCell >Forcasted</StyledTableCell>
            <StyledTableCell>Budgeted</StyledTableCell> */}
          

          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row,i) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {i+1} &#41; &nbsp;{row.name}
              </StyledTableCell>
              {/* <StyledTableCell className='budget_table'>{row.calories}</StyledTableCell> */}
              {/* <StyledTableCell style={{paddingLeft:'75px'}} className='budget_table'>{row.fat}</StyledTableCell> */}
              {/* <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.carbs}</StyledTableCell> */}
              {/* <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.protein}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.forcasted}</StyledTableCell> */}

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </CardContent></Card>
       
          </div>
        </div>
      </>}
      {this.state.isNetworkCompliance && <>

<div className='baseConfig_Header'>
<Button variant="contained" onClick={this.overAllHtBlk}>Back</Button>

</div>
<div className='hitrust2_blk'>
      <div className='hitrust2_blk_lft'>
      <Card sx={{ minWidth: 275 }} className='card_hi' style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent className='card_con'>
      <h5 className='hitrust_heading'><span className='HiTrust_img'><img alt='hitrust_img' src={HitrustImg}/></span> Network Compliance</h5>
      {/* <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p> */}
      <div className='Hitrust_Con_cover'>
      <div className='Hitrust_Content'><span>Title :</span> <p>Network Compliance &#40;SK002&#41;</p></div>

<div className='Hitrust_Content'><span>Pass :</span> <p>1</p></div>
<div className='Hitrust_Content'><span>Fail :</span> <p>2</p></div>
<div className='Hitrust_Content'><span>Description :</span> <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p></div>
      </div>
     


      </CardContent></Card>
      </div>
      <div className='hitrust2_blk_rft'>

      <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent>
      <h5 className='hitrust_heading1'>  Graph Status </h5>
    <div className='OverAll'>
    {/* <OverallStatus/> */}
    <Chart style={{paddingTop:'2%'}} options={this.state.baseConfig.options} series={this.state.baseConfig.series} labels={this.state.baseConfig.labels} type="donut" width="300"   />
    {/* <div className='OverAll_lft'>

    </div>
    <div className='OverAll_rft'></div> */}

    </div>

          </CardContent></Card>

      </div>

  </div>

  <div className='hiTrust_table'>
    <div className='hiTrust_table_lft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
      <h5>Configuration  &#40; s &#41;</h5>

      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table'>
      <StyledTableCell >Rules</StyledTableCell>
      <StyledTableCell >Status</StyledTableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell className='budget_table'>{row.calories}</StyledTableCell>
     

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
   
    </div>
    <div className='hiTrust_table_rft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
        <div className='baseConfig_Header exclu'>
        <BaselineExclusion/>
        {/* <Button variant="contained" >View Exclusion</Button> */}
        </div>
      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table regulations_hitr '>
      <StyledTableCell >Regulations/Standards Source References</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows2.map((row,i) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {i+1} &#41; &nbsp;{row.name}
        </StyledTableCell>
      

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
 
    </div>
  </div>
</>}
{this.state.isresAccess && <>

<div className='baseConfig_Header'>
<Button variant="contained" onClick={this.overAllHtBlk}>Back</Button>

</div>
<div className='hitrust2_blk'>
      <div className='hitrust2_blk_lft'>
      <Card sx={{ minWidth: 275 }} className='card_hi' style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent className='card_con'>
      <h5 className='hitrust_heading'><span className='HiTrust_img'><img alt='hitrust_img' src={HitrustImg}/></span>Restricted Access</h5>
      {/* <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p> */}
      <div className='Hitrust_Con_cover'>
      <div className='Hitrust_Content'><span>Title :</span> <p>Restricted Access &#40;SK003&#41;</p></div>

<div className='Hitrust_Content'><span>Pass :</span> <p>1</p></div>
<div className='Hitrust_Content'><span>Fail :</span> <p>2</p></div>
<div className='Hitrust_Content'><span>Description :</span> <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p></div>
      </div>
     


      </CardContent></Card>
      </div>
      <div className='hitrust2_blk_rft'>

      <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent>
      <h5 className='hitrust_heading1'>  Graph Status </h5>
    <div className='OverAll'>
    {/* <OverallStatus/> */}
    <Chart style={{paddingTop:'2%'}} options={this.state.resAction.options} series={this.state.resAction.series} labels={this.state.resAction.labels} type="donut" width="300"   />
    {/* <div className='OverAll_lft'>

    </div>
    <div className='OverAll_rft'></div> */}

    </div>

          </CardContent></Card>

      </div>

  </div>

  <div className='hiTrust_table'>
    <div className='hiTrust_table_lft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
      <h5>Configuration  &#40; s &#41;</h5>

      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table'>
      <StyledTableCell >Rules</StyledTableCell>
      <StyledTableCell >Status</StyledTableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell className='budget_table'>{row.calories}</StyledTableCell>
     

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
   
    </div>
    <div className='hiTrust_table_rft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
        <div className='baseConfig_Header exclu'>
        <BaselineExclusion/>
        {/* <Button variant="contained" >View Exclusion</Button> */}
        </div>
      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table regulations_hitr '>
      <StyledTableCell >Regulations/Standards Source References</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows2.map((row,i) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {i+1} &#41; &nbsp;{row.name}
        </StyledTableCell>
      

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
 
    </div>
  </div>
</>}
{this.state.isDataEncryption && <>

<div className='baseConfig_Header'>
<Button variant="contained" onClick={this.overAllHtBlk}>Back</Button>

</div>
<div className='hitrust2_blk'>
      <div className='hitrust2_blk_lft'>
      <Card sx={{ minWidth: 275 }} className='card_hi' style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent className='card_con'>
      <h5 className='hitrust_heading'><span className='HiTrust_img'><img alt='hitrust_img' src={HitrustImg}/></span>Data Encryption At Rest</h5>
      {/* <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p> */}
      <div className='Hitrust_Con_cover'>
      <div className='Hitrust_Content'><span>Title :</span> <p>Data Encryption At Rest&#40;SK004&#41;</p></div>

<div className='Hitrust_Content'><span>Pass :</span> <p>3</p></div>
<div className='Hitrust_Content'><span>Fail :</span> <p>0</p></div>
<div className='Hitrust_Content'><span>Description :</span> <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p></div>
      </div>
     


      </CardContent></Card>
      </div>
      <div className='hitrust2_blk_rft'>

      <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent>
      <h5 className='hitrust_heading1'>  Graph Status </h5>
    <div className='OverAll'>
    {/* <OverallStatus/> */}
    <Chart style={{paddingTop:'2%'}} options={this.state.dataEncryp.options} series={this.state.dataEncryp.series} labels={this.state.dataEncryp.labels} type="donut" width="300"   />
    {/* <div className='OverAll_lft'>

    </div>
    <div className='OverAll_rft'></div> */}

    </div>

          </CardContent></Card>

      </div>

  </div>

  <div className='hiTrust_table'>
    <div className='hiTrust_table_lft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
      <h5>Configuration &#40; s &#41; </h5>

      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table'>
      <StyledTableCell >Rules</StyledTableCell>
      <StyledTableCell >Status</StyledTableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell className='budget_table'>{row.calories}</StyledTableCell>
     

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
   
    </div>
    <div className='hiTrust_table_rft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
        <div className='baseConfig_Header exclu'>
        <BaselineExclusion/>
        {/* <Button variant="contained" >View Exclusion</Button> */}
        </div>
      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table regulations_hitr '>
      <StyledTableCell >Regulations/Standards Source References</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows2.map((row,i) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {i+1} &#41; &nbsp;{row.name}
        </StyledTableCell>
      

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
 
    </div>
  </div>
</>}
{this.state.isroleBasedAccess && <>

<div className='baseConfig_Header'>
<Button variant="contained" onClick={this.overAllHtBlk}>Back</Button>

</div>
<div className='hitrust2_blk'>
      <div className='hitrust2_blk_lft'>
      <Card sx={{ minWidth: 275 }} className='card_hi' style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent className='card_con'>
      <h5 className='hitrust_heading'><span className='HiTrust_img'><img alt='hitrust_img' src={HitrustImg}/></span>Role Based Access Control</h5>
      {/* <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p> */}
      <div className='Hitrust_Con_cover'>
      <div className='Hitrust_Content'><span>Title :</span> <p>Role Based Access Control &#40;SK005&#41;</p></div>

<div className='Hitrust_Content'><span>Pass :</span> <p>2</p></div>
<div className='Hitrust_Content'><span>Fail :</span> <p>0</p></div>
<div className='Hitrust_Content'><span>Description :</span> <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p></div>
      </div>
     


      </CardContent></Card>
      </div>
      <div className='hitrust2_blk_rft'>

      <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent>
      <h5 className='hitrust_heading1'>  Graph Status </h5>
    <div className='OverAll'>
    {/* <OverallStatus/> */}
    <Chart style={{paddingTop:'2%'}} options={this.state.dataEncryp.options} series={this.state.dataEncryp.series} labels={this.state.dataEncryp.labels} type="donut" width="300"   />
    {/* <div className='OverAll_lft'>

    </div>
    <div className='OverAll_rft'></div> */}

    </div>

          </CardContent></Card>

      </div>

  </div>

  <div className='hiTrust_table'>
    <div className='hiTrust_table_lft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
      <h5>Configuration  &#40; s &#41;</h5>

      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table'>
      <StyledTableCell >Rules</StyledTableCell>
      <StyledTableCell >Status</StyledTableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell className='budget_table'>{row.calories}</StyledTableCell>
     

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
   
    </div>
    <div className='hiTrust_table_rft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
        <div className='baseConfig_Header exclu'>
        <BaselineExclusion/>
        {/* <Button variant="contained" >View Exclusion</Button> */}
        </div>
      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table regulations_hitr '>
      <StyledTableCell >Regulations/Standards Source References</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows2.map((row,i) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {i+1} &#41; &nbsp;{row.name}
        </StyledTableCell>
      

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
 
    </div>
  </div>
</>}
{this.state.isAuditLog && <>

<div className='baseConfig_Header'>
<Button variant="contained" onClick={this.overAllHtBlk}>Back</Button>

</div>
<div className='hitrust2_blk'>
      <div className='hitrust2_blk_lft'>
      <Card sx={{ minWidth: 275 }} className='card_hi' style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent className='card_con'>
      <h5 className='hitrust_heading'><span className='HiTrust_img'><img alt='hitrust_img' src={HitrustImg}/></span>Audit and Logging</h5>
      {/* <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p> */}
      <div className='Hitrust_Con_cover'>
      <div className='Hitrust_Content'><span>Title :</span> <p>Sk006</p></div>

<div className='Hitrust_Content'><span>Pass :</span> <p>0</p></div>
<div className='Hitrust_Content'><span>Fail :</span> <p>2</p></div>
<div className='Hitrust_Content'><span>Description :</span> <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p></div>
      </div>
     


      </CardContent></Card>
      </div>
      <div className='hitrust2_blk_rft'>

      <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent>
      <h5 className='hitrust_heading1'>  Graph Status </h5>
    <div className='OverAll'>
    {/* <OverallStatus/> */}
    <Chart style={{paddingTop:'2%'}} options={this.state.auditLog.options} series={this.state.auditLog.series} labels={this.state.auditLog.labels} type="donut" width="300"   />
    {/* <div className='OverAll_lft'>

    </div>
    <div className='OverAll_rft'></div> */}

    </div>

          </CardContent></Card>

      </div>

  </div>

  <div className='hiTrust_table'>
    <div className='hiTrust_table_lft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
      <h5>Configuration  &#40; s &#41;</h5>

      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table'>
      <StyledTableCell >Rules</StyledTableCell>
      <StyledTableCell >Status</StyledTableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell className='budget_table'>{row.calories}</StyledTableCell>
     

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
   
    </div>
    <div className='hiTrust_table_rft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
        <div className='baseConfig_Header exclu'>
        <BaselineExclusion/>
        {/* <Button variant="contained" >View Exclusion</Button> */}
        </div>
      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table regulations_hitr '>
      <StyledTableCell >Regulations/Standards Source References</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows2.map((row,i) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {i+1} &#41; &nbsp;{row.name}
        </StyledTableCell>
      

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
 
    </div>
  </div>
</>}
{this.state.isTransmissionProtection && <>

<div className='baseConfig_Header'>
<Button variant="contained" onClick={this.overAllHtBlk}>Back</Button>

</div>
<div className='hitrust2_blk'>
      <div className='hitrust2_blk_lft'>
      <Card sx={{ minWidth: 275 }} className='card_hi' style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent className='card_con'>
      <h5 className='hitrust_heading'><span className='HiTrust_img'><img alt='hitrust_img' src={HitrustImg}/></span>Transmission Protection</h5>
      {/* <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p> */}
      <div className='Hitrust_Con_cover'>
      <div className='Hitrust_Content'><span>Title :</span> <p>Sk006</p></div>

<div className='Hitrust_Content'><span>Pass :</span> <p>0</p></div>
<div className='Hitrust_Content'><span>Fail :</span> <p>1</p></div>
<div className='Hitrust_Content'><span>Description :</span> <p>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</p></div>
      </div>
     


      </CardContent></Card>
      </div>
      <div className='hitrust2_blk_rft'>

      <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'300px'}} >
      <CardContent>
      <h5 className='hitrust_heading1'>  Graph Status </h5>
    <div className='OverAll'>
    {/* <OverallStatus/> */}
    <Chart style={{paddingTop:'2%'}} options={this.state.transProt.options} series={this.state.transProt.series} labels={this.state.transProt.labels} type="donut" width="300"   />
    {/* <div className='OverAll_lft'>

    </div>
    <div className='OverAll_rft'></div> */}

    </div>

          </CardContent></Card>

      </div>

  </div>

  <div className='hiTrust_table'>
    <div className='hiTrust_table_lft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
      <h5>Configuration  &#40; s &#41; </h5>

      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table'>
      <StyledTableCell >Rules</StyledTableCell>
      <StyledTableCell >Status</StyledTableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell className='budget_table'>{row.calories}</StyledTableCell>
     

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
   
    </div>
    <div className='hiTrust_table_rft'>
    <Card sx={{ minWidth: 275 }} style={{padding:0,margin:'20px',height:'400px'}} >
      <CardContent>
        <div className='baseConfig_Header exclu'>
        <BaselineExclusion/>
        {/* <Button variant="contained" >View Exclusion</Button> */}
        </div>
      <TableContainer component={Paper}>
<Table sx={{ minWidth: 400 }} aria-label="customized table">
  <TableHead>
    <TableRow className='budgetReport_table regulations_hitr '>
      <StyledTableCell >Regulations/Standards Source References</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows2.map((row,i) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {i+1} &#41; &nbsp;{row.name}
        </StyledTableCell>
      

      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </CardContent></Card>
 
    </div>
  </div>
</>}
    </>

    )
  }
}
