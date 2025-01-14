import { Stack } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'


const Home = () => {
  return (
    <>
        <Stack padding={0} margin={-1}>
            <NavBar title={"Home"} />
        </Stack>
    </>
  )
}

export default Home