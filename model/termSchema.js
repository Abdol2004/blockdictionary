const mongoose= require("mongoose");

const termSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
        unique: true,
      },
      defination: {
        type: String,
        required: true,
      },
      example:{
        type: String,
        required: true,
      },
      dateCreated: {
        type: Date,
        default: Date.now,
      },
})

const Term= mongoose.model("Term", termSchema)
module.exports = Term;