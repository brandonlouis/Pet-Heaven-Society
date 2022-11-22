import { Box, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AnimalGrid from './AnimalGrid'
import AnimalDataSvc from '../firebaseService/animalSvc'

export default function Animals() {
    const [animalData,setAnimalData]=useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [initType, setInitType] = useState([])
    const [initAge, setInitAge] = useState([])
    const [initBreed, setInitBreed] = useState([])
    const [initGender, setInitGender] = useState([])

    const [type, setType] = useState('')
    const [age, setAge] = useState('')
    const [breed, setBreed] = useState('')
    const [gender, setGender] = useState('')
    const [hdbApproved, setHDBApproved] = useState('')

    const fetchAnimals = async () => {
        const data = await AnimalDataSvc.getAnimals()
        setAnimalData(data)
        setIsLoading(false)
    }

    useEffect(()=>{
        fetchAnimals()

        var uniqueField = []
        animalData.map((e) => {
            if (uniqueField.indexOf(e.type) === -1) {
                uniqueField.push(e.type)
            }
        })
        setInitType(uniqueField.sort())
        uniqueField = []

        animalData.map((e) => {
            if (uniqueField.indexOf(e.age) === -1) {
                uniqueField.push(e.age)
            }
        })
        setInitAge(uniqueField.sort())
        uniqueField = []

        animalData.map((e) => {
            if (uniqueField.indexOf(e.breed) === -1) {
                uniqueField.push(e.breed)
            }
        })
        setInitBreed(uniqueField.sort())
        uniqueField = []

        animalData.map((e) => {
            if (uniqueField.indexOf(e.gender) === -1) {
                uniqueField.push(e.gender)
            }
        })
        setInitGender(uniqueField.sort())
        uniqueField = []

    },[isLoading])

    const typeFilter = (event) => {
        setType(event.target.value)
    }
    const ageFilter = (event) => {
        setAge(event.target.value)
    }
    const breedFilter = (event) => {
        setBreed(event.target.value)
    }
    const genderFilter = (event) => {
        setGender(event.target.value)
    }
    const hdbFilter = (event) => {
        setHDBApproved(event.target.value)
    }

    return (
        <>
        <Box className='animate__animated animate__fadeInLeft animate__fast' sx={{mx:'10%', mt:'50px'}}>
            <h1>Animals for adoption</h1>
            <Box sx={{display:'flex', alignItems:'center'}}>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Type</InputLabel>
                <Select value={type} label="Type" onChange={typeFilter}>

                <MenuItem value={''}>&nbsp;</MenuItem>
                {initType.map((e, index) => {
                    return (
                        <MenuItem key={index} value={e}>{e}</MenuItem>
                    )})
                }
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Age</InputLabel>
                <Select value={age} label="Age" onChange={ageFilter}>

                <MenuItem value={''}>&nbsp;</MenuItem>
                {initAge.map((e, index) => {
                    return (
                        <MenuItem key={index} value={e}>{e}</MenuItem>
                    )})
                }
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Breed</InputLabel>
                <Select value={breed} label="Breed" onChange={breedFilter}>

                <MenuItem value={''}>&nbsp;</MenuItem>
                {initBreed.map((e, index) => {
                    return (
                        <MenuItem key={index} value={e}>{e}</MenuItem>
                    )})
                }
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Gender</InputLabel>
                <Select value={gender} label="Gender" onChange={genderFilter}>

                <MenuItem value={''}>&nbsp;</MenuItem>
                {initGender.map((e, index) => {
                    return (
                        <MenuItem key={index} value={e}>{e}</MenuItem>
                    )})
                }
                </Select>
            </FormControl>

            <FormGroup sx={{ml: 3, minWidth: 100}}>
                <FormControlLabel control={<Switch color='success'/>} label="HDB Approved" />
            </FormGroup>
            </Box>
        </Box>

        <Box className='animalsAvail' sx={{mt:5}}>
            <AnimalGrid results={'all'} type={type}/>
        </Box>
        </>
    )
}