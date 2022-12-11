const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    name:String,
    userId:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
  },
  {timestamps:true}
)
module.exports = mongoose.model("User",postSchema)