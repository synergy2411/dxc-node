const { EventEmitter } = require("events") // Native Module
const { theHandler } = require("./globals")
const emitter = new EventEmitter();

// - on() : register the handler with events
// - emit() : fires/ produce / trigger the events
// - One Event can have multiple subscriber
// - pubsub pattern

emitter.on("newListener", (eventName, listenerFunc) => {
    console.log(eventName + " registered with ", listenerFunc.name);
})

const fooHandler = (data) => {
    console.log("Foo Event Handler 1", data.message);
}
const fooHandler2 = (data) => {
    console.log("Foo Event Handler 2", data.message);
}

emitter.on("foo", fooHandler)
emitter.on("foo", fooHandler2)
emitter.on("foo", theHandler)

emitter.emit("foo", {message : "Hello World" })

