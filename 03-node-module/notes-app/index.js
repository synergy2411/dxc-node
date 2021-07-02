const yargs = require("yargs");
const { addNote } = require("./utils/notes");

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            type : "string",
            demandOption : true,
            description : "Title for new note"
        },
        body : {
            type : "string",
            demandOption : true,
            description : "Body for new note"
        }
    },
    handler : (argv) => {
        const { title, body} = argv;
        console.log(title, body);
        addNote(title, body);
    }
})

yargs.parse();


// Core Module - FS
// External - yargs, chalk
// file module - notes.js

