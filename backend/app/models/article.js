const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    userGuid: String,
    // imageUrl:String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", postSchema);
