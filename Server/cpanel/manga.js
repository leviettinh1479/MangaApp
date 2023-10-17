const express = require("express");
const mangaRouter = express.Router();
const Manga = require("../models/manga");
const Rating = require("../models/rating");
// Add manga
mangaRouter.post("/api/manga/addmanga", async (req, res) => {
  try {
    const { name, image, author, status, genre, rating, chapters } = req.body;

  
    const newManga = new Manga({
      name,
      image,
      author,
      status,
      genre,
      rating,
      chapters
    });


    await newManga.save();

    res.status(201).json({ message: 'Truyện đã được thêm thành công!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get All
mangaRouter.get('/', async (req, res) => {
  try {
    const allManga = await Manga.find();
    console.log(allManga);
    res.render('home',{allManga});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Rating manga
mangaRouter.post("/api/manga/:mangaId/rate", async (req, res) => {
  try {
    const { mangaId } = req.params;
    const { userId, rating } = req.body;

    const existingManga = await Manga.findById(mangaId);

    if (!existingManga) {
      return res.status(404).json({ error: "Manga không tồn tại" });
    }

    const existingRating = existingManga.rating.find(
      (r) => r.userId.toString() === userId
    );

    if (existingRating) {
      existingRating.rating = rating;
    } else {
      existingManga.rating.push({ userId, rating });
    }

    await existingManga.save();

    res.json({ message: "Đã đánh giá manga" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//get element by name and author
mangaRouter.get("/api/manga/search", async (req, res) => {
  try {
    const { keyword } = req.query;

    const searchResult = await Manga.find({
      $or: [
        { name: { $regex: new RegExp(keyword, "i") } },
        { author: { $regex: new RegExp(keyword, "i") } },
      ],
    });

    console.log(searchResult); // Log kết quả để kiểm tra

    res.json(searchResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//Get by id
mangaRouter.get('/api/manga/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const manga = await Manga.findById(id);

    if (!manga) {
      return res.status(404).json({ message: 'Không tìm thấy truyện!' });
    }

    res.json(manga);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete manga
mangaRouter.delete('/api/manga/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await Manga.findByIdAndDelete(id);

    res.json({ message: 'Truyện đã được xóa thành công!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//Update manga
mangaRouter.put('/api/manga/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMangaData = req.body;

    const updatedManga = await Manga.findByIdAndUpdate(id, updatedMangaData, { new: true });

    res.json(updatedManga);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = mangaRouter;
