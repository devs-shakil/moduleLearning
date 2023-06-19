const express = require('express');
const {insertData} = require('../controllers/students.js');
const router = express.Router();

router.post('/student', insertData)


module.exports = router;
