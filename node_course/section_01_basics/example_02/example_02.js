var http = require('http')

var server = http.createServer( function(req, res) {

	// res.end() MUST be called on each response

	var category = req.url

	console.log(category)

	if (category == '/tecnology') {

		res.end("<html><body>Tecnology!</body></html>")

	} else if (category == '/beauty') {

		res.end("<html><body>Beauty</body></html>")

	} else if (category == '/') {

		res.end("<html><body>Index</body></html>")

	} else {

		res.end("<html><body>Page not found</body></html>")

	}

})

server.listen(3000)
