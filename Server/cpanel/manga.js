const express = require("express");
const mangaRouter = express.Router();
const Manga = require("../models/manga");
const Chapter = require("../models/chapter");
const Rating = require("../models/rating");
const Genre = require("../models/genre");
const { json } = require("body-parser");

const auth = require('../middlewares/auth');
// Add manga
mangaRouter.post("/api/manga/addmanga",[auth.authenWeb], async (req, res) => {
  try {
    const { name, image, author, status, genre, rating, chapters } = req.body;

    const newManga = new Manga({
      name,
      image,
      author,
      status,
      genre,
      rating,
      chapters,
    });

    await newManga.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get All
mangaRouter.get('/home', [auth.authenWeb], async (req, res) => {
  try {
    const allManga = await Manga.find();
    const mangaData = allManga.map((manga) => {
      return {
        _id: manga._id,
        name: manga.name,
        author: manga.author,
        image: manga.image,
      };
    });
    res.render("home", { mangaData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Màn hình update
mangaRouter.get("/home/:id/update", async (req, res) => {
  try {
    const { id } = req.params;
    const manga = await Manga.findById(id);
    // Thêm các dữ liệu cần thiết vào đây
    const mangaData = {
      _id: manga.id,
      name: manga.name,
      author: manga.author,
      image: manga.image,
      status: manga.status
    };
    res.render('updatemanga', { mangaData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get all genres 

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
//get element by name and author
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
mangaRouter.get('/home/detail/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const mangaID = await Manga.findById(id);
    const mangaArray = [];
    mangaArray.push(mangaID);
    const mangaData = mangaArray.map(manga => {
      return {
        _id: manga._id,
        name: manga.name,
        author: manga.author,
        image: manga.image,
        status: manga.status,

      };
    });
    console.log("mangaData", mangaData);
    const allChapter = await Chapter.find({mangaId: id});
    const chapterData = allChapter.map(chapter => {
      return {
        _id: chapter._id,
        name: chapter.name,
        title: chapter.title,
        content: chapter.content,
        chap: chapter.chap
      };
    });
    console.log("allChapter", allChapter);
    if (!mangaData) {
      return res.status(404).json({ message: 'Không tìm thấy truyện!' });
    }
    res.render('detailManga', { mangaData, chapterData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete manga
mangaRouter.delete("/home/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    
    await Manga.findByIdAndDelete(id);
    console.log(`Deleting manga with id: ${id}`);

    res.json({ status: "success", message: "Truyện đã được xóa thành công!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update manga
mangaRouter.post("/home/:id/update", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, author, image, status ,genre} = req.body;

    const updatedMangaData = {
      name,
      author,
      image,
      status,
      genre,
    };

    const updatedManga = await Manga.findByIdAndUpdate(id, updatedMangaData, {
      new: true,
    });
    

    res.render('updatemanga', { updatedManga });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = mangaRouter;
