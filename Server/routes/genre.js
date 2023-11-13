// Import các module cần thiết
const express = require("express");
const genreRouter = express.Router();
const Genre = require("../models/genre");
const Manga = require('../models/manga');

// Route để thêm thể loại
genreRouter.post("/api/genre/add", async (req, res) => {
  try {
    const { name } = req.body;

    const existingGenre = await Genre.findOne({ name });

    if (existingGenre) {
      return res.status(400).json({ message: "Thể loại đã tồn tại" });
    }

    const newGenre = new Genre({
      name,
    });

    await newGenre.save();

    res.status(201).json({ message: "Thêm thể loại thành công" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get all genres 
genreRouter.get("/api/genre/getall", async (req, res) => {
  try {
    const genres = await Genre.find();

    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get chapter by ID
genreRouter.get('/api/genre/:id', async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    res.json({ success: true, genre });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});




module.exports = genreRouter;
