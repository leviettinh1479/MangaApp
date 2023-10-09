const express = require("express");
const mangaRouter = express.Router();
const Manga = require("../models/manga");
const Rating = require("../models/rating");
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
      chapters, // Assign the array of chapters
    });

    await manga.save();
    res.status(201).json({ message: "Truyện tranh đã được thêm" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
});
//Get All
mangaRouter.get("/api/manga", async (req, res) => {
  try {
    const mangas = await Manga.find();
    res.json(mangas);
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
mangaRouter.get("/api/manga/:id", async (req, res) => {
  const mangaId = req.params.id;
  try {
    const manga = await Manga.findById(mangaId);
    if (!manga) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy truyện với id đã cho" });
    }
    res.json(manga);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//add report
mangaRouter.post('/api/manga/reports/:mangaId/chapters/:chapterIndex', async (req, res) => {
  const { mangaId, chapterIndex } = req.params;
  const { name, description, userId } = req.body;

  try {
    const manga = await Manga.findById(mangaId);

    if (!manga) {
      return res.status(404).json({ message: 'Không tìm thấy manga' });
    }

    if (chapterIndex < 0 || chapterIndex >= manga.chapters.length) {
      return res.status(404).json({ message: 'Chương không hợp lệ' });
    }

    // Kiểm tra nếu chapters[chapterIndex] là một mảng
    if (!Array.isArray(manga.chapters[chapterIndex].report)) {
      manga.chapters[chapterIndex].report = []; // Khởi tạo mảng report nếu không tồn tại
    }

    const newReport = {
      name,
      description,
      user: userId
    };

    manga.chapters[chapterIndex].report.push(newReport);
    const updatedManga = await manga.save();

    res.status(201).json(updatedManga);
  } catch (error) {
    res.status(500).json({ message: 'Đã xảy ra lỗi', error: error.message });
  }
});


module.exports = mangaRouter;
