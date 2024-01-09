import { Box, Button, Card, CardContent, Container } from '@mui/material'
import React from 'react'
import BudgetBreadcrumb from '../../Breadcrums/BudgetBreadcrum'
// import BudgetTable from './BudgetTable'
// import BudgetBootstrapModal from './BudgetBootstrapModal'
import Budget2tables from './Budget2tables'
import BudgetreportDialog from './BudgetreportDialog'
// import BudgetReport from './BudgetReport'
// import BudgetDialog from './BudgetDialog'
// import Budget3table from './Budget3tables'

export default function Budget() {
  return (
    <Container maxWidth="xl" >
    <BudgetBreadcrumb/>
    <Box className='feature_card'>
          <Card sx={{ minWidth: 275 }}>
      <CardContent >
        <Box style={{width:'1000px'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
          <div>
          <h5>Budget Overview</h5>
          </div>
          <div style={{display:'flex', justifyContent:'space-between'}}>
       
          <BudgetreportDialog/>
          <Button variant="contained" color="error" style={{margin:'0 0 0 10px'}}> Delete</Button>
          </div>
          </div>
         
        
        <br></br>
        {/* <BudgetTable/> */}
        <Budget2tables/>
        {/* <Budget3table/> */}
        </Box>
     
        </CardContent>
        </Card>
        </Box>
    </Container>
    
  )
}
