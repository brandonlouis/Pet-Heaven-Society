import { Female, Male } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimalDataSvc from '../firebaseService/animalSvc'

const AnimalGrid  = ({ results }) => {
    const [animalData,setAnimalData]=useState([])

    const fetchAnimals = async () => {
        const data = await AnimalDataSvc.getAnimals()
        setAnimalData(data)
    }

    if (results === 'all') {
        results = animalData.length
    }

    useEffect(()=>{
        fetchAnimals()
    },[])


    const navigate = useNavigate()
    const toAdoptionForm=(param)=>{
        navigate('/forms/AdoptionForm',{state:{type:param.type, gender:param.gender, age:param.age, breed:param.breed, name:param.name, url:param.url}})
    }

    return (
        <div className='grid animate__animated animate__fadeInUp animate__fast animate__delay-1s'>
            {animalData.slice(0,results).map((e, index) => {

                var ageText = e.age
                if (e.age === 1) {
                    ageText += ' year'
                } else if (e.age > 1){
                    ageText += ' years'
                } else if (e.age === 0.1) {
                    ageText = ageText*10 + ' month'
                } else if (e.age < 1) {
                    ageText = ageText*10 + ' months'
                }

                function genderIcon() {
                    if (e.gender === 'Male') {
                        return <Male sx={{color:'steelblue'}}/>
                    } else {
                        return <Female sx={{color:'indianred'}}/>
                    }
                }

                function hdbIcon() {
                    if (e.hdbApproved) {
                        return <img src={require('../img/icons/hdbApproved.png')} style={{width:'25px'}} alt='hdbBadge'/>
                    }
                }

                return (
                    <a onClick={()=>{toAdoptionForm(e)}} key={index} style={{cursor:'pointer'}}>
                        <div className='gridItem'>
                            <img src={e.url} key={index} width='100%' alt={e.name}/>
                            <h2>{e.name} {genderIcon()}</h2>
                            <p style={{margin:0}}>Breed: {e.breed} {hdbIcon()}</p>
                            <p style={{marginTop:0}}>Age: {ageText} old</p>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}
export default AnimalGrid