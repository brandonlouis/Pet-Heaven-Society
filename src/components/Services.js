import { Box, Button, Tab, Tabs } from '@mui/material'
import PropTypes from 'prop-types';
import React from 'react'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
        >
        {value === index && (
            <Box>
            <p>{children}</p>
            </Box>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
    };
}

export default function Services() {
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

  return (
    <>
    <Box className='services' sx={{display:'flex', alignItems:'center', flexDirection:'column', mt:5}}>
        <h1>Our services</h1>
        <Tabs value={value} onChange={handleChange} sx={{mb:5}}>
            <Tab label='Adoption' {...a11yProps(0)}/>
            <Tab label='Rehoming' {...a11yProps(1)}/>
        </Tabs>

        <TabPanel value={value} index={0}>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{width:'48%'}}>
                    <h2>Adoption</h2>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                    <Button variant='contained' size='large' sx={{mt:2}}>Fill up form</Button>
                </div>
                <img src={require('../img/adoptSvc.jpg')} width='48%'/>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <img src={require('../img/rehomeSvc.png')} width='48%'/>
                <div style={{width:'48%'}}>
                    <h2>Rehoming</h2>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                    <Button variant='contained' size='large' sx={{mt:2}}>Fill up form</Button>
                </div>
            </Box>
        </TabPanel>
    </Box>
    </>
  )
}