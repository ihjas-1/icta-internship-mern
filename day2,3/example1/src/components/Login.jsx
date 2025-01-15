import React from 'react'
import './css/Login.css'
import { AppBar, Box, Button, Card, Link, Stack, TextField, Toolbar, Typography } from '@mui/material'
import NavBar from './NavBar'


const Login = () => {
  return (
    <>
      <Stack padding={0} >
        <NavBar title={"Login"}/>
        <Stack spacing={2} paddingTop={4} paddingBottom={2} maxWidth={200} margin={'auto'}>

          <TextField id="outlined-basic" label="Username" type="username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
          
          <Button >Sign In</Button>
          <Typography class="bottom-ask">
            Don't have an account? <Link href="/signup" underline='hover'>Sign Up</Link>
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default Login