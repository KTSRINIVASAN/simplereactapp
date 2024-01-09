import React from 'react'
import AdminSidebar from '../SIdebar/AdminSidebar'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <>
    <div className='containerz'>

{/* <ComplianceSidebar/> */}
<AdminSidebar/>
<div className='others'>
<Outlet/>
</div>
</div>
</>  )
}
