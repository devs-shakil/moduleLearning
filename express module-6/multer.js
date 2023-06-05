let express = require('express');
let multer = require('multer');

let multerInstan = multer()
let app = express();

//use
app.use(multerInstan.array());
app.use(express.static('public'));

app.post('/', function(req, res){
    let jsonData = req.body;
    res.send(jsonData.stringify(jsonData))
})



app.listen(3000, function(){
    console.log("server is Run succes")
})