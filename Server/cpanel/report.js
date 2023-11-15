
const express = require("express");
const reportRouter = express.Router();
const Report = require("../models/report");
const auth = require('../middlewares/auth');


//get report routes
reportRouter.get("/get-all-report", [auth.authenWeb], async (req, res) => {
  try {
    const reports = await Report.find();
    const reportData = reports.map(reports => {
        return {
            _id: reports._id,
          userID: reports.user,
          chapterID: reports.chapter,
          name: reports.name,
          description: reports.description,
        };
      });
    res.render('tableReport', { reportData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Delete report
reportRouter.get("/delete-report/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReport = await Report.findByIdAndDelete(id);

    if (deletedReport) {
        return res.json({ status: 200 });
    }

    return res.json({ status: 400 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




module.exports = reportRouter;
