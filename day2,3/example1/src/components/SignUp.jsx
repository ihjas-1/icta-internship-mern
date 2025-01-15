import React from 'react'
import './css/Login.css'
import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import NavBar from './NavBar'

const SignUp = () => {
    return (
        <>
            <Stack padding={0} margin={-1}>
                <NavBar title={"Create account"} />
                <Stack spacing={2} paddingTop={4} paddingBottom={2} maxWidth={200} margin={'auto'}>

                    <TextField id="outlined-basic" label="Username" type="username" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" type="email" variant="outlined" />

                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />

                    <Button >Sign Up</Button>
                    <Typography class="bottom-ask">
                        Already have an account? <Link href="/login" underline='hover'>Sign In</Link>
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default SignUp