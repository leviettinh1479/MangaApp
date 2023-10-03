const mongoose = require("mongoose");

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
  chapters: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Chapter'
  }],
});

const Manga = mongoose.model("Manga", mangaSchema);
module.exports = Manga;
