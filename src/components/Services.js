import { Box, Button } from '@mui/material'
import React from 'react'

export default function Services() {

  return (
    <>
    <Box className='services' sx={{display:'flex', alignItems:'center', flexDirection:'column', mt:3}}>
        <h1>Our services</h1>
        
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', mt:5}}>
                <div style={{width:'48%'}}>
                    <h2>Adoption</h2>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                    <Button variant='contained' size='large' sx={{mt:2}} href='/Animals'>Meet the animals</Button>
                </div>
                <img src={require('../img/adoptSvc.jpg')} width='48%'/>
        </Box>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', mt:20}}>
                <img src={require('../img/rehomeSvc.png')} width='48%'/>
                <div style={{width:'48%'}}>
                    <h2>Rehoming</h2>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                    <Button variant='contained' size='large' sx={{mt:2}} href='/forms/RehomingForm'>Fill up form</Button>
                </div>
        </Box>
    </Box>
    </>
  )
}