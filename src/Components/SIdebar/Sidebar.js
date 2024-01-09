import React from 'react'
import './Sidebar.css'
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SummarizeIcon from '@mui/icons-material/Summarize';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Cost by Tag</h3>
             </div>
            <ul className='sidebarList'>
            <li className='sidebarListItem'> <NavLink to='/costs/costOfSavings/barchart' activeClassName ='active'> <  PaymentsIcon style={{color:'#fff'}} /> Cost and Savings</NavLink></li>
                <li className='sidebarListItem'> <NavLink to='/costs/budget' activeClassName ='active'> <  PaymentsIcon style={{color:'#fff'}} /> Budget</NavLink></li>
                <li className='sidebarListItem'><NavLink to='/costs/budgetreport' activeClassName ='active'><SummarizeIcon style={{color:'#fff'}} /> Budget Reports</NavLink></li>
                <li className='sidebarListItem'> <NavLink to='/costs/costOfService/piechart' activeClassName ='active'><MiscellaneousServicesIcon style={{color:'#fff'}} /> Cost on Services</NavLink></li>
                <li className='sidebarListItem'><NavLink to='/costs/credit' activeClassName ='active'>< CreditScoreIcon  style={{color:'#fff'}} /> Credit</NavLink></li>


            </ul>
                    {/* <ul className='sidebarList'>
                    <li className='sidebarListItem'> <MiscellaneousServicesIcon style={{color:'#fff'}} /> <span style={{margin: '0 0 0px 10px ', color:'#fff'}}>Cost of Saving</span></li>

                <li className='sidebarListItem'>  <  PaymentsIcon style={{color:'#fff'}}  /> <span style={{margin: '0 0 0px 10px ', color:'#fff'}}>Budget</span> </li>
                <li className='sidebarListItem'><SummarizeIcon style={{color:'#fff'}} /><span style={{margin: '0 0 0px 10px ', color:'#fff'}}>Budget reports</span> </li>
                <li className='sidebarListItem'> <MiscellaneousServicesIcon style={{color:'#fff'}} /> <span style={{margin: '0 0 0px 10px ', color:'#fff'}}>Cost of Services</span></li>
                <li className='sidebarListItem'>< CreditScoreIcon  style={{color:'#fff'}} /> <span style={{margin: '0 0 0px 10px ' , color:'#fff'}}>Credit</span></li>


            </ul> */}
             </div>

     </div>
  )
}
