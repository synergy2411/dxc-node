const { BADHINTS } = require("dns");
const { EventEmitter } = require("events") // Native Module
const { theHandler } = require("./globals")
const emitter = new EventEmitter();

// - on() : register the handler with events
// - emit() : fires/ produce / trigger the events
// - One Event can have multiple subscriber
// - pubsub pattern

// add the handler with the event
emitter.on("newListener", (eventName, listenerFunc) => {
    console.log(eventName + " registered with ", listenerFunc.name);
})

// remove the handle from the event
emitter.on("removeListener", (eventName, listenerFunc) => {
    console.log(eventName + " removed from " + listenerFunc.name);
})

const fooHandler = (data) => {
    console.log("Foo Event Handler 1", data.message);
    emitter.removeListener("foo", fooHandler2);
}
const fooHandler2 = (data) => {
    console.log("Foo Event Handler 2", data.message);
}

emitter.once("foo", fooHandler)
emitter.on("foo", fooHandler2)
emitter.on("foo", theHandler)

emitter.emit("foo", {message : "Hello World" })
emitter.emit("foo", {message : "Hello Node" })

















// <button id="btn">Click Me</button>

// <script>
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {})

// </script>

// <button onclick="clicked()">Click me</button>
// <script>
// function clicked(){
//     console.log("CLicked")
// }
// </script>
// btn.addEventListener("click", () => {})