import React, { useState } from 'react'
import NavBar from './NavBar'
import { Card, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'



    const Api = () => {
        const [data, setData] = useState([])

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((r) => {
                setData(r.data)
            })
            .catch((e) => {

            })
            .finally(() => {

            })
        return (
            <Stack padding={0} >
                <NavBar title={"Api"} />

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((i) => {
                                return (
                                    <TableRow key={i.id}>
                                        <TableCell>{i.name}</TableCell>
                                        <TableCell>{i.email}</TableCell>
                                        <TableCell>{i.address.city}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </Stack>
        )
    }

export default Api