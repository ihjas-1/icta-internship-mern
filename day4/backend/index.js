
const express = require('express')
const app = express()
const port = 3001

require('./connection')

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/trial', (req, res) => {
    res.send('This is a trial')
})


app.listen(port, () => {
    console.log(`Example backend server started at ${port}`)
})