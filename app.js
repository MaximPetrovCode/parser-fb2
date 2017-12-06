const express = require('express');
const fs = require('fs-extra');
const xml2js = require('xml2js');

const app = express();

function readBook() {
    return new Promise((resolve, reject) => {
        var parser = new xml2js.Parser();

        fs.readFile('./books/english.fb2', function (err, data) {
            parser.parseString(data, function (err, result) {
                // console.dir(result);
                console.log('Done');
                let content = result.FictionBook.body[0].section[0].p;

                resolve(content);

                // content.forEach(element => {
                //     console.log(element);

                // });
            });

        });
    });
}

function parseWords(content){
    return new Promise((resolve, reject) => {
        resolve(content);
    });
}

readBook()
.then(parseWords)
.then(console.log);

