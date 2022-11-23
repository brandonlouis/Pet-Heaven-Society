import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Accordion, AccordionDetails, AccordionSummary, Tab, Tabs, IconButton } from '@mui/material'
import { ExpandMore, Delete, Refresh } from '@mui/icons-material'
import FormDataSvc from '../firebaseService/formSvc'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}
function tabProps(index) {
  return {
    id: `simple-tab-${index}`,
  }
}

export default function Admin() {
    const [tabValue, setTabValue] = useState(0)
    const [adoptForms, setAdoptForms] = useState([])
    const [rehomeForms, setRehomeForms] = useState([])

    const changeTab = (e, newValue) => {
        setTabValue(newValue)
    }

    const fetchForms = async () => {
        const aData = await FormDataSvc.getForms('adopt')
        setAdoptForms(aData.map((doc) => ({...doc.data(),id: doc.id})))

        const rData = await FormDataSvc.getForms('rehome')
        setRehomeForms(rData.map((doc) => ({...doc.data(),id: doc.id})))
    }

    useEffect(()=>{
        fetchForms()
    },[])

    const deleteForm = async (id, imgId) => {
        if (window.confirm('Are you sure you want to delete this application?')) {
            await FormDataSvc.deleteForm(id, imgId)
        }
        alert('Application deleted successfully.')
        fetchForms()
    }

    const convertDate = (date) => {
        return ((date.split('-').reverse()).join('/'))
    }
    const convertTime = (time) => {
        const [hourString, minute] = time.split(':')
        const hour = +hourString % 24
        return ((hour % 12 || 12) + ':' + minute + (hour < 12 ? 'AM' : 'PM'))
    }

    return (
        <>
        <Box className='admin' sx={{mt:6}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider', width:'100%', mb:5, position:'relative'}}>
                <Tabs value={tabValue} onChange={changeTab}>
                    <Tab label='Adoption Applicants' {...tabProps(0)} />
                    <Tab label='Rehoming Applicants' {...tabProps(1)} />
                </Tabs>
                <IconButton onClick={fetchForms} sx={{position:'absolute', right:5,top:5, ml:'auto'}}><Refresh/></IconButton>
            </Box>

            <TabPanel value={tabValue} index={0}>
                {adoptForms.map((e, index) => {
                    
                    return (
                    <Accordion key={e.id}>
                        <Box sx={{display:'flex', alignItems:'center'}}>
                            <AccordionSummary expandIcon={<ExpandMore />} sx={{flexGrow:1,pr:0}}>
                                <b>{index+1}: {e.adopterName} → {e.interestedIn.animalName} ({e.interestedIn.animalBreed}, {e.interestedIn.animalGender})</b>
                            </AccordionSummary>
                            <Box sx={{mr:1}}><IconButton onClick={()=>deleteForm(e.id)}><Delete/></IconButton></Box>
                        </Box>
                        <AccordionDetails sx={{p:5, pt:0}}>
                            <div className='applicationDetails'>
                                <div>
                                    <h3>Adopter:</h3>
                                    <span>
                                        <p>Name:</p><p>{e.adopterName}</p>
                                    </span>
                                    <span>
                                        <p>Phone:</p><p>{e.phoneNo}</p>
                                    </span>
                                    <span>
                                        <p>Email:</p><p>{e.email}</p>
                                    </span>
                                    <span>
                                        <p>Address:</p><p>{e.address}</p>
                                    </span>
                                    <span>
                                        <p>Appointment:</p><p>{convertDate(e.apptDate)}, {convertTime(e.apptTime)}</p>
                                    </span>
                                </div>
                                <div>
                                    <h3>Animal:</h3>
                                    <span>
                                        <p>Name:</p><p>{e.interestedIn.animalName}</p>
                                    </span>
                                    <span>
                                        <p>Breed:</p><p>{e.interestedIn.animalBreed}</p>
                                    </span>
                                    <span>
                                        <p>Gender:</p><p>{e.interestedIn.animalGender}</p>
                                    </span>
                                </div>
                                <img src={e.interestedIn.imgURL} width='250px' style={{float:'right'}} alt='interestImg'/>

                            </div>
                        </AccordionDetails>
                    </Accordion>
                    )
                })}
            </TabPanel>


            <TabPanel value={tabValue} index={1}>
                {rehomeForms.map((e, index) => {

                    return (
                    <Accordion key={index}>
                        <Box sx={{display:'flex', alignItems:'center'}}>
                            <AccordionSummary expandIcon={<ExpandMore />} sx={{flexGrow:1,pr:0}}>
                                <b>{index+1}: {e.petDetails.type}, {e.petDetails.gender} (Age: {e.petDetails.age})</b>
                            </AccordionSummary>
                            <Box sx={{mr:1}}><IconButton onClick={()=>deleteForm(e.id,e.petDetails.imgID)}><Delete/></IconButton></Box>
                        </Box>
                        
                        <AccordionDetails sx={{p:5, pt:0}}>
                            <div className='applicationDetails'>
                                <div>
                                    <h3>Parent:</h3>
                                    <span>
                                        <p>Name:</p><p>{e.parentName}</p>
                                    </span>
                                    <span>
                                        <p>Phone:</p><p>{e.phoneNo}</p>
                                    </span>
                                    <span>
                                        <p>Email:</p><p>{e.email}</p>
                                    </span>
                                    <span>
                                        <p>Address:</p><p>{e.address}</p>
                                    </span>
                                    <span>
                                        <p>Reason:</p><p>{e.rehomeReason}</p>
                                    </span>
                                </div>
                                <div>
                                    <h3>Animal:</h3>
                                    <span>
                                        <p>Type:</p><p>{e.petDetails.type}</p>
                                    </span>
                                    <span>
                                        <p>Gender:</p><p>{e.petDetails.gender}</p>
                                    </span>
                                    <span>
                                        <p>Age:</p><p>{e.petDetails.age}</p>
                                    </span>
                                    <span>
                                        <p>Breed:</p><p>{e.petDetails.breed}</p>
                                    </span>
                                    <span>
                                        <p>Name:</p><p>{e.petDetails.name}</p>
                                    </span>
                                    <span>
                                        <p>Notes:</p><p>{e.petDetails.notes ? e.petDetails.notes : 'N.A'}</p>
                                    </span>
                                </div>
                                <img src={e.petDetails.imgURL} style={{width:'300px'}} alt='rehomePetImg'/>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    )
                })}
            </TabPanel>
        </Box>
        </>

    )
}