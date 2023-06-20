const express = require('express');
const {insertData, hello} = require('../controllers/students.js');
const router = express.Router();

router.post('/student', insertData)
router.get("/hello", hello)


module.exports = router;
