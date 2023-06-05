const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/', function(req, res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName)
})

app.get('/header', function(req, res){
    const host = req.header('Host');
    const userAgent = req.header('User-Agent');
    const accept = req.header('Accept');
    const connection = req.header('Connection');

    res.end(`host = ${host}, userAgent = ${userAgent}, accept = ${accept}, connection = ${connection} `)
})

app.post('/post', function(req, res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(`firstName = ${firstName} and lastName = ${lastName}`);
})

app.post('/headerpost', function (req, res){
    let username = req.header('username');
    let password = req.header('password');
    res.send(`username = ${username} and password = ${password}`);
});

//body parser
app.use(bodyParser.json());
app.post('/jsonstring', function(req, res){
    let jsonData = req.body;
    let name = jsonData['name'];
    let city = jsonData['city'];
    res.send(`${name} and ${city}`);
})



app.listen(3000, function(){
    console.log("req run success");

})