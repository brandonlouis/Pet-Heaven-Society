import { Box } from '@mui/system'
import { Email, Call, Place  } from '@mui/icons-material'
import React from 'react'
import { IconButton } from '@mui/material'

export default function Footer() {
  return (
    <footer>
        <Box className='footerContent' sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div>
                <a href='/'><img src={require('../img/branding/logo-w.png')} width='140px' alt='logo'/></a>
            </div>
            <div className='footerMiddle'>
                <IconButton sx={{p:0,m:0}} href='https://www.facebook.com/'><img src={require('../img/icons/facebook.png')} width='40px' alt='fbLogo'/></IconButton>
                <IconButton sx={{p:0,m:0,mx:'20px'}} href='https://www.twitter.com/'><img src={require('../img/icons/twitter.png')} width='40px' alt='twitterLogo'/></IconButton>
                <IconButton sx={{p:0,m:0}} href='https://www.instagram.com/'><img src={require('../img/icons/instagram.png')} width='40px' alt='igLogo'/></IconButton>
            </div>
            <div className='footerRight'>
                <p>Contact us:</p>
                <a href={"mailto:contact@phs.com"}><p>contact@phs.com&nbsp;&nbsp;<Email/></p></a>
                <a href={"tel:+6561234567"}><p>+65 6123 4567&nbsp;&nbsp;<Call/></p></a>
                <a href='https://goo.gl/maps/mmALZ21PDxB6G97y7' target='_blank' rel="noreferrer"><p>8 Sungei Kadut Street 3, Singapore 729154&nbsp;&nbsp;<Place/></p></a>
            </div>
        </Box>
    </footer>
  )
}