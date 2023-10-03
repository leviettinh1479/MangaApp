const mongoose = require("mongoose");

const chapterSchema = mongoose.Schema({
  name: String,
  title: String,
  chap: Number,
  image: [String],
  content: String,
  report: [{
    type: mongoose.Schema.Types.Mixed,
    ref: 'Report'
  }],
  createdAt: { type: Date, default: Date.now }
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;