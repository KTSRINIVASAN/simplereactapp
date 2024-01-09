import React from 'react'
import ComplianceSidebar from '../SIdebar/ComplianceSidebar'
import { Outlet } from 'react-router-dom'

export default function Compliance() {
  return (
    <>
        <div className='containerz'>

<ComplianceSidebar/>
<div className='others'>
<Outlet/>
</div>
</div>
    </>
  )
}
