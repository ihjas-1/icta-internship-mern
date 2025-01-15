import { AppBar, Box, Button, Toolbar, Typography, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

const NavBar = ({ title }) => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    {title}

                </Typography>

                <Link to="/login" style={{marginLeft:"auto"}}>
                    <Button style={{color:"white"}}>Login</Button>
                </Link>
                <Link to="/signup">
                    <Button style={{color:"white"}}>Sign Up</Button>
                </Link>
                <Link to="/">
                    <Button style={{color:"white"}}>Home</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar