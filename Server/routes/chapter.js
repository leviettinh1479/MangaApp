const express = require("express");
const mangaRouter = express.Router();
const Manga = require("../models/manga");
//Add chapter
mangaRouter.post("/:mangaId/addchapter", async (req, res, next) => {
const Chapter = require("../models/chapter");
const { findById } = require("../models/genre");

// Add chapter
chapterRouter.post("/api/chapter/addchapter", async (req, res) => {
  try {
    const mangaId = req.params.mangaId;
    const { name, title, chap, image, content, createdAt } = req.body;

    const manga = await Manga.findById(mangaId);
    const existingChapter = manga.chapters.find(
      (chapter) => chapter.chap === chap
    );
    if (existingChapter) {
      return res.status(400).json({ message: "Chương đã tồn tại" });
    }
    if (!manga) {
      return res.status(404).json({ message: "Truyện không tồn tại" });
      return res
        .status(400)
        .json({ success: false, message: "Chapter đã tồn tại" });
    }

    const newChapter = {
      name,
      title,
      chap,
      image,
      content,
      mangaId,
    });

    manga.chapters.push(newChapter);
    await manga.save();

    res.status(201).json({ message: "Chương mới đã được thêm vào truyện" });
    // Add the new chapter's ID to the corresponding Manga's chapters array
    await Manga.findByIdAndUpdate(mangaId, {
      $push: { chapters: newChapter._id },
    });

    res.status(201).json({ success: true, chapter: newChapter });
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
});
//Get by id
mangaRouter.get("/api/manga/:mangaId/chapter/:chap", async (req, res) => {
  const mangaId = req.params.mangaId;
  const chapNumber = parseInt(req.params.chap, 10);

// Get all chapters
chapterRouter.get("/api/chapter/getall", async (req, res) => {
  try {
    const manga = await Manga.findById(mangaId);

    if (!manga) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy truyện với id đã cho" });
    }

    const chapter = manga.chapters.find((chap) => chap.chap === chapNumber);

    if (!chapter) {
      return res
        .status(404)
        .json({ message: `Không tìm thấy chương ${chapNumber}` });
    }

    res.json(chapter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get all chapters
mangaRouter.get("/api/manga/:mangaId/chapters", async (req, res) => {
  const mangaId = req.params.mangaId;

  try {
    const manga = await Manga.findById(mangaId);

    if (!manga) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy truyện với id đã cho" });
    }

    const chapters = manga.chapters;
    res.json(chapters);
// Get all chapters from manga
chapterRouter.get("/api/chapter/getall/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const manga = await Manga.findById(id);

    if (!manga) {
      return res.status(404).json({ message: "Không tìm thấy truyện!" });
    }

    const chapters = await Chapter.find({ mangaId: id });

    res.json({ success: true, chapters });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete chapter by ID
chapterRouter.delete("/api/chapter/:id", async (req, res) => {
  try {
    const deletedChapter = await Chapter.findByIdAndDelete(req.params.id);
    await Manga.findByIdAndUpdate(deletedChapter.mangaId, {
      $pull: { chapters: deletedChapter._id },
    });
    res.json({ success: true, deletedChapter });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get chapter by ID
chapterRouter.get("/api/chapter/:id", async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    res.json({ success: true, chapter });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




// Update chapter by ID
chapterRouter.put("/api/chapter/:id", async (req, res) => {
  try {
    const updatedChapter = await Chapter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, updatedChapter });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = chapterRouter;
