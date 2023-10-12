const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  name: String,
  description: String,
  chapter: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  manga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manga",
  },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
