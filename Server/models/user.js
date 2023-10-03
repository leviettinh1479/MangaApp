const mongoose = require("mongoose");
// const  {chapterSchema}  = require("./chapter");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    default:"",
  },
  email: {
    required: true,
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return value.match(re);
      },
      message: "Please enter a valid email address",
    },
  },
  address: {
    type: String,
    default: "",
  },
  date:{
    type: Date,
    default: new Date,
  },
  status: {
    type: Number,
    default: 0,
  },
  favorite: [
    {

    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
