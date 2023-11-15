const express = require("express");
const mangaRouter = express.Router();
const Manga = require("../models/manga");
const Genre = require("../models/genre");
const Rating = require("../models/rating");
const auth = require('../middlewares/auth');

// Add manga
// mangaRouter.post("/api/manga/addmanga", async (req, res) => {
//   try {
//     const { name, image, author, status, genre, rating, chapters } = req.body;

  
//     const newManga = new Manga({
//       name,
//       image,
//       author,
//       status,
//       genre,
//       rating,
//       chapters
//     });


//     await newManga.save();

//     res.status(201).json({ message: 'Truyện đã được thêm thành công!' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
//Get All
//[auth.authenApp],
mangaRouter.get('/api/manga',  async (req, res) => {
  try {
    const allManga = await Manga.find();

    res.status(200).json({ message: "Đã lấy manga" ,allManga});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Rating manga
mangaRouter.post("/api/manga/:mangaId/rate", [auth.authenApp], async (req, res) => {
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

    res.json({ message: "Đã đánh giá manga" ,existingManga });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//get element by name and author
mangaRouter.get("/api/manga/search", [auth.authenApp], async (req, res) => {
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
// [auth.authenApp],
mangaRouter.get('/api/manga/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const manga = await Manga.findById(id);

    if (!manga) {
      return res.status(404).json({ message: 'Không tìm thấy truyện!' });
    }

    res.status(200).json({ message: "Đã lấy manga" ,manga});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete manga
mangaRouter.delete('/api/manga/:id', [auth.authenApp], async (req, res) => {
  try {
    const { id } = req.params;

    await Manga.findByIdAndDelete(id);

    res.json({ message: 'Truyện đã được xóa thành công!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//Update manga
mangaRouter.put('/api/manga/:id', [auth.authenApp], async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMangaData = req.body;

    const updatedManga = await Manga.findByIdAndUpdate(id, updatedMangaData, { new: true });

    res.json(updatedManga);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get genres by manga ID
mangaRouter.get("/api/manga/getgenres/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const manga = await Manga.findById(id).populate('genre', 'name'); 

    if (!manga) {
      return res.status(404).json({ message: "Không tìm thấy truyện!" });
    }

    // Trích xuất chỉ các tên thể loại từ mảng genre
    const genres = manga.genre.map(genre => genre.name);

    res.json({ success: true, genres });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



module.exports = mangaRouter;
