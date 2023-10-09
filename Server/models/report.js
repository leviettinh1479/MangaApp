const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  name: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  }

});
module.exports = reportSchema;
