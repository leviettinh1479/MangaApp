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

// Add chapter
chapterRouter.get('/home/:id/addchapter', async (req, res) => {
  try {
    const { id } = req.params;
    const manga = await Manga.findById(id);
    const mangaData = {
      _id: manga.id,
      name: manga.name,
      author: manga.author,
      image: manga.image,
      status: manga.status
    };
    res.render('addchapter', { mangaData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
chapterRouter.post('/home/:id/addchapter', async (req, res) => {
  try {
    const { name, title, chap, image, content } = req.body;
    const mangaId = req.params.id;

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
      mangaId, // Thêm ID của Manga vào Chapter
    });

    await newChapter.save();

    await Manga.findByIdAndUpdate(mangaId, { $push: { chapters: newChapter._id } });

    res.render('addchapter');
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update chapter by ID
chapterRouter.get('/home/:id/updatechapter', async (req, res) => {
  try {
    const { id } = req.params;
    const chapter = await Chapter.findById(id);
    const chapterData = {
      _id: chapter._id,
        name: chapter.name,
        title: chapter.title,
        chap: chapter.chap,
        image: chapter.image,
        content: chapter.content,
        mangaId: chapter.mangaId,
        createAt: chapter.createAt
    };
    res.render('updatechapter', { chapterData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
chapterRouter.post('/home/:id/updatechapter', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, chap, image, content } = req.body;

    const updatedChapter = await Chapter.findByIdAndUpdate(id, {
      name,
      title,
      chap,
      image,
      content
    }, { new: true });

    if (!updatedChapter) {
      return res.status(404).json({ success: false, message: 'Chapter không tồn tại' });
    }

    res.render('updatechapter',{updatedChapter});
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

module.exports = chapterRouter;
