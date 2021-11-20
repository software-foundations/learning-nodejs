// a port corresponds to a process
// reverse proxy: make various application listen to the same port
// a reverse proxy dispatch the request to the the the correct port application
const port = 3003

const express = require('express');
const app = express()

// DEPRECATED - USE BODY-PARSER MIDDLEWARE INSTEAD
// Express v4.16.0 e superior
// to solve TypeError: Cannot read property &#39;name&#39; of undefined
// --------------------------
// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));
// --------------------------

const bodyParser = require("body-parser")
const database = require("./database")

app.use(bodyParser.urlencoded({ extended: true}))

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
    res.send(database.getProducts())
})

app.get("/products/:id", (req, res, next) => {
    res.send(database.getProduct(req.params.id))
})

// create data
app.post("/products", (req, res, next) => {
    const product = database.saveProduct({        
        name: req.body.name,
        price: req.body.price
    })

    res.send(product) // JSON
})

// update data
app.put("/products/:id", (req, res, next) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })

    res.send(product) // JSON
})

app.delete("/products/:id", (req, res, next) => {
    const product = database.deleteProduct(req.params.id)
    res.send(product) // JSON
})

app.listen(port, () => {
    console.log(`Server listening to the port ${port}.`)
})