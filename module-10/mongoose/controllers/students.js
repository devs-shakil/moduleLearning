const studentModel = require('../models/models')

//C = Create students
exports.insertStudent = async (req, res) =>{
  try {
    let reqBody = req.body;
    const data = await studentModel.create(reqBody);
    res.status(201).json({status:"success", data: data})
  } catch (error) {
    res.status(400).json({status:"Failed", data:error})
}} 


//R = Read students
