
const studentModel = require('../models/models');

exports.insertData = (req, res) =>{
    let reqBody = req.body;
    studentModel.create(reqBody, error =>{
        if(error){
            res.status(400).json({status:"Failed", data: error})
        }else{
            res.status(200).json({status:"Success", data:data})
        }
    })
}