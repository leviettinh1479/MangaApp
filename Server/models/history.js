const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  user: {
    require: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  chapter: {
    require: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  },
  createdAt: { type: Date, default: Date.now }
});

const History = mongoose.model('History', historySchema);

module.exports = History;
