import express = require('express');
const fs = require('fs');

// Create a new express app instance
const app: express.Application = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/1234', function (req, res) {
    let rawData = fs.readFileSync('./data/data-1234.json');
    let jsonData = JSON.parse(rawData);
    res.json(jsonData);
});

app.get('/4321', function (req, res) {
    let rawData = fs.readFileSync('./data/data-4321.json');
    let jsonData = JSON.parse(rawData);
    res.json(jsonData);
});

app.listen(8080, function () {
    console.log('App is listening on port 8080!');
});