// a port corresponds to a process
// reverse proxy: make various application listen to the same port
// a reverse proxy dispatch the request to the the the correct port application
const port = 3003

const express = require("express")

const app = express()


app.use( (req, res, next) => {    
    console.log("middleware for all requests")
    next()
})

app.get("/products", (req, res, next) => {    
    console.log("middleware for /producs")
    next()
})

app.get("/products", (req, res, next) => {
    // send method automatically converts to JSON
    res.send({ name: "Notebook", price: 123.45 })
})

app.listen(port, () => {
    console.log(`Server listening to the port ${port}.`)
})