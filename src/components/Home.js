import { Box, Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AnimalGrid from './AnimalGrid'

function getWindowSize() {
  const {innerWidth} = window;
  return {innerWidth};
}

export default function Home() {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <>
        <Box className='banner'>
            <Box sx={{width:'35%', marginLeft:'10%', display:'flex', alignItems:'center', color:'black'}}>
                <div>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <br></br>
                    <Button href='/Animals' variant='contained' size='large'>Adopt now</Button>
                </div>
            </Box>
            <Box sx={{width:'65%', display:'flex', alignItems:'flex-end'}}>
                <img className='bannerPets' src={require('../img/banner.png')}/>
            </Box>
        </Box>

        <Box className='mission' sx={{mt:25}}>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item xs={5.7}>
                    <img src={require('../img/services.png')} width='100%'/>
                </Grid>
                <Grid item xs={5.7}>
                    <h1>Our mission</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <br></br>
                    <Button href='/services' variant='contained' size='large'>Our services ⇀</Button>
                </Grid>
            </Grid>
        </Box>

        <Box className='howHelp'>
            <h1>How you can help</h1>
            <Grid container direction='row' justifyContent='space-evenly' alignItems='stretch'>
                <Grid item xs={3.5} className='gridItem'>
                    <img src={require('../img/icons/adopt.png')}></img>
                    <h2>Adopt </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Grid>
                <Grid item xs={3.5} className='gridItem'>
                    <img src={require('../img/icons/donate.png')}></img>
                    <h2>Donate</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Grid>
                <Grid item xs={3.5} className='gridItem'>
                    <img src={require('../img/icons/volunteer.png')}></img>
                    <h2>Volunteer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Grid>
            </Grid>
        </Box>

        <Box className='animalsAvail' style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1 style={{textAlign:'center'}}>Pets available for adoption</h1>
            {windowSize.innerWidth < 1000 ? <AnimalGrid results={2}/> : <AnimalGrid results={3}/>}
            <Button href='/Animals' variant='contained' size='large' style={{marginTop:50}}>See more ⇀</Button>
        </Box>
        </>
    )
}