const TodoModel = require("../model/todo.model");

const getTodos = async (req, res) => {
    try{
    const allTodos = await TodoModel.find()
    return res.send({data : allTodos})
    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

const createTodo = async (req, res) =>{
    try{
    const todo = new TodoModel({...req.body});
    const savedTodo = await todo.save()
    // console.log(savedTodo);
    return res.send(savedTodo)
    }catch(e){
        console.log(e)
        return res.send(e)
    }
}

const getTodo = async (req, res) => {
    try{
        const { id} = req.params;
        const userFound = await TodoModel.findById(id)
        return res.send({...userFound._doc});
    }catch(e){
        console.log(e);
        return res.send(e)
    }
} 


module.exports = { getTodos, createTodo, getTodo }