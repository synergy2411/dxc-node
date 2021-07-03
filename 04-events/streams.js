const { Stream, Readable, Writable, Transform, Duplex } = require("stream")
const { EventEmitter } = require("events");

const { createGzip } = require("zlib");
const { createReadStream, createWriteStream } = require("fs");
const { pipeline } = require("stream");
const gzip = createGzip();

pipeline(
    createReadStream("./globals.js"), 
    gzip, 
    createWriteStream("./globals.gz"), (err) => {
        if(err) console.log("ERROR - ", err)
    })

// createReadStream("./globals.js")
//     .pipe(gzip)
//     .pipe(createWriteStream("./globals.gz"))


// console.log(new Stream() instanceof EventEmitter);

// console.log(new Readable() instanceof Stream);      // Request, process.stdin
// console.log(new Writable() instanceof Stream);      // Response, process.stdout
// console.log(new Transform() instanceof Stream);     // Compression, Zip File
// console.log(new Duplex() instanceof Stream);        // Readable as well Writable - FileSystem/ DB / Network Socket


// Transform ->
// Takes input (READ_STREAM) -> Transfrom data -> Output Stream(WRITE_STREAM)
// readStream("./globals.js").pipe(gzip).pipe(writeStream("./global.gz"))