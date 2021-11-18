// fs is a core module. It comes with node bu default
const fs = require("fs")

const product = {
    name: "Smartphone",
    price: "4249.99",
    discount: 0.15
}

// sync
fs.writeFile(
    __dirname + "/generatedFile.json",
    JSON.stringify(product),
    err => {console.log(err || "File saved!")})
