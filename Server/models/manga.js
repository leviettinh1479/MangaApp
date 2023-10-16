const mongoose = require("mongoose");
const ratingSchema = require("./rating");
const Genre = require("./genre"); // Import schema Genre

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
  genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }], // Sử dụng ObjectId để tham chiếu đến Genre
  rating: [ratingSchema],
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }]
});

const Manga = mongoose.model("Manga", mangaSchema);
module.exports = Manga;
