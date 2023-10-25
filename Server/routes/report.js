const express = require("express");
const reportRouter = express.Router();
const Report = require("../models/report");

reportRouter.post("/api/reports", async (req, res) => {
  try {
    const { name, description, chapter, user, manga } = req.body;

    const newReport = new Report({
      name,
      description,
      chapter,
      user,
      manga,
    });


    const savedReport = await newReport.save();

    res.status(201).json(savedReport); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = reportRouter;
