const studentModel = require('../models/models');

let reqBody = req.body;
studentModel.create(reqBody)
  .then(data => {
    res.status(200).json({ status: "Success", data: data });
  })
  .catch(error => {
    res.status(400).json({ status: "Failed", data: error });
  });
