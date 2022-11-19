import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function AdoptionForm() {

    const location = useLocation();

    return (
        <>
        <Box sx={{display:'flex'}}>
            <div className='adoptionBanner' style={{width:'100%', backgroundImage: `url(${require('../../img/adoptionAnimals/'+location.state.name.toLowerCase()+'.jpg')}`}}></div>
            <Box className='form' sx={{mt:'50px', ml:'0', display:'flex', flexDirection:'column'}}>
                <h2>Adopter's Particulars</h2>
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

                <Button variant='contained' sx={{mt:'70px'}} size='large'>Submit</Button>
            </Box>
        </Box>
        </>
    )
}