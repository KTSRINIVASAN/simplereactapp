import React from 'react'
// import BudgetReportBreadcrumb from '../../Breadcrums/BudgetReportBudgetcrum'
import { Box,  Card, CardContent, Container, Typography } from '@mui/material'
import CreditBreadcrumb from '../../Breadcrums/CreditBreadcrum'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
// import React from "react";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CreditTables from './CreditTable';
import DonutChart from '../../Donutchart';
import CreditDialog from './CreditDialog';

export default function Credit() {
  return (
    <Container maxWidth="xl">
      <CreditBreadcrumb />
      <br/>
      <h5>Summary</h5>
    <div>
    
    <Box className='feature_card'>
  
<Card sx={{ minWidth: 275 }} >
  <CardContent >

    <div className='cardBlk'>
      <div className='cardBlk_lft'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Credit Remaining
        </Typography>
        <Typography variant="h5" component="div">
          $20
        </Typography>
      </div>
      <div className='cardBlk_rft' style={{ backgroundColor: "rgb(252, 186, 3)" }}> <span className='card_icon' > <CreditScoreIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

    </div>

  </CardContent>

</Card>
<Card sx={{ minWidth: 275 }}>
  <CardContent >

    <div className='cardBlk'>
      <div className='cardBlk_lft'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Credit Used
        </Typography>
        <Typography variant="h5" component="div">
          $33.11
        </Typography>
      </div>
      <div className='cardBlk_rft' style={{ backgroundColor: "rgb(0, 113, 251)" }}> <span className='card_icon' > <ManageAccountsIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

    </div>

  </CardContent>

</Card>
<Card sx={{ minWidth: 275 }}>
  <CardContent >

    <div className='cardBlk'>
      <div className='cardBlk_lft'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Total Credit
        </Typography>
        <Typography variant="h5" component="div">
          $53.11
        </Typography>
      </div>
      <div className='cardBlk_rft' style={{ backgroundColor: "rgb(252, 61, 3)" }}> <span className='card_icon' > <WorkHistoryIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

    </div>

  </CardContent>

</Card>
</Box>
    </div>
    <Box className='feature_card'>
    <Card sx={{ minWidth: 275 }}>
  <CardContent >
  <Box style={{width:'965px'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
          <div>
          <h5>Credit</h5>
          </div>
          <div style={{display:'flex'}}>
            <CreditDialog/>
          {/* <Button variant="contained"> Create Budget</Button> */}
          {/* <BudgetReportDialog/> */}
          {/* <Button variant="contained" color="error" style={{margin:'0 0 0 10px'}}> Delete</Button> */}
          {/* <BudgetBootstrapModal/> */}
          </div>
          </div>
         
        
        <br></br>
        {/* <BudgetTable/> */}
        {/* <Budget2tables/> */}
        <CreditTables/>
        </Box>


  </CardContent>
  </Card>
    </Box>
    <Box className='feature_card'  >
    <Card sx={{ minWidth: 275 }} style={{width:'1000px', marginBottom:'25px'}}>
  <CardContent >  
    <h5>Credit Graph</h5>
    <DonutChart/></CardContent>
  </Card>
    
    </Box>
    
    </Container>



  )
}
