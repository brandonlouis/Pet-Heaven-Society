import React from 'react';
import { Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, IconButton, Modal, Tab, Tabs, TextField } from '@mui/material';
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const openLoginModal = () => setOpen(true);
    const closeLoginModal = () => setOpen(false);

    const [value, setValue] = React.useState(0);
    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        <nav>
            <Box className='navBarContent' sx={{display:'flex'}}>
                <a href='/'><img src={require('../img/branding/logo.png')} width='140px'/></a>
                <Box className='navLinks' sx={{display:'flex', alignItems:'center', right:0, marginLeft:'auto'}}>
                    <Button href='/'>Home</Button>
                    <Button href='/Services'>Services</Button>
                    <Button href='/Animals'>Animals</Button>
                    <IconButton sx={{p:0, ml:'24px'}} onClick={openLoginModal}><Avatar sx={{bgcolor:'primary.main'}}/></IconButton>
                </Box>
            </Box>
        </nav>

        <Modal open={open} onClose={closeLoginModal}>
            <Box className='loginModal'>
                <img src={require('../img/branding/logoIcon.png')} width='60px' style={{marginBottom:10}}/>
                <Box sx={{borderBottom: 1, borderColor: 'divider', width:'100%'}}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label='Login' {...a11yProps(0)} />
                        <Tab label='Sign Up' {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <TextField label='Username' sx={{mt:3}} fullWidth/>
                    <TextField label='Password' sx={{mt:2}} type='password' fullWidth/>

                    <Button variant='contained' size='large' sx={{mt:3}} fullWidth>Login</Button>
                    <FormGroup sx={{mt:1}}>
                        <FormControlLabel control={<Checkbox size='small'/>} label="Remember me" />
                    </FormGroup>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TextField label='Username' sx={{mt:3}} fullWidth/>
                    <TextField label='Password' sx={{mt:2}} type='password' fullWidth/>
                    <TextField label='Confirm Password' sx={{mt:2}} type='password' fullWidth/>

                    <Button variant='contained' size='large' sx={{mt:3}} fullWidth>Create Account</Button>
                </TabPanel>
            </Box>
        </Modal>
        </>
    )
}