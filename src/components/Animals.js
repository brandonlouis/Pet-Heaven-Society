import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import AnimalGrid from './AnimalGrid';

export default function Animals() {
    const [type, setType] = React.useState('');
    const [age, setAge] = React.useState('');
    const [breed, setBreed] = React.useState('');
    const [gender, setGender] = React.useState('');

    const typeFilter = (event) => {
        setType(event.target.value);
    };

    const ageFilter = (event) => {
        setAge(event.target.value);
    };

    const breedFilter = (event) => {
        setBreed(event.target.value);
    };

    const genderFilter = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
        <Box sx={{mx:'10%', mt:'50px'}}>
            <h1>Animals for adoption</h1>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Type</InputLabel>
                <Select
                value={type}
                label="Type"
                onChange={typeFilter}
                >

                <MenuItem value={''}>&nbsp;</MenuItem>
                <MenuItem value={'cat'}>Cat</MenuItem>
                <MenuItem value={'dog'}>Dog</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Age</InputLabel>
                <Select
                value={age}
                label="Age"
                onChange={ageFilter}
                >

                <MenuItem value={''}>&nbsp;</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Breed</InputLabel>
                <Select
                value={breed}
                label="Breed"
                onChange={breedFilter}
                >

                <MenuItem value={''}>&nbsp;</MenuItem>
                <MenuItem value={'tabby'}>Tabby</MenuItem>
                <MenuItem value={'korat'}>Korat</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Gender</InputLabel>
                <Select
                value={gender}
                label="Gender"
                onChange={genderFilter}
                >

                <MenuItem value={''}>&nbsp;</MenuItem>
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
                </Select>
            </FormControl>
        </Box>

        <Box className='animalsAvail' sx={{mt:5}}>
            <AnimalGrid key={type} results={'all'} type={type} gender={gender}/>
        </Box>
        </>
    )
}