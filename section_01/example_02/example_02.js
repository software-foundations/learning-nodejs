// import vendos modules
const _ = require('lodash')

/*
link: https://developer.mozilla.org/en-US/docs/Web/API/setInterval

The setInterval() method, offered on the Window and Worker 
interfaces, repeatedly calls a function or executes a code 
snippet, with a fixed time delay between each call.
*/
setInterval(
    handler = () => console.log(_.random(50, 100)),
    timeout = 2000
)