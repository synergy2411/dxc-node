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

module.exports = {
    getMails,
    createMail
}