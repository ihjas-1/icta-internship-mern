import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavBar = ({title}) => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    {title}
                </Typography>
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar