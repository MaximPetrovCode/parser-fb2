const express = require('express');
const fs = require('fs-extra');
const xml2js = require('xml2js');

const app = express();

app.get('/', (req, res)=>{
    var parser = new xml2js.Parser();
    
        fs.readFile('./books/english.fb2', function(err, data) {
            parser.parseString(data, function (err, result) {
                // console.dir(result);
                console.log('Done');
                res.send(result);
            });
        });    
});
    
const port = 5000;
app.listen(port, (req,res)=>{
    console.log(port);
});