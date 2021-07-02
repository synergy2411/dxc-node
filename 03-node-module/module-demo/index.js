
// CommonJS Module
// File Module
const {add, getLuckyNumber} = require("./utils/math")

// Native / Core Module
const path = require("path")
const os = require("os");
const fs = require("fs");
const http = require("http");

// External Modules - install them explicitly

const chalk = require("chalk");
const yargs = require("yargs");


// console.log(chalk.red("Some Error"))
// console.log(chalk.green("The Result"))
// console.log(chalk.blue("The Result"))

console.log(process.argv);
console.log(yargs.parse());
// node index.js --key="value"







// 'something' is name of the packages


require("something")    // 

// external module
require("something")    
// node_modules/something/index

// parentFolder/node_modules/something/index

// ancestorFolder/node_modules/something/index

// globalEnvironment/node_modules/something/index

// throw err = module not found

// file Module - local path
require("../something")






























// const server = http.createServer((request, response) => {
//     // Request is readable
//     console.log("METHOD : ", request.method)
//     console.log("URL : ", request.url);
//     console.log("Headers : ", request.headers)
    
//     // Response is writable
//     response.writeHead(200);
//     response.write("Hello World!");
//     response.end();
// })

// server.listen(4000)
// // localhost:4000

// console.log("Server started at port 4000");





// Synchronous way
// const contentsBuffer = fs.readFileSync("./package.json");
// console.log(contentsBuffer.toString());

// Asynchronous way
// fs.readFile("./package-lock.json", (err, data) => {
//     if(err) console.log(err);
//     // console.log(data.toString());
// })

// Streams
// const readStream = fs.createReadStream("./package.json")
// const writeStream = fs.createWriteStream("./build.js")
// Pipe() - connects two streams  input | ouput
// readStream.pipe(writeStream);





// const url = "http://www.example.com/public/index.html";

// console.log(path.dirname(url));
// console.log(path.extname(url));
// console.log(path.basename(url));

// console.log("Architecture : ", os.arch());
// console.log("Total Memory : ", os.totalmem());
// console.log("Free Memory : ", os.freemem());
// console.log("Number of CPUs", os.cpus().length);


// ES6 Module

// import { add, getLuckyNumber } from './utils/math';

// console.log(add(5,5));

// console.log("Lucky Number : ", getLuckyNumber());