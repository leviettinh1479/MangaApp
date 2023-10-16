const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  name: String,
  description: String,
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
