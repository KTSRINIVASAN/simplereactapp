import React from 'react'
import ComplianceSidebar2 from '../SIdebar/Compliance2Sidebar'
import { Outlet } from 'react-router-dom'

export default function Compliance2() {
  return (
<>
        <div className='containerz'>

<ComplianceSidebar2/>
<div className='others'>
<Outlet/>
</div>
</div>
    </>  )
}
