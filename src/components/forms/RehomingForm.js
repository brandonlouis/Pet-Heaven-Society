import { TextField, Box, Grid, InputLabel, Select, MenuItem, FormControl, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormDataSvc from '../../firebaseService/formSvc'
import { v4 } from 'uuid'

export default function RehomingForm() {
    const navigate = useNavigate()
    const [parentName, setParentName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [rehomeReason, setRehomeReason] = useState('')
    const [type, setType] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [breed, setBreed] = useState('')
    const [name, setName] = useState('')
    const [imageUpload, setImageUpload] = useState('')
    const [notes, setNotes] = useState('')
    

    const submitForm = async (e) => {
        e.preventDefault()

        const uniqueID = v4()

        try {
            const imgData = await FormDataSvc.uploadAnimalImage(imageUpload, uniqueID) 
            const imgURL = await FormDataSvc.getAnimalImageURL(imgData.ref)

            const formData = {
                parentName,
                phoneNo,
                email,
                address,
                rehomeReason,
                'petDetails':{
                    type,
                    gender,
                    age,
                    breed,
                    name,
                    imgURL,
                    imgID: uniqueID,
                    notes
                }
            }

            await FormDataSvc.addForm(formData, 'rehome')
            alert('Form submitted successfully. We will contact you in 1-3 working days.')
        } catch (err) {
            console.log(err)
            alert('An error has occured. Please try again later.')
        }

        navigate('/services')
    }

    return (
        <>
        <div className='rehomeBanner animate__animated animate__fadeIn animate__fast animate__delay-1s' style={{width:'100%'}}>
            <h1 style={{color:'white'}}>Rehoming Form</h1>
        </div>

        <form onSubmit={submitForm} className='animate__animated animate__fadeInUp animate__fast animate__delay-1s'>
            <Box className='form' sx={{mt:'50px', display:'flex', flexDirection:'column'}}>
                <h2>Pet Parent's Particulars</h2>
                <Grid container spacing={3} className='particulars'>
                    <Grid item xs={12}>
                        <TextField label='Full Name' onChange={(e)=>setParentName(e.target.value)} fullWidth required/>
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
                    <Grid item xs={12}>
                        <TextField label='Reason for rehoming' onChange={(e)=>setRehomeReason(e.target.value)} fullWidth required multiline rows={5}/>
                    </Grid>
                </Grid>
                
                <h2 style={{marginTop:'50px'}}>Pet's Particulars</h2>
                <Grid container spacing={3} className='particulars'>
                    <Grid item xs={4}>
                        <FormControl fullWidth required>
                            <InputLabel>Type</InputLabel>
                            <Select label="Type" defaultValue='' onChange={(e)=>setType(e.target.value)}>

                                <MenuItem value={'Cat'}>Cat</MenuItem>
                                <MenuItem value={'Dog'}>Dog</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth required>
                            <InputLabel>Gender</InputLabel>
                            <Select label="Gender" defaultValue='' onChange={(e)=>setGender(e.target.value)}>

                                <MenuItem value={'Male'}>Male</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label='Age (years)' type='number' inputProps={{step:'0.1'}} onChange={(e)=>setAge(e.target.value)} fullWidth required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label='Breed' onChange={(e)=>setBreed(e.target.value)} fullWidth required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label='Name' onChange={(e)=>setName(e.target.value)} fullWidth required/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Notes (Health, Behaviour, etc.)' onChange={(e)=>setNotes(e.target.value)} fullWidth multiline rows={5}/>
                    </Grid>

                    <Grid item xs={12}>
                        <InputLabel sx={{mb:2}}>Image of Pet</InputLabel>
                        <input id='petImageUpload' type='file' accept='image/*' onChange={(e)=>setImageUpload(e.target.files[0])} required/>
                    </Grid>
                </Grid>

                <Button variant='contained' sx={{mt:'70px'}} size='large' type='submit'>Submit</Button>
            </Box>
        </form>
        </>
    )
}