import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

const NavBar = ({ title }) => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    {title}

                </Typography>
            
                <Link to="login">
                    <Button color='green'>Login</Button>
                </Link>
                <Link to="signup">
                    <Button color='green'>Sign Up</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar