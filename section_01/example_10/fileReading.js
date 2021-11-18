// fs is a core module. It comes bu default
const fs = require("fs")

const path = __dirname + "/file.json"

// sync
const content = fs.readFileSync(path, "utf-8")
console.log(content)

// async
fs.readFile(path, "utf-8", (err, content) => {
    // JSON.parse to transform in an object
    const config = JSON.parse(content)
    console.log(`${config.db.host}:${config.db.port}`)
})

// using require
const config = require("./file.json")
console.log(config.db)

// reading files of a directory
fs.readdir(__dirname, (err, files) => {
    console.log("Folder Content")
    console.log(files)
})