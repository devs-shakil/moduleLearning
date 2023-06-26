const express = require('express');
const {insertStudent} = require('../controllers/students.js');
const router = express.Router();

router.post('/student', insertStudent)



module.exports = router;
