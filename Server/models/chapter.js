const mongoose = require("mongoose");
const reportSchema = require("./report");

const chapterSchema = mongoose.Schema({
  name: String,
  title: String,
  chap: Number,
  image: [String],
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
