// import { Card, Typography, Box } from "@mui/material";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import React from "react";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { PropTypes } from "@mui/material";
import './featured.css'


function Cardz(){

    return(
      <div>
         <div className="featured">
                  <div className="featuredItem">
                   <span className="featuredTitle">Revanue</span>
                  <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">CreditScore
                    <span className='featuredIconbg' style={{backgroundColor: "#fcba03"}}>    <CreditScoreIcon className='featuredIcon'/></span>
                                        </span>
                  </div>
                  <span className='featuredSub'>Compared to last month</span>
                  </div>

                  <div className="featuredItem">
                   <span className="featuredTitle">Revanue2</span>
                  <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,415</span>
                    <span className="featuredMoneyRate">ManageAccounts
                                 <span className='featuredIconbg' style={{backgroundColor: "#0071fb"}}>  <ManageAccountsIcon className='featuredIcon' /></span>     
                                        </span>
                  </div>
                  <span className='featuredSub'>Compared to last month</span>
                  </div>

                  <div className="featuredItem">
                   <span className="featuredTitle">Revanue3</span>
                  <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,415</span>
                    <span className="featuredMoneyRate">WorkHistory
                    <span className='featuredIconbg' style={{backgroundColor: "#fc3d03"}}>   <WorkHistoryIcon className='featuredIcon' /></span>
                                        </span>
                  </div>
                  <span className='featuredSub'>Compared to last month</span>
                  </div>

                  <div className="featuredItem">
                   <span className="featuredTitle">Revanue4</span>
                  <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">CloudUpload
                    <span className='featuredIconbg' style={{backgroundColor: "#2bb36a"}} >       <CloudUploadIcon className='featuredIcon'/></span>
                                        </span>
                  </div>
                  <span className='featuredSub'>Compared to last month</span>
                  </div>
        </div>
       
      </div>
       
        
    )
  
}

export default Cardz;