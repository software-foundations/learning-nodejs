var app = require('./config/server')

// COULD BE THIS WAY, TOO
// var routeHome = require('./app/routes/home')
// routeHome(app)

var routeHome = require('./app/routes/home')(app)
var routeNews = require('./app/routes/news')(app)
var routeFormAddNews = require('./app/routes/form_add_news')(app)

app.listen(3000, function(){

	console.log('server runing with express')

})
