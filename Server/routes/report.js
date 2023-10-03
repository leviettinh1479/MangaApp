const express = require('express');
const router = express.Router();
const Report = require('../models/report');
const Manga = require('../models/manga'); // Import mô hình truyện
const Chapter = require('../models/Chapter'); // Import mô hình chương

router.post('/api/report', async (req, res) => {
  try {
    const { name, description, mangaId, chapterId } = req.body;

    const manga = await Manga.findById(mangaId);
    const chapter = await Chapter.findById(chapterId);

    if (!manga || !chapter) {
      return res.status(404).json({ message: 'Không tìm thấy truyện hoặc chương' });
    }

    const report = new Report({
      name,
      description,
      manga: mangaId,
      chapter: chapterId
    });

    await report.save();

    res.status(201).json({ message: 'Báo cáo đã được tạo thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;