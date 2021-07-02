const fs = require("fs");
const chalk = require("chalk");

// - Loading the Notes from json file

const loadNotes = () => {
    try{
    const notesBuffer = fs.readFileSync("./notes.json");
    const notesString = notesBuffer.toString();
    return JSON.parse(notesString);
    }catch(err){
        return [];
    }
}

// - save the notes in json file

const saveNote = (note) => {
    const notes = loadNotes();
    notes.push(note);
    fs.writeFileSync("./notes.json", JSON.stringify(notes))
    console.log(chalk.green("Note saved."))
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const noteFound = notes.find(note => note.title === title)
    if(noteFound){
        console.log(chalk.red("Note already exists!"));
    }else{
        const note = { title , body };
        saveNote(note);
    }
}


module.exports = {
    addNote
}