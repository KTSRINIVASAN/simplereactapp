import React from 'react'
import './ComplianceSidebar.css'
import PaymentsIcon from '@mui/icons-material/Payments';
// import CreditScoreIcon from '@mui/icons-material/CreditScore';
// import SummarizeIcon from '@mui/icons-material/Summarize';
// import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <div className='sidebar'> 
        <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Services</h3>
             </div>
            <ul className='sidebarList'>
            <li className='sidebarListItem'> <NavLink to='/admin/tags' activeClassName ='active'> Tags</NavLink></li>
                <li className='sidebarListItem'> <NavLink to='/admin/AdLdap' activeClassName ='active'> AD/LDAP</NavLink></li>
                {/* <li className='sidebarListItem'> <NavLink to='/admin/tags' activeClassName ='active'> Services</NavLink></li> */}

                <li className='sidebarListItem'> <NavLink to='/admin/service' activeClassName ='active'>Services</NavLink></li>

                <li className='sidebarListItem'> <NavLink to='/admin/complianceexception' activeClassName ='active'> Compliance Exception</NavLink></li>
                <li className='sidebarListItem'> <NavLink to='/admin/complianceexclusion' activeClassName ='active'>Compliance Exclusion</NavLink></li>
                <li className='sidebarListItem'> <NavLink to='/admin/controls' activeClassName ='active'>Controls & Rules</NavLink></li>
                <li className='sidebarListItem'> <NavLink to='/admin/ciam' activeClassName ='active'>CIAM</NavLink></li>




             


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
