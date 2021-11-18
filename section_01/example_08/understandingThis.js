// false
console.log(this === global)
console.log(this === module)

// true
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log("Inside a function")

    //true
    console.log(this === global)

    // false
    console.log(this === module.exports)
    console.log(this === exports)
}

logThis()
