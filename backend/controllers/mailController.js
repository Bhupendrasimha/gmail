const Mails = require("../models/mail");
const { v4: uuidv4 } = require("uuid");

const getMailsDetails = (req, res) => {

  Mails.find()
    .then((mails) => {
      res.json(mails);
    })
    .catch((err) => res.status(500).json("Error" + err));
};

const deleteData = (req, res) => {
  console.log(req.params.id);
  Mails.findByIdAndDelete(req.params.id)
    .then(() => res.json("MAILS deleted sucessfull"))
    .catch((err) => res.status(400).json("ERROR" + err));
};

const postData = (req, res) => {



  let id = uuidv4();
    let date=new Date().toLocaleString()
  const { sender, title, box,content,email } = req.body;
  const newMail = new Employees({
    id,
    sender,
    title,
    content,
    email,
    box,
    date
  });

  newMail
    .save()
    .then(() => res.json("Employees added"))
    .catch((err) => res.status(400).json("Error" + err));
};
module.exports = { getMailsDetails,  postData, deleteData };