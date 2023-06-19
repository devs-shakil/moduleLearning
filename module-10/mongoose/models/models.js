const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    Name:String,
    Roll:Number,
    Class:String,
    Remarks: String
});

const studentModel = mongoose.model("students", dataSchema);

module.exports = studentModel;