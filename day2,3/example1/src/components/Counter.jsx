import { Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Counter = () => {
    const [count, setCount] = useState(10)
    return (
        <Stack>
            <NavBar title="Counter" />
            <div className='m-auto mt-5'>
                <Stack>
                    <Typography>The Count is {count}</Typography>
                    <div>
                        <Button onClick={()=>setCount(count+1)}>ADD</Button>
                        <Button onClick={()=>setCount(count-1)}>DEL</Button>
                    </div>
                </Stack>
            </div>
        </Stack>
    )
}

export default Counter