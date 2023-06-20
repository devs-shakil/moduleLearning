const {readdirSync} = require('fs')
const  path = require('path')
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

//import require libary
const bodyParser = require('body-parser')

//security middleware implements
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//implement require libary
app.use(bodyParser.json())

//Request rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 Minutes
    max: 100 //limit each ip to 100 request per winsowMs

})

//connection mongoDB database
const URI = "mongodb://127.0.0.1:27017/students";
const OPTION = {user: " ", pass: " "};

const MongoClient = require ('mongodb').MongoClient;
mongoose.connect(URI)
.then(()=>{
    console.log("Database connection successfully");
})
.catch(() =>{
    console.error("Database connaction fail", error);
 })






//All route 
readdirSync("./routes").map(r => app.use("/v1", require(`./routes/${r}`)));



// undefined route
app.use('*', (req, res)=>{
    res.status(404).json({
        status:"Failed",
        data: "Not Found"
    })
})





app.listen(3000, () => {
    console.log("server is running on port 3000")
})