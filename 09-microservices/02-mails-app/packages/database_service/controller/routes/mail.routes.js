const MailModel = require("../model/mail.model")

const getMails = async (req, res) => {
    try{
        const allMails = await MailModel.find()
        return res.send(allMails)
    }catch(e){
        console.log(e);
        return res.send(e)
    }
}

const createMail = async (req, res) => {
    const newMail = new MailModel({...req.body});
    try{
        const mail = await newMail.save()
        return res.send({...mail._doc})
    }catch(err){
        console.log(err)
        return res.send(err)
    }
}

const getMail = async (req, res) => {
    const { id }= req.params;
    try{
    const foundMail = await MailModel.findById(id)
    return res.send({...foundMail._doc})
    }catch(e){
        console.log(e)
        return res.send(e)
    }
}

module.exports = {
    getMails,
    createMail,
    getMail
}