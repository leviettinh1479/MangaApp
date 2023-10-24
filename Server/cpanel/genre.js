// Import các module cần thiết
const express = require("express");
const genreRouter = express.Router();
const Genre = require("../models/genre");

// Route để thêm thể loại
genreRouter.post("/api/genre/add", async (req, res) => {
  try {
    const { name } = req.body;

    const existingGenre = await Genre.findOne({ name });

    if (existingGenre) {
      return res.status(400).json({ message: "Thể loại đã tồn tại" });
    }

    const newGenre = new Genre({
      name,
    });

    await newGenre.save();

    res.status(201).json({ message: "Thêm thể loại thành công" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Get all genres 
genreRouter.get("/addmanga", async (req, res) => {
    try {
      const allGenre = await Genre.find();
      const genreData = allGenre.map((genre) => {
        return {
          _id: genre._id,
          name: genre.name
        };
      });
      console.log(genreData);
      res.render("addmanga",{ genreData });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = genreRouter;
