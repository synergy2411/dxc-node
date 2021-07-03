// console.log(__filename);
// console.log(__dirname);

// process.on("uncaughtException", (err) => {
//     console.log("ERROR", err)
//     console.log("ERROR", err.stack)
//     process.exit(1);
// })

// process.on("exit", (code) => {
//     console.log("Process exit with code - ", code);
// })

// nonExist();

// setTimeout(() => {
//     console.log("Exited after 5 seconds")
// }, 5000);
// console.log("About to exit in 5 seconds");

// process.on("SIGINT", () => {            // Signal Interruption -> Ctrl + C
//     console.log("Ignoring....");
// })

// Ctrl + C

// Macro Task
// setTimeout(() => {
//     console.log("After 5 Seconds")
// }, 5000)
// setTimeout(() => {
//     console.log("After 4 Seconds")
// }, 4000)
// setTimeout(() => {
//     console.log("After 3 Seconds")
// }, 3000)
// setTimeout(() => {
//     console.log("After 2 Seconds")
// }, 2000)

// // Micro Task
// Promise.resolve().then(result => {console.log("RESOLVED")});

// console.log("Immediate")


// const buffer = new Buffer("Some Buffer");
// const roundTrip = buffer.toString();
// console.log(buffer, roundTrip);

const theHandler = data => {
    console.log("The Handler in other Module - ", data.message);
}
module.exports = {
    theHandler
}