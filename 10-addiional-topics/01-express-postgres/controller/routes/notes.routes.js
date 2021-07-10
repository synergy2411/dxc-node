const client = require("../../db");
const { v4 } = require("uuid");

const createNote = async (req, res) => {
  const {title, body} = req.body;
  const newNote = [v4(), title, body]
  try{
  const savedNote = await client.query(
    "INSERT INTO notes (id, title, body) VALUES ($1, $2, $3)",
    newNote
    )
    return res.send(savedNote);
  }catch(e){
    console.log(e);
    return res.send(e);
  }

};

const getNotes = async (req, res) => {
  try {
    const notes = await client.query("SELECT * FROM notes");
    if(notes.rows){
        return res.send({payload : notes.rows})
    }else{
        return res.send({message : "No record found"})
    }
  } catch (e) {
    return res.send(e);
  }
};

module.exports = { createNote, getNotes };


// SELECT * FROM notes WHERE ID = {id}