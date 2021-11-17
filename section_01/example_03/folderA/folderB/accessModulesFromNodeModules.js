/*
1. create folder inside node_modules folder

    mkdir node_modules/test-own-module

2. create a index.js inside this folder

3. module.export {something} in index.js
    
    module.exports = {
        hello: "Hello from test-own-module"
    }

4. const <var_name> require <test-own-module> 
*/

const myOwnModule = require("test-own-module")

console.log(myOwnModule.hello)
