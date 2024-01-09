import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './Card2.css'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
// import React from "react";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function CardMui() {
  return (
    <Box className='feature_card'>
          <Card sx={{ minWidth: 275 }}>
      <CardContent >
        
        <div className='cardBlk'>
            <div className='cardBlk_lft'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Total Cost
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
      <CardContent>
        
        <div className='cardBlk'>
            <div className='cardBlk_lft'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Average Cost
        </Typography>
        <Typography variant="h5" component="div">
          $8.7
        </Typography>
            </div>
            <div className='cardBlk_rft' style={{backgroundColor:"#0071fb"}}> <span className='card_icon' > < WorkHistoryIcon className='card_icon' style={{color:'fff'}} /> </span> </div>

        </div>
       
      </CardContent>
     
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <div className='cardBlk'>
            <div className='cardBlk_lft'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Service Count
        </Typography>
        <Typography variant="h5" component="div">
          7
        </Typography>
            </div>
            <div className='cardBlk_rft' style={{backgroundColor:"rgb(252, 61, 3)"}}> <span className='card_icon' > <ManageAccountsIcon className='card_icon' style={{color:'fff'}} /> </span> </div>

        </div>
       
      </CardContent>
     
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent >
        
        <div className='cardBlk'>
            <div className='cardBlk_lft'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Current Month
        </Typography>
        <Typography variant="h5" component="div">
          May 
        </Typography>
            </div>
            <div className='cardBlk_rft' style={{backgroundColor:"rgb(43, 179, 106)"}}> <span className='card_icon' > <CloudUploadIcon className='card_icon' style={{color:'fff'}} /> </span> </div>

        </div>
       
      </CardContent>
     
    </Card>
    </Box>
  
  );
}