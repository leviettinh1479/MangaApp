const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  name: String,
  description: String,
  manga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manga' 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  }

});

module.exports = mongoose.model('Report', reportSchema);
