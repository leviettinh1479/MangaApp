const express = require("express");
const chapterRouter = express.Router();
const Manga = require("../models/manga");
const Chapter = require("../models/chapter");

// Add chapter
chapterRouter.post('/api/chapter/addchapter', async (req, res) => {
  try {
    const { name, title, chap, image, content, mangaId } = req.body;

    // Kiểm tra xem có chapter nào đã có trùng số chap chưa
    const existingChapter = await Chapter.findOne({ chap, mangaId });

    if (existingChapter) {
      return res.status(400).json({ success: false, message: 'Chapter đã tồn tại' });
    }

    const newChapter = new Chapter({
      name,
      title,
      chap,
      image,
      content,
      mangaId
    });

    await newChapter.save();

    // Add the new chapter's ID to the corresponding Manga's chapters array
    await Manga.findByIdAndUpdate(mangaId, { $push: { chapters: newChapter._id } });

    res.status(201).json({ success: true, chapter: newChapter });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all chapters
chapterRouter.get('/api/chapter/getall', async (req, res) => {
  try {
    const chapters = await Chapter.find();
    res.json({ success: true, chapters });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete chapter by ID
chapterRouter.delete('/api/chapter/:id', async (req, res) => {
  try {
    const deletedChapter = await Chapter.findByIdAndDelete(req.params.id);
    await Manga.findByIdAndUpdate(deletedChapter.mangaId, { $pull: { chapters: deletedChapter._id } });
    res.json({ success: true, deletedChapter });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get chapter by ID
chapterRouter.get('/api/chapter/:id', async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    res.json({ success: true, chapter });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



// Update chapter by ID
chapterRouter.put('/api/chapter/:id', async (req, res) => {
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
