import { Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavBar from './NavBar'

const WelcomeNew = () => {
  const [name, setName] = useState("React")
  return (
    <Stack padding={0} >
      <NavBar title={"Welcome"} />
      <div className='flex-col mt-6'>
        <Typography textAlign={"center"}>Welcome to {name}</Typography>
        <Stack spacing={2} marginTop={10}>
          <Button onClick={()=>setName("React")}>React</Button>
          <Button onClick={()=>setName("Angular")}>Angular</Button>
          <Button onClick={()=>setName("Vue")}>Vue</Button>
        </Stack>
      </div>
    </Stack>
  )
}

export default WelcomeNew