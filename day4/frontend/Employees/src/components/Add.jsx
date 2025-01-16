import { Button, Card, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [dep, setDep] = useState("")
    const [salary, setSalary] = useState(0)

    const add = ()=>{
        console.log(name)
    }
    return (
        <Paper elevation={0}>
            <Card style={{ maxWidth: "500px", margin: "auto", marginTop: "50px" }}>
                <Stack padding={3} spacing={1}>
                    <Typography align='center' variant="h5" paddingBottom={2}>Add Employee</Typography>
                    <TextField id="filled-basic" onChange={(e)=>setName(e.target.value)} label="Name" variant="filled" />
                    <TextField id="filled-basic" onChange={(e)=>setAge(Number(e.target.value))} label="Age" type="number" variant="filled" />
                    <TextField id="filled-basic" onChange={(e)=>setDep(e.target.value)} label="Department" variant="filled" />
                    <TextField id="filled-basic" onChange={(e)=>setSalary(e.target.value)} label="Salary" type="number" variant="filled" />
                    <Button onClick={add}>ADD</Button>
                </Stack>
            </Card>
        </Paper>
    )
}

export default Add