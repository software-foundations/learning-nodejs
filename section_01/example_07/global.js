// global object
// use this carrefuly
// prefere user module systems instead of global

global.MyApp = {
    sayHello() {
        return "Hello: I am global. I'm anywhere"
    },
    name: "My App"
}

// Object.freeze doesn't allow change object properties
// Imutable object
global.MyFrozenApp = Object.freeze({
    sayHello() {
        return "Hello: I am global. I'm anywhere"
    },
    name: "My App"
})