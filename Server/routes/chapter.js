const express = require("express");
const mangaRouter = express.Router();
const Manga = require('../models/manga');

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

module.exports = mangaRouter;
