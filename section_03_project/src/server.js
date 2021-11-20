// a port corresponds to a process
// reverse proxy: make various application listen to the same port
// a reverse proxy dispatch the request to the the the correct port application
const port = 3003

// Express v4.16.0 e superior
// to solve TypeError: Cannot read property &#39;name&#39; of undefined
// --------------------------
const express = require('express');
const app = express()
 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// --------------------------

const database = require("./database")

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

app.post("/products", (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })

    res.send(product)
})

app.listen(port, () => {
    console.log(`Server listening to the port ${port}.`)
})