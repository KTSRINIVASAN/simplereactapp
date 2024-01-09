import React from 'react'
// import Costs from '../../costs'
import Sidebar from '../../Components/SIdebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Costsbud() {
  return (
    <div>

        <div className='containerz'>
    <Sidebar/>
    <div className='others'>
   <Outlet/>
    </div>
   </div>
    </div>
    
  )
}
