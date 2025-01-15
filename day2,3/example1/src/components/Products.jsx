import React, { useState } from 'react'
import NavBar from './NavBar'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import axios from 'axios'

const Products = () => {
    const [data, setData] = useState([])


    axios.get("https://fakestoreapi.com/products")
        .then((r) => {
            setData(r.data)
        })
        .catch((e) => {

        })
        .finally(() => {

        })
    return (
        <Stack padding={0} >
            <NavBar title={"Products"} />
            <Grid container spacing={3}>
                {
                    data.map((i) => {
                        return (
                            <Grid item>
                                <Card sx={{width:150}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={i.image}
                                            
                                            alt="green iguana"
                                            sx={{height:100,width:100}}
                                        />
                                        <CardContent sx={{height:80, overflow:"scroll"}}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {i.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {i.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Stack>
    )
}

export default Products