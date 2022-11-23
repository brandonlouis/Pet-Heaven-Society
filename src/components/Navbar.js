import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Badge, Box, Button, Checkbox, FormControlLabel, FormGroup, IconButton, Modal, Tab, Tabs, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { UserAuth } from '../firebaseService/authContext'
import { Close } from '@mui/icons-material'

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

export default function Navbar() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [tabValue, setTabValue] = useState(0)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cfmPassword, setCfmPassword] = useState('')
    const {createUser} = UserAuth()
    const { user, login, logout } = UserAuth()

    const openLoginModal = () => setOpen(true)
    const closeLoginModal = () => setOpen(false)

    const changeTab = (e, newValue) => {
        setTabValue(newValue)
    }

    const createAccount = async (e) => {
        e.preventDefault()

        if (password === cfmPassword) {
            try {
                await createUser(email, password)
                alert('Account created successfully')
                closeLoginModal()
            } catch (err) {
                console.log(err)
                if (err.code === 'auth/email-already-in-use') {
                    alert('This Email is already in use');
                } else if (err.code === 'auth/invalid-email') {
                    alert('Invalid Email');
                } else if (err.code === 'auth/weak-password') {
                    alert('Password must be at least 6 characters')
                }
            }
        } else {
            alert('The passwords do not match')
        }

        setEmail('')
        setPassword('')
        setCfmPassword('')
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await login(email, password)
            alert(`Welcome ${email}, you have successfully signed in`)
            if (email === 'admin@psh.com') {
                closeLoginModal()
                navigate('/Admin')
                window.location.reload()
            } else {
                closeLoginModal()
                window.location.reload()
            }
        } catch (err) {
            console.log(err)
            if (err.code === 'auth/invalid-email' || err.code === 'auth/user-not-found') {
                alert('Invalid Email');
            } else if (err.code === 'auth/wrong-password') {
                alert('Invalid Password');
            }
        }
    }

    const handleLogout = async (e) => {
        e.preventDefault()

        if (window.confirm('Are you sure you want to logout?')) {
            try {
                await logout()
                alert('Successfully logged out')
                closeLoginModal()
                window.location.reload()
            } catch (err) {
                console.log(err)
            }
        }

        setEmail('')
        setPassword('')
        setCfmPassword('')
    }

    return (
        <>
        <nav className='animate__animated animate__fadeInDown animate__fast'>
            <Box className='navBarContent' sx={{display:'flex'}}>
                <a href='/'><img src={require('../img/branding/logo.png')} width='140px' alt='logo'/></a>
                <Box className='navLinks' sx={{display:'flex', alignItems:'center', right:0, marginLeft:'auto'}}>
                    <Button href='/'>Home</Button>
                    <Button href='/Services'>Services</Button>
                    <Button href='/Animals'>Animals</Button>
                    {user && user.email==='admin@phs.com' ? <Button href='/Admin'>Admin</Button> : <></>}
                    <IconButton sx={{p:0, ml:'24px'}} onClick={user ? handleLogout : openLoginModal}>
                        {user ? 
                            <Badge color='success' overlap='circular' badgeContent=' ' anchorOrigin={{vertical:'bottom', horizontal:'right'}}>
                                <Avatar sx={{bgcolor:'primary.main'}}>{user.email[0].toUpperCase()}</Avatar>
                            </Badge> 
                        : <Avatar sx={{bgcolor:'primary.main'}}/>
                        }
                    </IconButton>
                </Box>
            </Box>
        </nav>


        <Modal open={open} onClose={closeLoginModal} >
            <Box className='loginModal'>
                <div className='loginModalContent'>
                <IconButton onClick={closeLoginModal} sx={{position:'absolute', right:10, top:10}}><Close fontSize='large' color='primary'/></IconButton>
                <img src={require('../img/branding/logoIcon.png')} width='60px' style={{marginBottom:10, paddingTop:20}} alt='logo'/>
                <Box sx={{borderBottom: 1, borderColor: 'divider', width:'100%'}}>
                    <Tabs value={tabValue} onChange={changeTab}>
                        <Tab label='Login' {...tabProps(0)} />
                        <Tab label='Sign Up' {...tabProps(1)} />
                    </Tabs>
                </Box>

                <TabPanel value={tabValue} index={0}>
                    <form onSubmit={handleLogin}>
                        <TextField label='Email' onChange={(e)=>setEmail(e.target.value)} sx={{mt:3}} type='email' fullWidth required/>
                        <TextField label='Password' onChange={(e)=>setPassword(e.target.value)} sx={{mt:2}} type='password' fullWidth required/>

                        <Button variant='contained' size='large' type='submit' sx={{mt:3}} fullWidth>Login</Button>
                        <FormGroup sx={{mt:1}}>
                            <FormControlLabel control={<Checkbox size='small'/>} label='Remember me' />
                        </FormGroup>
                    </form>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <form onSubmit={createAccount}>
                        <TextField label='Email' sx={{mt:3}} onChange={(e)=>setEmail(e.target.value)} type='email' fullWidth required/>
                        <TextField label='Password' sx={{mt:2}} onChange={(e)=>setPassword(e.target.value)} type='password' fullWidth required/>
                        <TextField label='Confirm Password' sx={{mt:2}} type='password' onChange={(e)=>setCfmPassword(e.target.value)} fullWidth required/>

                        <Button variant='contained' size='large' type='submit' sx={{mt:3}} fullWidth>Create Account</Button>
                    </form>
                </TabPanel>
                </div>
            </Box>
        </Modal>
        </>
    )
}