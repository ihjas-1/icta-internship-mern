
const express = require('express')
const app = express()
const port = 3001

const emp = require('./models/employe')
const EmployeModel = require('./models/employe')
var cors = require('cors')

require('./connection')

app.use(express.json())
app.use(cors())
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

app.delete('/remove/:id', async (req, res) => {
    try {
        await EmployeModel.findByIdAndDelete(req.params.id)
        res.send({ message: "Deleted!" })
    } catch (e) {
        console.log(e)
    }
})

app.get('/view', async (req, res) => {
    try {
        let data = await EmployeModel.find()
        res.send(data)
    } catch (e) {
        console.log(e)
    }
})

app.put('/update/:id', async (req, res) => {
    try {
        await EmployeModel.findByIdAndUpdate(req.params.id, req.body)
        console.log("Updated!")
        res.send({ message: "Updated!" })
    } catch (error) {
        console.log(error)
    }
})


app.listen(port, () => {
    console.log(`Example backend server started at ${port} `)
})