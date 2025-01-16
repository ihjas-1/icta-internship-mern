const mongoose = require("mongoose")

var schema = mongoose.Schema({
    name: String,
    age: Number,
    department: String,
    salary: Number
})

var EmployeModel = mongoose.model("employe", schema)

module.exports = EmployeModel