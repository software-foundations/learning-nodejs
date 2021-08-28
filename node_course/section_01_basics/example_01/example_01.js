var http = require('http')

var server = http.createServer( function(req, res) {

	// res.end() MUST be called on each response
	
	res.end("<html><body>Hello World!</body></html>")

})

server.listen(3000)
