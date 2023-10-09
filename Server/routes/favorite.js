var express = require('express');
var router = express.Router();
var favoriteModel = require('../models/favorite');
var mangaModel = require('../models/manga');

// http://localhost:3000/api/favorite/add-favorite
router.post("/add-favorite", async (req, res, next) => {
    try {
        const { manga } = req.body;
        const favorites = { manga };
        await favoriteModel.create(favorites);
        return res.status(200).json({ results: true, message: "Add favorite successful" });
    } catch (error) {
        return res.status(400).json({ results: false, message: "Add favorite failed" });
    }
});

// http://localhost:3000/api/favorite/get-all-favorite
router.get("/get-all-favorite", async (req, res) => {
    try {
        const favorites = await favoriteModel.find().populate('manga').sort({createdAt: -1});
        if (favorites) {
            return res.status(200).json({ results: true, manga: favorites });
        }
        return res.status(400).json({ results: false, favorites: null });
    } catch (error) {
        return res.status(400).json({ results: false, message: error.message });
    }
});

// http://localhost:3000/api/favorite/652101f4648e3e2de9dc2349/delete-favorite
router.post("/:id/delete-favorite", async (req, res) => {
    try {
        const { id } = req.params;
        await favoriteModel.findByIdAndDelete(id);
        return res.status(200).json({ results: true, message: "Delete successful" });
    } catch (error) {
        return res.status(400).json({ results: false, message: error.getMessage() });
    }
});

module.exports = router;