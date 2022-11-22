import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FormDataSvc from '../../firebaseService/formSvc'

export default function AdoptionForm() {
    const location = useLocation()
    const navigate = useNavigate()
    const [adopterName, setAdopterName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [apptDate, setApptDate] = useState('')
    const [apptTime, setApptTime] = useState('')

    const submitForm = async (e) => {
        e.preventDefault()

        const formData = {
            adopterName,
            phoneNo,
            email,
            address,
            apptDate,
            apptTime,
            'interestedIn':{
                'animalName':location.state.name,
                'animalBreed':location.state.breed,
                'animalGender':location.state.gender,
                'imgURL':location.state.url
            }
        }

        try {
            await FormDataSvc.addForm(formData, 'adopt')
            alert('Form submitted successfully. We will contact you in 1-3 working days.')
        } catch (err) {
            console.log(err)
            alert('An error has occured. Please try again later.')
        }

        navigate('/animals')
    }

    return (
        <>
        <Box sx={{display:'flex', mr:'10%', width:'90%'}}>
            <div className='adoptionBanner animate__animated animate__fadeIn animate__fast animate__delay-1s' style={{width:'100%', backgroundImage: `url(${location.state.url}`}}></div>
            <form onSubmit={submitForm}>
                <Box className='animate__animated animate__fadeInRight animate__fast animate__delay-1s' sx={{mt:'50px', display:'flex', flexDirection:'column'}}>
                    <h2>Adopter's Particulars</h2>
                    <Grid container spacing={3} className='particulars'>
                        <Grid item xs={12}>
                            <TextField label='Full Name' onChange={(e)=>setAdopterName(e.target.value)} fullWidth required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label='Phone Number' type='tel' onChange={(e)=>setPhoneNo(e.target.value)} fullWidth required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label='Email' type='email' inputProps={{pattern:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$"}} onChange={(e)=>setEmail(e.target.value)} fullWidth required/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label='Address' onChange={(e)=>setAddress(e.target.value)} fullWidth required/>
                        </Grid>
                    </Grid>
                    
                    <h2 style={{marginTop:'25px'}}>Appointment</h2>
                    <Grid container spacing={3} className='particulars'>
                        <Grid item xs={6}>
                            <TextField label='Date' type='date' InputLabelProps={{shrink: true}} inputProps={{min: new Date().toISOString().split('T')[0]}} onChange={(e)=>setApptDate(e.target.value)} fullWidth required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label='Time' type='time' InputLabelProps={{shrink: true}} inputProps={{min:'08:00', max:'17:00'}} onChange={(e)=>setApptTime(e.target.value)} fullWidth required/>
                        </Grid>
                    </Grid>

                    <h2 style={{marginTop:'50px'}}>Pet's Particulars</h2>
                    <Grid container spacing={3} className='particulars'>
                        <Grid item xs={4}>
                            <TextField label='Type' value={location.state.type} inputProps={{readOnly: true}} disabled={true} fullWidth/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField label='Gender' value={location.state.gender} inputProps={{readOnly: true}} disabled={true} fullWidth/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField label='Age (years)' value={location.state.age} inputProps={{readOnly: true}} disabled={true} fullWidth/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label='Breed' value={location.state.breed} inputProps={{readOnly: true}} disabled={true} fullWidth/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label='Name' value={location.state.name} inputProps={{readOnly: true}} disabled={true} fullWidth/>
                        </Grid>
                    </Grid>

                    <Button variant='contained' sx={{mt:'70px'}} size='large' type='submit'>Submit</Button>
                </Box>
            </form>
        </Box>
        </>
    )
}