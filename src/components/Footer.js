import { Box } from '@mui/system'
import { Email, Call, Place  } from '@mui/icons-material'
import React from 'react'
import { IconButton } from '@mui/material'

export default function Footer() {
  return (
    <footer>
        <Box className='footerContent' sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>
                <a href='/'><img src={require('../img/logo-w.png')} width='140px'/></a>
            </div>
            <div className='footerMiddle'>
                <IconButton sx={{p:0,m:0}} href='https://www.facebook.com/'><img src={require('../img/icons/facebook.png')} width='40px'/></IconButton>
                <IconButton sx={{p:0,m:0,mx:'20px'}} href='https://www.twitter.com/'><img src={require('../img/icons/twitter.png')} width='40px'/></IconButton>
                <IconButton sx={{p:0,m:0}} href='https://www.instagram.com/'><img src={require('../img/icons/instagram.png')} width='40px'/></IconButton>
            </div>
            <div className='footerRight'>
                <p>Contact us:</p>
                <p>contact@phs.com&nbsp;&nbsp;<Email/></p>
                <p>+65 6123 4567&nbsp;&nbsp;<Call/></p>
                <p>8 Sungei Kadut Street 3, Singapore 729154&nbsp;&nbsp;<Place/></p>
            </div>
        </Box>
    </footer>
  )
}