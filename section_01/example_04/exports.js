// this and exports are the same reference for module.exports
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// exports is just an object
// exports != module.exports
exports = null
console.log(module.exports)

// exports != module.exports
exports = {
    nome: "Teste"
}

console.log(module.exports)

// this ignores all other exports before that
module.exports = {public_attr: true}