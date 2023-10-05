const mongoose = require("mongoose");
// const  {chapterSchema}  = require("./chapter");

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
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
  password: {
    required: true,
    type: String,
    trim: true,
    // validate: {
    //   validator: (value) => {
    //     const re =
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    //     return value.match(re);
    //   },
    //   message: "Mật khẩu phải có ít nhất 8 ký tự, chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số",
    // },
  },
  address: {
    type: String,
    default: "",
  },
  image: {
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
  role: {
    type: Number,
    default: 1,
  },
  isVerified: {
    type: Boolean,
    default: false,
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
