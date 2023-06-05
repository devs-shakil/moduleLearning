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
});

app.get('/five', function (req, res){
    res.download("./ss.jpg");
});
app.get('/bangladesh', function(req, res){
   res.redirect("http://localhost:3000/india")
});
app.get('/india', function(req, res){
    res.end("this is india");
});

app.get('/header', function(req, res){
      res.append("name", "shakil");
      res.append("age", 24);
      res.append("city","Lakshmipur");
      res.status(201).end("Hello header");
})
app.get('/cookie', function(req, res){
    res.cookie('name', 'shakil');
    res.cookie('age', 24);
    res.end("cookie set success");
});
app.get('/clearCookie', function(req, res){
    res.clearCookie('name');
    res.clearCookie('age');
    res.end("clear siccess")
})



app.listen(port,  ()=>{
    console.log("express run success");
})