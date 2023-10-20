const express = require("express");
const mangaRouter = express.Router();
const Manga = require("../models/manga");
const Chapter = require("../models/chapter");
const Rating = require("../models/rating");
const { json } = require("body-parser");
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
mangaRouter.get('/home', async (req, res) => {
  try {
    const allManga = await Manga.find();
    const mangaData = allManga.map(manga => {
      return {
        _id: manga._id,
        name: manga.name,
        author: manga.author,
        image: manga.image
      };
    });
    console.log(mangaData)
    res.render('home', { mangaData });
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
mangaRouter.get('/home/detail/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const mangaID = await Manga.findById(id);
    const mangaArray = [];
    mangaArray.push(mangaID);
    const mangaData = mangaArray.map(manga => {
      return {
        name: manga.name,
        author: manga.author,
        image: manga.image,
        status: manga.status,
        
      };
    });
    console.log("mangaData",mangaData);
    const allChapter = await Chapter.find();
    const chapterData = allChapter.map(chapter => {
      return {
        _id: chapter._id,
        name: chapter.name,
        title: chapter.title,
        content: chapter.content
      };
    });
    if (!mangaData) {
      return res.status(404).json({ message: 'Không tìm thấy truyện!' });
    }
    res.render('detailManga', { mangaData, chapterData });
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
