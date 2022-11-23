import { Box, Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AnimalGrid from './AnimalGrid'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function getWindowSize() {
  const {innerWidth} = window
  return {innerWidth}
}

export default function Home() {
    const [windowSize, setWindowSize] = useState(getWindowSize())
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return (
        <>
        <Box className='banner'>
            <Box sx={{width:'35%', marginLeft:'10%', display:'flex', alignItems:'center', color:'black'}}>
                <div className='animate__animated animate__fadeInUp animate__fast animate__delay-1s'>
                    <h1>Adopt and save a life today</h1>
                    <p>By choosing to adopt, you can give them a second chance in life. Sharing your life with an amazing new companion is just the beginning, as you're adding a loyal and loving companion to your family.</p>
                    <br></br>
                    <Button href='/Animals' variant='contained' size='large'>Adopt now</Button>
                </div>
            </Box>
            <Box sx={{width:'65%', display:'flex', alignItems:'flex-end'}}>
                <img className='bannerPets animate__animated animate__fadeInRight animate__delay-1s' src={require('../img/banners/banner.png')}  alt='bannerPets'/>
            </Box>
        </Box>

        <AnimationOnScroll animateOnce={true} animateIn='animate__animated animate__fadeInUp animate__fast'>
        <Box className='mission' sx={{mt:25}}>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item xs={5.7}>
                    <img src={require('../img/services.png')} width='100%' alt='serviceImg'/>
                </Grid>
                <Grid item xs={5.7}>
                    <h1>Our mission</h1>
                    <p>We are a group of ordinary but passionate people who believe that every pet has a story and deserves to live a happy and fulfilling life. Devoting our time and energy to providing them with the best lives possible, albeit for a limited amount of time.</p>
                    <br></br>
                    <Button href='/services' variant='contained' size='large'>Our services ⇀</Button>
                </Grid>
            </Grid>
        </Box>
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce={true} animateIn='animate__animated animate__fadeInUp animate__fast'>
        <Box className='howHelp'>
            <h1>How you can help</h1>
            <Grid container direction='row' justifyContent='space-evenly' alignItems='stretch'>
                <Grid item xs={3.5} className='gridItem'>
                    <img src={require('../img/icons/adopt.png')} alt='adoptLogo'></img>
                    <h2>Adopt </h2>
                    <p>Adopting from us not only saves an animal, but also helps us reduce the amount of time and resources we need to operate on a daily basis.</p>
                </Grid>
                <Grid item xs={3.5} className='gridItem'>
                    <img src={require('../img/icons/donate.png')} alt='donateLogo'></img>
                    <h2>Donate</h2>
                    <p>Every penny counts! As a non-profit organisation, your contributions will go a long way toward helping us provide better facility and care for the animals.</p>
                </Grid>
                <Grid item xs={3.5} className='gridItem'>
                    <img src={require('../img/icons/volunteer.png')} alt='volunteerLogo'></img>
                    <h2>Volunteer</h2>
                    <p>Have some free time and a passion for working with animals? Join our team as a volunteer, and who knows? Perhaps you'll decide to adopt one as well!</p>
                </Grid>
            </Grid>
        </Box>
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce={true} animateIn='animate__animated animate__fadeInUp animate__fast'>
        <Box className='animalsAvail' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1 style={{textAlign:'center'}}>Pets available for adoption</h1>
            {windowSize.innerWidth < 1000 ? <AnimalGrid results={2}/> : <AnimalGrid results={3}/>}
            <Button href='/Animals' variant='contained' size='large' style={{marginTop:50}}>See more ⇀</Button>
        </Box>
        </AnimationOnScroll>
        </>
    )
}