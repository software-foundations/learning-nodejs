var express = require('express')

var app = express() // search for ejs files in views directory

app.set('view engine', 'ejs') // ejs module takes cares of view engine property

module.exports = app;