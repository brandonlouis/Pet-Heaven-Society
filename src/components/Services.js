import { Box, Button } from '@mui/material'
import React from 'react'

export default function Services() {

  return (
    <>
    <Box className='services' sx={{display:'flex', alignItems:'center', flexDirection:'column', mt:3}}>
        <h1 className='animate__animated animate__fadeIn animate__fast -1s'>Our services</h1>
        
        <Box className='animate__animated animate__fadeInLeft animate__fast animate__delay-1s' sx={{display:'flex', alignItems:'center', justifyContent:'space-between', mt:5}}>
                <div style={{width:'48%'}}>
                    <h2>Adoption</h2>
                    <p>Check out the list of adorable furry friends looking for new homes! Adopters must complete an online form before visiting, at which point we will do a thorough screening through a brief, casual face-to-face interview. This ensures that all of our animals are adopted into the best possible homes.</p>
                    <Button variant='contained' size='large' sx={{mt:2}} href='/Animals'>Meet the animals</Button>
                </div>
                <img src={require('../img/adoptSvc.jpg')} width='48%'  alt='adoptImg'/>
        </Box>
        <Box className='animate__animated animate__fadeInRight animate__fast animate__delay-1s' sx={{display:'flex', alignItems:'center', justifyContent:'space-between', mt:20}}>
                <img src={require('../img/rehomeSvc.png')} width='48%' alt='rehomeImg'/>
                <div style={{width:'48%'}}>
                    <h2>Rehoming</h2>
                    <p>We recognize that there are difficult situations that could force owners to rehome their pets, and it's never an easy choice. Applicants can fill up this online form and we will get back in touch within 1-3 working days. However, given our limited resources and space, we cannot guarantee that we will be able to take in your pet.</p>
                    <Button variant='contained' size='large' sx={{mt:2}} href='/forms/RehomingForm'>Fill up form</Button>
                </div>
        </Box>
    </Box>
    </>
  )
}