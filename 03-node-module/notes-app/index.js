const yargs = require("yargs");
const { addNote, readNote, removeNote, listNote } = require("./utils/notes");

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
        // console.log(title, body);
        addNote(title, body);
    }
})


yargs.command({
    command : "read",
    description : "to read single note",
    builder : {
        title : {
            type : "string",
            demandOption : true,
            description : "title to search single note"
        }
    },
    handler : argv => {
        readNote(argv.title)
    }
})

yargs.command({
    command : "remove",
    description : "to remove single note",
    builder : {
        title : {
            type : "string",
            demandOption : true,
            description : "to remove single note"
        }
    }, 
    handler : argv => {
        removeNote(argv.title);
    }
})


yargs.command({
    command : "list",
    description : "to list down all notes",
    handler : argv => {
        listNote();
    }
})

yargs.parse();


// Core Module - FS
// External - yargs, chalk
// file module - notes.js

