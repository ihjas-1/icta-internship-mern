import { Card, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const View = () => {

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
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </Stack>
                </Card>
            </Paper>
        </>
    )
}

export default View