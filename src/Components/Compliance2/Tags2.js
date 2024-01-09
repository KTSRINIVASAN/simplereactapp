import { Button, Card, CardContent } from '@mui/material'
import React from 'react'
import WifiTetheringErrorIcon from '@mui/icons-material/WifiTetheringError';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export default function Tags2() {
  return (
    // <div>Tags2z</div>
    <>
    <div className='container_services'>
    <Card sx={{ minWidth: 75 }} className='ser_cards_single' style={{padding:0,margin:'20px'}} >
            <CardContent className='ser_card'>
            <div className='services_blk'>
             <span className='services_icon'><WifiTetheringErrorIcon style={{color:'rgba(0,0,0,0.6)'}} /></span>
           <h3>Service A</h3>
             <Button className='active_ser' variant="contained">Active</Button>
             <p>last seen: 28/09/2023 07.53pm</p>
              </div>
              </CardContent></Card>
              <Card sx={{ minWidth: 75 }} className='ser_cards_single' style={{padding:0,margin:'20px'}} >
            <CardContent className='ser_card'>
            <div className='services_blk'>
             <span className='services_icon serv2' ><MiscellaneousServicesIcon style={{color:'rgba(0,0,0,0.6)',}} /></span>
           <h3>Service B</h3>
             <Button className='active_ser' variant="contained">Active</Button>
             <p>last seen: 28/09/2023 07.53pm</p>
              </div>
              </CardContent></Card>
              <Card sx={{ minWidth: 75 }} className='ser_cards_single' style={{padding:0,margin:'20px'}} >
            <CardContent className='ser_card'>
            <div className='services_blk'>
             <span className='services_icon serv3'><WifiTetheringErrorIcon style={{color:'rgba(0,0,0,0.6)'}} /></span>
           <h3>Service C</h3>
             <Button className='inActive_ser' variant="contained">In Active</Button>
             <p>last seen: 28/09/2023 07.53pm</p>
              </div>
              </CardContent></Card>
</div>
  
    </>
  )
}
