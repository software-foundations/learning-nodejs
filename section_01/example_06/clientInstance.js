/*
Node, by default, make cache of required modules
A way to don't do this is use factory function (module.exports = () => {...})
*/

// counterA == counterB
const counterA = require("./singleInstance")
const counterB = require("./singleInstance")

// (): invoke factory function
// counterc != counterD
const counterC = require("./newInstance")()
const counterD = require("./newInstance")()

counterA.incrementValue()
counterA.incrementValue()
console.log(counterA.value, counterB.value)

counterC.incrementValue()
counterC.incrementValue()
console.log(counterC.value, counterD.value)
