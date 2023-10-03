const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  name: String,
  description: String,
  manga: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manga' // 'Manga' là tên mô hình truyện
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter' // 'Chapter' là tên mô hình chương
  }

});

module.exports = mongoose.model('Report', reportSchema);
