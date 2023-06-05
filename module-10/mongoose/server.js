const express = require('express');
const app = express();

//security middleware import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');

//security middleware implements
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//Request rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 Minutes
    max: 100 //limit each ip to 100 request per winsowMs

})

//connection mongoDB database
const URI = "mongodb://127.0.0.1:27017/student";
const OPTION = {user: " ", pass: " "};

const MongoClient = require ('mongodb').MongoClient;







// app.use("/api/v1", router);

//undefined route
app.use('*', (req, res)=>{
    res.status(404).json({
        status:"Failed",
        dat: "Not Found"
    })
})


app.listen(5000, () => {
    console.log("server is running on port 5000")
})