const express = require("express");
const router = express.Router();
const {
  getMailsDetails,
  postData,
  deleteData,
} = require("../controllers/mailController");

router.get("/mails", getMailsDetails);
router.post("/sendMail", postData);
router.delete("/mail/:id", deleteData);

module.exports = router;
