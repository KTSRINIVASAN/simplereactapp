import React from 'react'
import'../Costs/CostOfSavings.css'
import { Box, Button, Container,  InputLabel, MenuItem } from '@mui/material'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CostSavingBreadcrumb from '../../Breadcrums/CostsavingBreadcrum'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { NavLink, Outlet } from 'react-router-dom';
import SsidChartIcon from '@mui/icons-material/SsidChart';
// import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function CostOfSaving() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);

  }

  const [age1, setAge1] = React.useState('');

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  const [age2, setAge2] = React.useState('');

  const handleChange2 = (event) => {
    setAge2(event.target.value);

  }
  const [age3, setAge3] = React.useState('');

  const handleChange3 = (event) => {
    setAge3(event.target.value);

  }
  return (
    <Container maxWidth="xl" >

      <div className='CostSaving'>
        <div className='CostSaving_lft' >
        <CostSavingBreadcrumb/>
      <br></br>
      <h5>AWS Cost Management</h5>
      <Box className='feature_card' >
          <Card sx={{ minWidth: 275 }}>
      <CardContent >
        
        <div className='cardBlk'>
            <div className='cardBlk_lft'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Current Selected Total Cost
        </Typography>
        <Typography variant="h5" component="div">
          $53.11
        </Typography>
            </div>
            <div className='cardBlk_rft' style={{backgroundColor:"rgb(252, 186, 3)"}}> <span className='card_icon' > <CreditScoreIcon className='card_icon' style={{color:'fff'}} /> </span> </div>

        </div>
       
      </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
      <CardContent >
        
        <div className='cardBlk'>
            <div className='cardBlk_lft'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Estimated Month End Cost
        </Typography>
        <Typography variant="h5" component="div">
          $35.11
        </Typography>
            </div>
            <div className='cardBlk_rft' style={{backgroundColor:"rgb(0, 113, 251)"}}> <span className='card_icon' > <WorkHistoryIcon className='card_icon' style={{color:'fff'}} /> </span> </div>

        </div>
       
      </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
      <CardContent >
        
        <div className='cardBlk'>
            <div className='cardBlk_lft'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Est.Saving Cost
        </Typography>
        <Typography variant="h5" component="div">
          $20.11
        </Typography>
            </div>
            <div className='cardBlk_rft' style={{backgroundColor:"rgb(252, 61, 3)"}}> <span className='card_icon' > <ManageAccountsIcon className='card_icon' style={{color:'fff'}} /> </span> </div>

        </div>
       
      </CardContent>
      </Card>
      </Box>
      <Card sx={{ minWidth: 275 }} style={{margin:'20px auto' , padding:'0', width:'875px'}}>
        <CardContent>
            <Box sx={{ display: 'flex'}}>
            <h5 style={{width:'200px'}}>Cost Overview</h5>
            <Box sx={{ display: 'flex', justifyContent: 'end' , alignContent: 'center',width:'1200px',margin: '20px 20px 20px -280px' }}>
       <ul className='chartHeader'>
          {/* <li><NavLink to="/costs/costOfSavings/piechart" className= 'chart_menu' activeClassName ='active'><PieChartIcon/></NavLink></li> */}
          <li><NavLink to='/costs/costOfSavings/barchart'  className= 'chart_menu' activeClassName ='active'><BarChartIcon/></NavLink></li>
          <li><NavLink to='/costs/costOfSavings/linechart' className= 'chart_menu' activeClassName ='active'><SsidChartIcon/></NavLink></li>
        </ul>
  </Box>
 
    
            </Box>
            <div >
  <Outlet/>
  </div>
            </CardContent>
            </Card>
        </div>
        <div className='CostSaving_rft'>
        <Card style={{position:'sticky', top:'165px', margin:'20px 0 0 0 '}}>
        <h5>Filter</h5>
          <CardContent style={{paddingTop:'0'}}>
          
          <Box style={{display:'flex', alignContent:'center', justifyContent:'center', flexDirection:'column', margin:'2px 0px'}}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Owner</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Org Acct 1</MenuItem>
          <MenuItem value={20}>Org Acct 2</MenuItem>
          <MenuItem value={30}>Org Acct 3</MenuItem>
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Business Unit</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age3}
          label="Age"
          onChange={handleChange3}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Finance</MenuItem>
          <MenuItem value={20}>HR</MenuItem>
          <MenuItem value={30}>HealthCare</MenuItem>
          <MenuItem value={40}>Retail</MenuItem>

        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Environment</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age2}
          label="Age"
          onChange={handleChange2}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Dev</MenuItem>
          <MenuItem value={20}>Staging</MenuItem>
          <MenuItem value={30}>UAT</MenuItem>
          <MenuItem value={30}>PROD</MenuItem>
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Period</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age1}
          onChange={handleChange1}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>2 Weeks</MenuItem>
          <MenuItem value={10}>1 Month</MenuItem>

          <MenuItem value={20}>3 Months</MenuItem>
          <MenuItem value={30}>6 Months</MenuItem>
          <MenuItem value={30}>1 Year</MenuItem>

        </Select>
      </FormControl>
      
        </Box>
        <Button variant="contained" style={{margin:'0 auto', display:'flex'}}>Apply</Button>
          </CardContent>
        </Card>
      
        </div>
      </div>

      


    </Container>
  )
}


// function UserGreeting(){
//   return <h1>user</h1>
// }

// function GuestGreeting(){
//   return <h1>guest</h1>
// }

// function Grettings(props){
//   const isLogged = props.isUser;

  
// }
