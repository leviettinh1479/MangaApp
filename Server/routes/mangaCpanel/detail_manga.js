const express = require("express");
const mangaCpanelRouter = express.Router();
const Manga = require("../../models/manga");

//Get All
mangaRouter.get('/home', async (req, res) => {
    try {
      const allManga = await Manga.find();
      const mangaData = allManga.map(manga => {
        return {
          name: manga.name,
          author: manga.author,
          image: manga.image
        };
      });
      res.render('home',{mangaData});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  //Get by id
mangaRouter.get('/detail/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const manga = await Manga.findById(id);
  
      if (!manga) {
        return res.status(404).json({ message: 'Không tìm thấy truyện!' });
      }
      res.render('detailManga');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
module.exports = mangaCpanelRouter;
