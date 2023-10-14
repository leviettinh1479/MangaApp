var express = require('express');
var router = express.Router();
var historyModel = require('../models/history');

// http://localhost:3000/api/history/add-history
router.post("/add-history", async (req, res, next) => {
    try {
        const { user, chapter } = req.body;
        const history = { user, chapter };
        await historyModel.create(history);
        return res.status(200).json({ results: true, message: "Add history successful" });
    } catch (error) {
        return res.status(400).json({ results: false, message: "Add history failed" });
    }
});

// http://localhost:3000/api/history/get-all-history
router.get("/get-all-history", async (req, res) => {
    try {
        const histories = await historyModel.find().sort({ createdAt: -1 });
        if (histories) {
            return res.status(200).json({ results: true, histories: histories });
        }
        return res.status(400).json({ results: false, histories: null });
    } catch (error) {
        return res.status(400).json({ results: false, message: error.message });
    }
});

// http://localhost:3000/api/history/652101f4648e3e2de9dc2349/delete-history
router.post("/:id/delete-history", async (req, res) => {
    try {
        const { id } = req.params;
        await historyModel.findByIdAndDelete(id);
        return res.status(200).json({ results: true, message: "Delete successful" });
    } catch (error) {
        return res.status(400).json({ results: false, message: error.getMessage });
    }
});


module.exports = router;