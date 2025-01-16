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
            <Grid container spacing={3} style={{margin:10,background:"#000",paddingBottom:"20px"}}>
                {
                    data.map((i) => {
                        return (
                            <Grid item key={i.id}>
                                <Card sx={{width:400}}>
                                    <CardActionArea sx={{minHeight:"1000px"}}>
                                        <CardMedia
                                            component="img"
                                            image={i.image}
                                            
                                            sx={{width:"100%",padding:1}}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {i.title}
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