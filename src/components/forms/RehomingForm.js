import { TextField, Box, Grid, InputLabel, Select, MenuItem, FormControl, Button } from '@mui/material';
import React from 'react';

export default function RehomingForm() {


    return (
        <>
        <div className='rehomeBanner' style={{width:'100%'}}>
            <h1 style={{color:'white'}}>Rehoming Form</h1>
        </div>
        <Box className='form' sx={{mt:'50px', display:'flex', flexDirection:'column'}}>
            <h2>Pet Parent's Particulars</h2>
            <Grid container spacing={3} className='particulars'>
                <Grid item xs={6}>
                    <TextField label='First Name' fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField label='Last Name' fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField label='Phone Number' type='tel' fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField label='Email' type='email' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Address' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Reason for rehoming' fullWidth multiline rows={5}/>
                </Grid>
            </Grid>
            
            <h2 style={{marginTop:'50px'}}>Pet's Particulars</h2>
            <Grid container spacing={3} className='particulars'>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select label="Type">

                        <MenuItem value={'cat'}>Cat</MenuItem>
                        <MenuItem value={'dog'}>Dog</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select label="Gender">

                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <TextField label='Age (years)' type='number' fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField label='Breed' fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField label='Name' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Notes (Health, Behaviour, etc.)' fullWidth multiline rows={5}/>
                </Grid>

                <Grid item xs={12}>
                    <InputLabel sx={{mb:2}}>Images of Pet (jpg format only)</InputLabel>
                    <input id='petImageUpload' type='file' multiple accept='image/jpg'/>
                </Grid>
            </Grid>

            <Button variant='contained' sx={{mt:'70px'}} size='large'>Submit</Button>
        </Box>
        </>
    )
}