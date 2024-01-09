import { Container } from '@mui/material'
import React from 'react'
// import CiamImg from '../images/'
import Ciam from '../images/CImage.JPG'
import downArr from '../images/downArrow.png'


export default function CIAM() {
  return (
    <div>
            <Container maxWidth="xl">
    <h3 style={{fontSize:'20px',marginTop:'20px'}}>Converged Identity & Access Management</h3>
    <p> &#91; Unified Portal for Identity Governance Administration & Access Management &#93;</p>
<div className='Ciam_admin'>
  <p>Click the below Image to Redirect CIAM portal <img width='30px' height='30px' src={downArr} alt='downArr'/> </p>
<a href='https://secure-kloud.crossidentity.com/CIDSaas/default/user/weblogin?qsct=1689325600189' target='/blank'><img width='800px' height='400px' src={Ciam} alt='ciam' /></a>
</div>
  

</Container>
    </div>
  )
}
