const express = require("express");
const mangaRouter = express.Router();
const Manga = require('../models/manga');
// Add manga
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
//Get by id
mangaRouter.get('/api/manga/:id', async (req, res) => {
  const mangaId = req.params.id;

  try {
    const manga = await Manga.findById(mangaId);

    if (!manga) {
      return res.status(404).json({ message: 'Không tìm thấy truyện với id đã cho' });
    }

    res.json(manga);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get All
mangaRouter.get('/api/manga', async (req, res) => {
  try {
    const mangas = await Manga.find();
    res.json(mangas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = mangaRouter;
