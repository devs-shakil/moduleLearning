const express = require('express');
const app = express();
const port = 3000;
app.get('/one', (req, res)=>{
    res.end("this is home page")
})
app.post('/two',(req, res) =>{
    res.send("this is about page");
})
app.get('/three', function(req, res){
    res.status(201);
    res.end("created");
})
app.get('/four', function (req, res){
    let myJsonArray = [
        {
            Name: "Shakil Hossain",
            age: 24,
            district: "Lakshmipur",
            phone: "01780783657"
        },
        {
            name: "Rakib Hossain",
            age: 25,
            district: "Lakshmipur",
            phone: "017807443657"
        },
        {
            name: "ics Hossain",
            age: 26,
            district: "khulna",
            phone: "017807443657"
        }
    ];
    res.json(myJsonArray)
})
app.listen(port,  ()=>{
    console.log("express run success");
})