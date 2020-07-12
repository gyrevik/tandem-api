"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express app instance
var app = express();
app.get('/', function (req, res) {
    res.send('Hello 8080!');
});
app.get('/test', function (req, res) {
    res.json({ username: 'Flavio' });
    //res.send('test view')
});
app.get('/1234', function (req, res) {
    res.send('1234');
});
app.get('/4321', function (req, res) {
    res.send('4321');
});
app.listen(8080, function () {
    console.log('App is listening on port 8080!');
});
