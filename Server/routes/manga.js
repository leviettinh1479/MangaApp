const express = require("express");
const mangaRouter = express.Router();
const Manga = require('../models/manga'); // Path to the Manga model

mangaRouter.post("/api/addmanga", async (req, res, next) => {
  try {
    const { name, image, author, status, genre, chapters } = req.body;

    const manga = new Manga({
      name,
      image,
      author,
      status,
      genre,
      chapters // Assign the array of chapters
    });

    await manga.save();

    res.status(201).json({ message: "Truyện tranh đã được thêm" });
  } catch (error) {
    // Return the actual error message
    res.status(500).json({ message: error.message });
    // Pass the error to the next error-handling middleware (if any)
    next(error);
  }
});

module.exports = mangaRouter;
