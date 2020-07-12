import express = require('express');
var data_1234 = require('../data/data-1234.json');
var data_4321 = require('../data/data-4321.json');

// Create a new express app instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello 8080!');
});

app.get('/test', function (req, res) {
    res.json(data_1234)
    //res.send('test view')
});

app.get('/1234', function (req, res) {
    res.send('1234')
});

app.get('/4321', function (req, res) {
    res.send('4321')
});

app.listen(8080, function () {
    console.log('App is listening on port 8080!');
});