const UserModel = require("../model/user");

const findAllUser = async (req, res) => {
    try{
        const allUsers = await UserModel.find()
        return res.send({data : allUsers})
    }catch(err){
        return res.send(err)
    }
}
const createUser = async (req, res) => {
    if(req.body){   
        try{
            const newUser = new UserModel({...req.body});
            const user = await newUser.save();
            return res.send({...user._doc}).status(201);
        }catch(err){
            return res.status(501)
        }
    }else{
        return res.send({message : "body not found"})
    }
}

const findOneUser = async (req, res) => {
    const { id } = req.params;
    try{
        const userFound = await UserModel.findById(id)
        if(userFound){
            return res.send({...userFound._doc})
        }else{
            return res.send({message : "User not found for ID -", id})
        }
    }catch(err){
        return res.send({err})
    }
}

const deleteUser = async (req, res) => {}
const updateUser = async (req, res) => {}

module.exports =  {
    findAllUser,
    findOneUser,
    createUser,
    deleteUser,
    updateUser
}