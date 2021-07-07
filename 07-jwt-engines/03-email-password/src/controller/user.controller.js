const UserModel = require("../model/user");
const bcrypt = require("bcryptjs");
const fs = require("fs");

const findAllUser = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    let resultArray = [];
    for(let user of allUsers){
      const newUser = {...user._doc, password : null};
      resultArray.push(newUser)
    }
    console.log(resultArray);
    return res.send({ data: resultArray });
  } catch (err) {
    return res.send(err);
  }
};
const createUser = async (req, res) => {
  if (req.body) {
    const { password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 12)
      const newUser = new UserModel({ 
        ...req.body, 
        password : hashedPassword,
        avatar : {
          data : fs.readFileSync(__dirname + "/../uploads/"+req.file.filename),
          contentType : req.file.mimetype
        }
      });
      const user = await newUser.save();
      return res.send({ ...user._doc, password : null }).status(201);
    } catch (err) {
      console.log(err);
      return res.status(501).send(err);
    }
  } else {
    return res.send({ message: "body not found" });
  }
};

const findOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userFound = await UserModel.findById(id);
    if (userFound) {
      return res.send({ 
        ...userFound._doc, 
        password : null,
        avatar : `data:image/${userFound._doc.avatar.contentType};base64,${userFound._doc.avatar.data.toString('base64')}`
      });
    } else {
      return res.send({ message: "User not found for ID -", id });
    }
  } catch (err) {
    return res.send({ err });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deleteUser._doc._id) {
        return res.send({ message: "User not found for ID - " + id });
    } else {
        return res.send({ ...deletedUser._doc });
    }
  } catch (err) {
    return res.send(err);
  }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    try{
    const updatedUser = await UserModel.findByIdAndUpdate(id, {...req.body});
    console.log("UPDATED USER - ", updatedUser)
    if(updatedUser){
        return res.send({...updatedUser._doc})
    }else{
        return res.send({message : "unable to update"})
    }
    }catch(err){
        return res.send(err)
    }
};

module.exports = {
  findAllUser,
  findOneUser,
  createUser,
  deleteUser,
  updateUser,
};
