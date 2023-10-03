const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Report', reportSchema);
