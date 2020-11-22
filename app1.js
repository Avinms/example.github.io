var express =require('express');
var app =express();


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req, res){
    res.sendFile('index1.html',{root: __dirname});

});

app.post('/submit-student-data',function(req, res){
    var name =req.body.firstName ;

    res.send(name + '   Submitted succesfully');
});

var server = app.listen(8086, function(){
    console.log('node server is running.....');
});