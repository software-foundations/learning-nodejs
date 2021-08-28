var express = require('express')

var app = express()

// ejs module takes cares of view engine property
app.set('view engine', 'ejs')

app.get('/', function(req, res){

	res.send('<html><body>Index</body></html>')

})

app.get('/tecnology', function(req, res){

	// res.send('<html><body>Tecnology</body><html>')
	res.render('section/tecnology')

})

app.listen(3000, function(){

	console.log('server runing with express')

})
