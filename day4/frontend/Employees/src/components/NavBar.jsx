import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
    return (
        <div style={{ margin: "-10px", marginBottom: "10px" }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Employees</Typography>
                    <div style={{ marginLeft: "auto" }}>
                        <Link to="/">
                            <Button style={{color:"white"}}>ADD</Button>
                        </Link>
                        <Link to="/view">
                            <Button style={{color:"white"}}>VIEW</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar