const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: String // Tên thể loại
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;