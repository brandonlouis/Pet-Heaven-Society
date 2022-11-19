import { Female, Male } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AnimalGrid  = ({ results }) => {

    const [data,setData]=useState([]);

    const fetchData = () => {
        fetch(`animals.json`)
        .then((response) => response.json())
        .then((actualData) => {         
            setData(actualData)
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
    useEffect(()=>{
        fetchData()
    },[])

    if (results === 'all') {
        results = data.length;
    }

    const navigate = useNavigate();
    const toAdoptionForm=(param)=>{
        navigate('/forms/AdoptionForm',{state:{type:param.type, gender:param.gender, age:param.age, breed:param.breed, name:param.name}});
    }

    return (
        <div className='grid'>
            {data.slice(0,results).map((e, index) => {

                var ageText = e.age
                if (e.age === 1) {
                    ageText += ' year'
                } else if (e.age > 1){
                    ageText += ' years'
                } else if (e.age == 0.1) {
                    ageText = ageText*10 + ' month'
                } else if (e.age < 1) {
                    ageText = ageText*10 + ' months'
                }

                const genderIcon = (gender) => {
                    if (gender === 'Male') {
                        return <Male sx={{color:'steelblue'}}/>
                    } else {
                        return <Female sx={{color:'indianred'}}/>
                    }
                }

                return (
                     <a onClick={()=>{toAdoptionForm(e)}} key={index} style={{cursor:'pointer'}}>
                        <div className='gridItem'>
                            <img src={require('../img/adoptionAnimals/' + e.name.toLowerCase() + '.jpg')} width='100%'/>
                            <h2>{e.name} {genderIcon(e.gender)}</h2>
                            <p style={{margin:0}}>Breed: {e.breed}</p>
                            <p style={{marginTop:0}}>Age: {ageText} old</p>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}
export default AnimalGrid