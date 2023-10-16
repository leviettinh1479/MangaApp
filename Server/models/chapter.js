const mongoose = require("mongoose");

const chapterSchema = mongoose.Schema({
  name: String,
  title: String,
  chap: Number,
  image: [String],
  content: String,
  mangaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Manga' }, 
  createdAt: { type: Date, default: Date.now }
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
