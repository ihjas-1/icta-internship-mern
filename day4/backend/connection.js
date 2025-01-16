const mongoose = require('mongoose');


const url = 'mongodb+srv://ihjas:12345679@cluster0.sqjau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url)
    .then(() => {
        console.log("Connected Established!")
    })