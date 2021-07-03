const fs = require("fs");
const chalk = require("chalk");

// - Loading the Notes from json file

const loadNotes = () => {
  try {
    fs.readFile("./notes.json", (err, data) => {
      if (err) {
        return [];
      } else {
        return JSON.parse(data.toString());
      }
    });

    // const notesBuffer = fs.readFileSync("./notes.json");
    // const notesString = notesBuffer.toString();
    // return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

// - save the notes in json file

const saveNote = (notes) => {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  console.log(chalk.green("Notes saved."));
};

const addNote = (title, body) => {
  return new Promise((resolve, reject) => {
    const notes = loadNotes();
    const noteFound = notes.find((note) => note.title === title);
    if (noteFound) {
      console.log(chalk.red("Note already exists!"));
    } else {
      const note = { title, body };
      notes.push(note);
      saveNote(notes);
    }
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find((note) => note.title === title);
  if (noteFound) {
    console.log(chalk.grey("Title : ", noteFound.title));
    console.log(chalk.grey("Body : ", noteFound.body));
  } else {
    console.log(chalk.red("Note not found, Try again!"));
  }
};

const removeNote = (title) => {
  // remove the note based upon the title
  const notes = loadNotes();
  const noteFound = notes.find((note) => note.title === title);
  if (noteFound) {
    const duplicateNotes = notes.filter((note) => note.title !== title);
    saveNote(duplicateNotes);
  } else {
    console.log(chalk.red("Note not found"));
  }
};

const listNote = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.grey("-------------------------"));
    console.log(chalk.grey("Title : ", note.title));
    console.log(chalk.grey("Body : ", note.body));
  });
};

module.exports = {
  addNote,
  readNote,
  removeNote,
  listNote,
};
