// import App from './App';
// import reportWebVitals from './reportWebVitals';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import {    NavLink, Outlet } from 'react-router-dom';
// import BarCh from './barChart';
// import LineChart from './LineChart';
import CustomizedTables from './Coustomtable2';
// import Cardz from './Card';
import { Box, CardContent, Container } from '@mui/material';
// import Card_mui from './Card_mui';
import CardMui from './Card_mui';
import Card from '@mui/material/Card';
import CostSrcBreadcrumb from './Breadcrums/costservicesBreadcrm';


function Costs(){
    return(
        <Container maxWidth="xl">
    
    <CostSrcBreadcrumb/>
        {/* <BrowserRouter> */}
       {/* <App /> */}
      
       <CardMui/>
        {/* <Cardz/> */}
        <Box>
        <Card sx={{ minWidth: 275 }} style={{margin:'20px 20px' , padding:'0'}}>
        <CardContent>
            <Box sx={{ display: 'flex'}}>
            <h5 style={{width:'200px'}}>Cost and Usage Graph</h5>
        <Box sx={{ display: 'flex', justifyContent: 'end' , alignContent: 'center',width:'1200px',margin: '20px 20px 20px -280px' }}>
       <ul className='chartHeader'>
          <li><NavLink to="/costs/costOfService/piechart" className= 'chart_menu' activeClassName ='active'><PieChartIcon/></NavLink></li>
          <li><NavLink to='/costs/costOfService/barchart'  className= 'chart_menu' activeClassName ='active'><BarChartIcon/></NavLink></li>
          <li><NavLink to='/costs/costOfService/linechart' className= 'chart_menu' activeClassName ='active'><SsidChartIcon/></NavLink></li>
        </ul>
  </Box>
     
            </Box>
      
      
      {/* <Route exact path='/' element={<App/>} />
      <Route path='/barchart' element={<BarCh/>}  />
           <Route path='/linechart' element={<LineChart/>}  /> */}
      
     <Outlet />
        </CardContent>
        </Card>
    
    {/* </BrowserRouter> */}
    <Card sx={{ minWidth: 275 }} style={{margin:'20px' , padding:'0'}} >
        <CardContent>
        <h5>Cost and Usage Breakdown</h5>
        <br/>
    <CustomizedTables />
    </CardContent>
    </Card>
        </Box>
       
    </Container>
    
    )
}

export default Costs;