import { Button, Card, IconButton, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const View = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate()


    const view = () => {
        axios.get("http://localhost:3001/view")
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {

            })
    }
    view()

    const deleteRow = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3001/remove/${id}`)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {

            })
    }
    return (
        <>
            <Paper elevation={0}>
                <Card style={{ maxWidth: "500px", margin: "auto", marginTop: "50px" }}>
                    <Stack padding={3} spacing={1}>
                        <Typography align='center' variant="h5" paddingBottom={2}>Employees</Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>Department</TableCell>
                                    <TableCell>Salary</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data.map((i) => {
                                        return (

                                            <TableRow key={i.name + ""}>
                                                <TableCell>{i.name}</TableCell>
                                                <TableCell>{i.age}</TableCell>
                                                <TableCell>{i.department}</TableCell>
                                                <TableCell>{i.salary}</TableCell>
                                                <TableCell>
                                                    <IconButton aria-label="delete" onClick={() => deleteRow(i._id)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                    <IconButton aria-label="edit" onClick={() => navigate('/', { state: { data: i } })}>
                                                        <EditIcon/>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </Stack>
                </Card>
            </Paper>
        </>
    )
}

export default View