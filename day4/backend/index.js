
const express = require('express')
const app = express()
const port = 3001

const emp = require('./models/employe')
const EmployeModel = require('./models/employe')

require('./connection')

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/trial', (req, res) => {
    res.send('This is a trial')
})


app.post('/add', async (req, res) => {
    try {
        await EmployeModel(req.body).save()
        res.send({ message: "OK" })
    } catch (e) {
        console.log(e)
    }
})

app.listen(port, () => {
    console.log(`Example backend server started at ${port} `)
})