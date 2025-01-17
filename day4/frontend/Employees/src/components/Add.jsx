import { Button, Card, Paper, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useDebugValue, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

const Add = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [dep, setDep] = useState("")
    const [salary, setSalary] = useState(0)
    const [isUpdate, setIsUpdate] = useState(false)

    const add = () => {
        axios.post('http://localhost:3001/add', {
            name: name,
            age: age,
            department: dep,
            salary: salary,
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    const { state } = useLocation()
    useEffect(()=>{
        if (state != null) {
            const { data } = state
            setName(data.name)
            setAge(data.age)
            setDep(data.department)
            setSalary(data.salary)
            setIsUpdate(true)
        }
    },[])

    const update = () => {
        const { data } = state
        axios.put(`http://localhost:3001/update/${data._id}`, {
            name: name,
            age: age,
            department: dep,
            salary: salary,
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Paper elevation={0}>
            <Card style={{ maxWidth: "500px", margin: "auto", marginTop: "50px" }}>
                <Stack padding={3} spacing={1}>
                    <Typography align='center' variant="h5" paddingBottom={2}>{isUpdate ? "Edit Employee" : "Add Employee"}</Typography>
                    <TextField id="filled-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="filled" />
                    <TextField id="filled-basic" value={age == 0 ? "" : age} onChange={(e) => setAge(Number(e.target.value))} label="Age" type="number" variant="filled" />
                    <TextField id="filled-basic" value={dep} onChange={(e) => setDep(e.target.value)} label="Department" variant="filled" />
                    <TextField id="filled-basic" value={salary == 0 ? "" : salary} onChange={(e) => setSalary(e.target.value)} label="Salary" type="number" variant="filled" />
                    {isUpdate ? <Button onClick={update}>UPDATE</Button> : <Button onClick={add}>ADD</Button>}
                </Stack>
            </Card>
        </Paper>
    )
}

export default Add