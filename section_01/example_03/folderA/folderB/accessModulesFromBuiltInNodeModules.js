// http module comes within node
const http = require("http")

// creating a http server
http.createServer(

    requestListener = (req, resp) => {

        resp.write(text = "Hello form server")

        resp.end()
    }).listen(handle = 8080, function(args) {
        // body
    })

// test
// curl http://127.0.0.1:8080/
