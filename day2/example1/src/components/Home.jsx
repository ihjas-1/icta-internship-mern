import { Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router'


const Home = () => {
    var [name,setName] = useState("Ihjas")

  return (
    <>
        <Stack padding={0} margin={-1}>
            <NavBar title={"Home"} />
            
            <Typography width={"100vw"} textAlign={"center"}>Welcome {name}</Typography>
        </Stack>
    </>
  )
}

export default Home