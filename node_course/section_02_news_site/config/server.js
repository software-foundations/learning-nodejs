var express = require('express')

var app = express() // search for ejs files in views directory

app.set('view engine', 'ejs') // ejs module takes cares of view engine property

// setting up custom views directory
app.set('views', './app/views'); // ./ refers from where this module will be required

module.exports = app; 