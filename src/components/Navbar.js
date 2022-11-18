import React from 'react';
import { Avatar, Box, Button, IconButton, Modal, TextField } from '@mui/material';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const openLoginModal = () => setOpen(true);
  const closeLoginModal = () => setOpen(false);

    return (
        <>
        <nav>
            <Box className='navBarContent' sx={{display:"flex"}}>
                <a href='/'><img src={require('../img/logo.png')} width='140px'/></a>
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
                <img src={require('../img/logoIcon.png')} width='80px'/>
                <TextField fullWidth label="Username"/>
                <TextField fullWidth label="Password" type='password'/>
                <Button variant='contained' size='large' fullWidth>Login</Button>
            </Box>
        </Modal>
        </>
    )
}