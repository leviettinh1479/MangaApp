const express = require("express");
const chapterRouter = express.Router();
const Manga = require("../models/manga");
const Chapter = require("../models/chapter");

// Get chapter by ID
chapterRouter.get('/home/chapter/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const chapter = await Chapter.findById(id);
    const chapterArray = [];
    chapterArray.push(chapter);
    const chapterData = chapterArray.map(chapter => {
      return {
        _id: chapter._id,
        name: chapter.name,
        title: chapter.title,
        chap: chapter.chap,
        image: chapter.image,
        content: chapter.content,
        mangaId: chapter.mangaId,
        createAt: chapter.createAt

      };
    });
    res.render("detailChapter", { chapterData });
    console.log("Chapter id: ", chapterData)
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
