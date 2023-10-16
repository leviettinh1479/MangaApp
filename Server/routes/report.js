
const express = require("express");
const reportRouter = express.Router();
const Report = require("../models/report");

//Add report routes
reportRouter.post("/api/reports/addreport", async (req, res) => {
  try {
    const { name, description, chapter, user } = req.body;

    const newReport = new Report({
      name,
      description,
      chapter,
      user,
    });

    const savedReport = await newReport.save();

    res.status(201).json(savedReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Delete report
reportRouter.delete("/api/reports/:id", async (req, res) => {
  try {
    const reportId = req.params.id;

    const deletedReport = await Report.findByIdAndDelete(reportId);

    if (!deletedReport) {
      return res.status(404).json({ message: "Không tìm thấy báo cáo" });
    }

    res.status(200).json(deletedReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




module.exports = reportRouter;
