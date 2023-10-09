const mongoose = require("mongoose");
const ratingSchema = require("./rating");
const reportSchema = require("./report");
const mangaSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  author: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "Đang tiến hành",
  },
  genre: [String],
  rating: [ratingSchema],
  chapters: [
    {
      type: mongoose.Schema.Types.Mixed,
      ref: "Chapter",
      report: [reportSchema],
    },
  ],
});

const Manga = mongoose.model("Manga", mangaSchema);
module.exports = Manga;
