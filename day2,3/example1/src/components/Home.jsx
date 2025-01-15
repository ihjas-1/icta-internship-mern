import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router'


const Home = () => {
  const [name, setName] = useState("react")
  const [val,setVal] = useState("")
  const handleInput = (e)=>{
    
    setVal(e.target.value)

  }

  const subHandle=()=>{
    setName(val)
  }


  return (
    <>
      <Stack padding={0} >
        <NavBar title={"Home"} />
        <Box height={10} />
        <div className='p-10 w-full items-center justify-center flex flex-col gap-3'>
        <Typography width={"100vw"} textAlign={"center"}>Welcome {name}</Typography>
        <TextField className='w-full' onChange={handleInput} label="Name" variant='outlined' />
        <Button onClick={subHandle}>Submit</Button>
        </div>
      </Stack>
    </>
  )
}

export default Home