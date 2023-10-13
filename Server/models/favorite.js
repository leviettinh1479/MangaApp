const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema({
  manga: {
    require: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manga'
  },
  createdAt: { type: Date, default: Date.now }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
