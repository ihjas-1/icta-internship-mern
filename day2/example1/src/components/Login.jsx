import React from 'react'
import './css/Login.css'
import { AppBar, Box, Button, Card, Stack, TextField, Toolbar, Typography } from '@mui/material'


const Login = () => {
  return (
    <>
      <Stack padding={0} margin={-1}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Login
            </Typography>
          </Toolbar>
        </AppBar>
        <Stack spacing={2} paddingTop={4} paddingBottom={2} maxWidth={200} margin={'auto'}>

          <TextField id="outlined-basic" label="Username" type="username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />

          <Button >Sign In</Button>
        </Stack>
      </Stack>
    </>
  )
}

export default Login