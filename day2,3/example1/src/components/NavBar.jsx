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
                    <Button color='inherit'>Login</Button>
                </Link>
                <Link to="/signup">
                    <Button color='inherit'>Sign Up</Button>
                </Link>
                <Link to="/counter">
                    <Button color='inherit'>Counter</Button>
                </Link>
                <Link to="/">
                    <Button color='inherit'>Home</Button>
                </Link>
                <Link to="/welcomeNew">
                    <Button color='inherit'>Welcome</Button>
                </Link>
                <Link to="/api">
                    <Button color='inherit'>API</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar