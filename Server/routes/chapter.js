const express = require("express");
const mangaRouter = express.Router();
const Manga = require('../models/manga');
//Add chapter
mangaRouter.post("/:mangaId/addchapter", async (req, res, next) => {
  try {
    const mangaId = req.params.mangaId;
    const { name, title, chap, image, content, report, createdAt } = req.body;

    const manga = await Manga.findById(mangaId);

    if (!manga) {
      return res.status(404).json({ message: "Truyện không tồn tại" });
    }

    const newChapter = {
      name,
      title,
      chap,
      image,
      content,
      report,
      createdAt
    };

    manga.chapters.push(newChapter);
    await manga.save();

    res.status(201).json({ message: "Chương mới đã được thêm vào truyện" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
});
//Get by id
mangaRouter.get('/api/manga/:mangaId/chapter/:chap', async (req, res) => {
  const mangaId = req.params.mangaId;
  const chapNumber = parseInt(req.params.chap, 10); // Chuyển chap từ string sang number

  try {
    const manga = await Manga.findById(mangaId);

    if (!manga) {
      return res.status(404).json({ message: 'Không tìm thấy truyện với id đã cho' });
    }

    const chapter = manga.chapters.find(chap => chap.chap === chapNumber);

    if (!chapter) {
      return res.status(404).json({ message: `Không tìm thấy chương ${chapNumber}` });
    }

    res.json(chapter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get all chapters
mangaRouter.get('/api/manga/:mangaId/chapters', async (req, res) => {
  const mangaId = req.params.mangaId;

  try {
    const manga = await Manga.findById(mangaId);

    if (!manga) {
      return res.status(404).json({ message: 'Không tìm thấy truyện với id đã cho' });
    }

    const chapters = manga.chapters;
    res.json(chapters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = mangaRouter;
