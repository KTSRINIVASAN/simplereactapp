import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material'
import React from 'react'
import CompHitrustBreadcrumb from '../../Breadcrums/CompHitrustBreadcrum'
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import Typography from '@mui/material/Typography';

// import CostSrcBreadcrumb from '../../Breadcrums/costservicesBreadcrm'
// import ComplianceSidebar from '../SIdebar/ComplianceSidebar'
// import { Outlet } from 'react-router-dom'
// import Sidebar from '../SIdebar/Sidebar'
// import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
// import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';

import './Hitrust.css'
// import Chart from "react-apexcharts";

// import PieHitrust from './PieHitrust'
// import Hitrusttable from './HitrustTable'
import { Link, Outlet } from 'react-router-dom';
import { red,green,blue,amber } from '@mui/material/colors';



export default function Hitrust1() {


const color_red = red[500];
const color_green = green[500];
const color_blue = blue[700];

// const color_yellow = yellow[500];
const color_amber = amber[600]


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

  // const [state1] = useState({
  //   options: { labels: ['service A', 'service B', 'service C', 'service D', 'service E']},
  //     series: [44, 55, 41, 17, 15],bar: [44, 55, 41, 17, 15]



  // })

  return (
    <div>

      <Container maxWidth="xl">
        {/* <CostSrcBreadcrumb/> */}
        <CompHitrustBreadcrumb />
        <br />

        <div className='hitrust_blk'>
          <div className='hitrust_blk_lft'>
          <Card sx={{ minWidth: 275 }} className='hitrust_ent' style={{ height: 285 }} >
              <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom style={{ padding: '7px 12px' }}>
                Overall Status
              </Typography>
              <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <span className='hitrust_icon'>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <Typography color="inherit" style={{ fontWeight: 700 }}>Overall Status of Controls for HITRUST Compliance </Typography><br />
                        {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '} */}
                        {/* {"This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area."}<br/> */}
                        <span style={{ fontSize: 14 }}>This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area.</span>
                      </React.Fragment>
                    }
                  >
                    {/* <Button>HTML</Button> */}
                    <ErrorOutlineRoundedIcon style={{ fontSize: '22px', color: 'rgba(0,0,0,0.4)', cursor: 'pointer' }} />
                  </HtmlTooltip>
                </span>


                <Typography sx={{ fontSize: 34,paddingBottom:'8px' }}  >
                  <div className='overall_statusCard' style={{marginBottom:'12px'}}>
                  <span style={{ fontSize: 15 }}>Pass</span> <span style={{ color: 'green' }}>28</span>  
                  </div>
                  <div className='overall_statusCard'>
                    <span style={{ fontSize: 15 }}>Fail</span><span style={{ color: 'red' }}>72</span>
                  </div>
                </Typography> 
               <Box style={{display:'flex'}}>
                 <Link to="/compliance/hitrust/overallStatus">
                <Button variant="contained" style={{width:'100px', marginRight:'10px',backgroundColor:color_amber}}>
                  View
                </Button></Link>
                <Button variant="contained" style={{ backgroundColor:color_green}}>
                  Refresh
                </Button>
               </Box>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{ padding: '7px 12px' }}>
                  last refreshed: 7/10/2023 16:57
                </Typography>




              </CardContent>
            </Card>
          </div>
          <div className='hitrust_blk_rft'>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }} >
                  <Card sx={{ minWidth: 150 }} className='Hitrust_card hitrust_ent1'>
                    <Link to="/compliance/hitrust/BaselineConfig">

                      <CardContent style={{padding:'0'}}>
                        <span className='hitrust_icon'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit" style={{ fontWeight: 700 }}>Baseline Configuration </Typography><br />
                                {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '} */}
                                {/* {"This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area."}<br/> */}
                                <span style={{ fontSize: 14 }}>The organization maintains information systems according to a current baseline configuration and configures system security parameters to prevent misuse. </span><br /><br />
                                <span style={{ fontSize: 14 }}> Vendor supplied software used in operational systems is maintained at a level supported by the supplier and uses the latest version of web browsers on operational systems to take advantage of the latest security functions in the application.</span>
                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
                        <div className='hitrust_comp_solo'>
                        <div className='hitrust_comp_solo_lft'>
                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        Baseline Configuration
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk001
                        </Typography>
                        </div>
                        <div className='hitrust_comp_solo_rft' style={{backgroundColor:color_amber}}>
                    
                               <div ><span style={{ fontSize: 15 }}>Pass 4</span> </div>
                               {/* <span style={{border:'1px solid #fff', width:'100%'}}></span> */}
                        <div><span style={{ fontSize: 15 }}>Fail 1</span></div>
                          
                       
                        </div>
                        </div>
                        {/* <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                          BaseLine Configration
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk001
                        </Typography>
                        <Typography variant="h5" component="div">
                          <span style={{ fontSize: 15 }}>Pass</span> <span style={{ color: 'green' }}>4</span>  <span style={{ fontSize: 15 }}>Fail</span><span style={{ color: 'red' }}>1</span>
                        </Typography> */}
                      </CardContent></Link>
                  </Card>
                  <Card sx={{ minWidth: 150 }}  className='Hitrust_card hitrust_ent1'>
                    <Link to="/compliance/hitrust/NetworkComp">

                      <CardContent style={{padding:0}}>
                      <span className='hitrust_icon'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit" style={{ fontWeight: 700 }}>Network Compliance </Typography><br />
                                {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '} */}
                                {/* {"This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area."}<br/> */}
                                <span style={{ fontSize: 14 }}>The organization's security gateways (e.g., firewalls)  </span><br />
                                <span style={{ fontSize: 14 }}>(i) enforce security policies; </span><br />
                                <span style={{ fontSize: 14 }}>(ii) are configured to filter traffic between domains; </span><br />
                                <span style={{ fontSize: 14 }}>(iii) block unauthorized access; </span><br />
                                <span style={{ fontSize: 14 }}>(iv) are used to maintain segregation between internal wired, internal wireless, and external network segments (e.g., the Internet), including DMZs; and, </span><br />
                                <span style={{ fontSize: 14 }}>(v) enforce access control policies for each of the domains.</span><br />
                                {/* <span style={{fontSize:14 }}></span><br/> */}
                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
                        <div className='hitrust_comp_solo'>
                        <div className='hitrust_comp_solo_lft'>
                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                          Network Compliance
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk002
                        </Typography>
                        </div>
                        <div className='hitrust_comp_solo_rft' style={{backgroundColor:color_blue}}>
                    
                               <div ><span style={{ fontSize: 15 }}>Pass 1</span> </div>
                               {/* <span style={{border:'1px solid #fff', width:'100%'}}></span> */}
                        <div><span style={{ fontSize: 15 }}>Fail 1</span></div>
                          
                       
                        </div>
                        </div>
                       
                      
                        {/* <Typography variant="h5" component="div">
                          <span style={{ fontSize: 15 }}>Pass</span> <span style={{ color: 'green' }}>1</span>  <span style={{ fontSize: 15 }}>Fail</span><span style={{ color: 'red' }}>1</span>
                        </Typography> */}
                      </CardContent> </Link>
                  </Card>
                  <Card sx={{ minWidth: 150 }} className='Hitrust_card hitrust_ent1' >
                    <Link to="/compliance/hitrust/ResAccess">
                      <CardContent style={{padding:0}}>
                        <span className='hitrust_icon'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit" style={{ fontWeight: 700 }}>Restricted Access for Actions </Typography><br />
                                {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '} */}
                                {/* {"This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area."}<br/> */}
                                <span style={{ fontSize: 14 }}>The organization restricts access to privileged functions and all security-relevant information. </span><br /><br />

                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
                        <div className='hitrust_comp_solo'>
                        <div className='hitrust_comp_solo_lft'>
                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        Restricted Access for Actions 
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk003
                        </Typography>
                        </div>
                        <div className='hitrust_comp_solo_rft' style={{backgroundColor:color_red}}>
                    
                               <div ><span style={{ fontSize: 15 }}>Pass 1</span> </div>
                               {/* <span style={{border:'1px solid #fff', width:'100%'}}></span> */}
                        <div><span style={{ fontSize: 15 }}>Fail 2</span></div>
                          
                       
                        </div>
                        </div>
                        {/* <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                          RA for Action
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk003
                        </Typography>
                        <Typography variant="h5" component="div">
                          <span style={{ fontSize: 15 }}>Pass</span> <span style={{ color: 'green' }}>1</span>  <span style={{ fontSize: 15 }}>Fail</span><span style={{ color: 'red' }}>2</span>
                        </Typography> */}
                      </CardContent></Link>
                  </Card>
                  <Card sx={{ minWidth: 150 }} className='Hitrust_card hitrust_ent1' >
                    <Link to="/compliance/hitrust/Sk004">

                      <CardContent style={{padding:0}}>
                        <span className='hitrust_icon'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit" style={{ fontWeight: 700 }}>Data Encryption At Rest</Typography><br />
                                {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '} */}
                                {/* {"This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area."}<br/> */}
                                <span style={{ fontSize: 14 }}>Covered information is encrypted when stored in non-secure areas and, if not encrypted at rest, the organization documents its rationale.</span><br /><br />

                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
                        <div className='hitrust_comp_solo'>
                        <div className='hitrust_comp_solo_lft'>
                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        Data Encryption At Rest
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk004
                        </Typography>
                        </div>
                        <div className='hitrust_comp_solo_rft' style={{backgroundColor:color_green}}>
                    
                               <div ><span style={{ fontSize: 15 }}>Pass 3</span> </div>
                               {/* <span style={{border:'1px solid #fff', width:'100%'}}></span> */}
                        <div><span style={{ fontSize: 15 }}>Fail 0</span></div>
                          
                       
                        </div>
                        </div>
                        
                        {/* <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                          Data Encryption At Rest
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk004
                        </Typography>
                        <Typography variant="h5" component="div">
                          <span style={{ fontSize: 15 }}>Pass</span> <span style={{ color: 'green' }}>3</span>  <span style={{ fontSize: 15 }}>Fail</span><span style={{ color: 'red' }}>0</span>
                        </Typography> */}
                      </CardContent></Link>
                  </Card>
                  
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', margin: '25px 0 0 0' }}>
                  <Card sx={{ minWidth: 150 }}  className='Hitrust_card hitrust_ent1'>
                    <Link to="/compliance/hitrust/Sk005">

                      <CardContent style={{padding:0}}>
                        <span className='hitrust_icon'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit" style={{ fontWeight: 700 }}> Role Based Access Control</Typography><br />
                                {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '} */}
                                {/* {"This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area."}<br/> */}
                                <span style={{ fontSize: 14 }}>Role-based access control is implemented and capable of mapping each user to one or more roles, and each role to one or more system functions.</span><br /><br />

                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
                        <div className='hitrust_comp_solo'>
                        <div className='hitrust_comp_solo_lft'>
                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        Role Based Access Control
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk005
                        </Typography>
                        </div>
                        <div className='hitrust_comp_solo_rft' style={{backgroundColor:color_amber}}>
                    
                               <div ><span style={{ fontSize: 15 }}>Pass 2</span> </div>
                               {/* <span style={{border:'1px solid #fff', width:'100%'}}></span> */}
                        <div><span style={{ fontSize: 15 }}>Fail 0</span></div>
                          
                       
                        </div>
                        </div>
                        {/* <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                          RB Access Control
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk005
                        </Typography>
                        <Typography variant="h5" component="div">
                          <span style={{ fontSize: 15 }}>Pass</span> <span style={{ color: 'green' }}>2</span>  <span style={{ fontSize: 15 }}>Fail</span><span style={{ color: 'red' }}>0</span>
                        </Typography> */}
                      </CardContent></Link>
                  </Card>
                  <Card sx={{ minWidth: 150 }} className='Hitrust_card hitrust_ent1' style={{ marginLeft: '12px' }}>
                    <Link to="/compliance/hitrust/Sk006">

                      <CardContent  style={{padding:0}}>
                        <span className='hitrust_icon'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit" style={{ fontWeight: 700 }}>Audit and Logging</Typography><br />
                                {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '} */}
                                {/* {"This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area."}<br/> */}
                                <span style={{ fontSize: 14 }}>The organization ensures proper logging is enabled in order to audit administrator activities; and reviews system administrator and operator logs on a regular basis.</span><br /><br />

                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
                        <div className='hitrust_comp_solo'>
                        <div className='hitrust_comp_solo_lft'>
                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        Audit and Logging
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk006
                        </Typography>
                        </div>
                        <div className='hitrust_comp_solo_rft' style={{backgroundColor:color_blue}}>
                    
                               <div ><span style={{ fontSize: 15 }}>Pass 0</span> </div>
                               {/* <span style={{border:'1px solid #fff', width:'100%'}}></span> */}
                        <div><span style={{ fontSize: 15 }}>Fail 2</span></div>
                          
                       
                        </div>
                        </div>
                        {/* <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                          Audit and Logging
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          SK006
                        </Typography>
                        <Typography variant="h5" component="div">
                          <span style={{ fontSize: 15 }}>Pass</span> <span style={{ color: 'green' }}>0</span>  <span style={{ fontSize: 15 }}>Fail</span><span style={{ color: 'red' }}>2</span>
                        </Typography> */}
                      </CardContent></Link>
                  </Card>
                  <Card sx={{ minWidth: 150 }} className='Hitrust_card hitrust_ent1' style={{ marginLeft: '14px' }}>
                    <Link to="/compliance/hitrust/Sk007">

                      <CardContent  style={{padding:0}}>
                        <span className='hitrust_icon'>
                          <HtmlTooltip
                            title={
                              <React.Fragment>
                                <Typography color="inherit" style={{ fontWeight: 700 }}> Transmission Protection
                                </Typography><br />
                                {/* <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '} */}
                                {/* {"This is an overall compliance score weighted based on Industry defined criteria for HITRUST compliance. Refer below for a compliance posture of an individual domain area."}<br/> */}
                                <span style={{ fontSize: 14 }}>The organization ensures proper logging is enabled in order to audit administrator activities; and reviews system administrator and operator logs on a regular basis.</span><br /><br />

                              </React.Fragment>
                            }
                          >
                            {/* <Button>HTML</Button> */}
                            <ErrorOutlineRoundedIcon style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }} />
                          </HtmlTooltip>
                        </span>
                        <div className='hitrust_comp_solo'>
                        <div className='hitrust_comp_solo_lft'>
                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        Transmission Protection
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          Sk007
                        </Typography>
                        </div>
                        <div className='hitrust_comp_solo_rft' style={{backgroundColor:color_red}}>
                    
                               <div ><span style={{ fontSize: 15 }}>Pass 0</span> </div>
                               {/* <span style={{border:'1px solid #fff', width:'100%'}}></span> */}
                        <div><span style={{ fontSize: 15 }}>Fail 1</span></div>
                          
                       
                        </div>
                        </div>
                        {/* <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                          Transmission Protection
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          SK007
                        </Typography>
                        <Typography variant="h5" component="div">
                          <span style={{ fontSize: 15 }}>Pass</span> <span style={{ color: 'green' }}>0</span>  <span style={{ fontSize: 15 }}>Fail</span><span style={{ color: 'red' }}>1</span>
                        </Typography> */}
                      </CardContent></Link>
                  </Card>

                </Box>

            {/* <Card sx={{ minWidth: 275 }}  >

              <CardContent>

               
              </CardContent></Card> */}
          </div>
        </div>
        <Outlet />


      </Container>
    </div>
  )
}
