// do it only one time will abble global module for all js files
require("./global")

// both works the same
// console.log(global.myApp.sayHello())
console.log(MyApp.sayHello())

MyApp.name = "My new App name"

console.log(MyApp.name)

console.log(MyFrozenApp)

MyFrozenApp.name = "New name to my frozen app"

console.log(MyFrozenApp.name)
