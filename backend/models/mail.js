const mongoose = require("mongoose");
const { Schema } = mongoose;

const mailsSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Mails", mailsSchema);
