const mongoose = require("mongoose");
const Progress = require("../models/progress");
const express = require('express');
const router = express.Router();


const today = new Date();
const isMonday = today.getDay() === 1;
const isMidnight = today.getHours() === 0 && today.getMinutes() === 0;

//Xác định xem là có phải là thứ hai và có đang là 12:00:00 AM hay không để mà reset trạng thái các thứ
if (isMonday && isMidnight) {
  Progress.updateMany({}, {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0
  }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Reset thành công!");
    }
  });
} else {
  console.log("Không đáp ứng điều kiện reset.");
}


//Xác định ngày hiện tại là thứ mấy thì chỉ riêng hôm đó mới được thay đổi giá trị
if (dayOfWeek === 1) { 
    Progress.findOneAndUpdate(
      { user: userId }, 
      { $set: { monday: newValue } }, 
      { new: true },
      (err, updatedProgress) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Cập nhật Thứ hai thành công:", updatedProgress);
        }
      }
    );
  } else if (dayOfWeek === 2) { 
    Progress.findOneAndUpdate(
      { user: userId },
      { $set: { tuesday: newValue } },
      { new: true },
      (err, updatedProgress) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Cập nhật Thứ ba thành công:", updatedProgress);
        }
      }
    );
  } else if (dayOfWeek === 3) { 
    Progress.findOneAndUpdate(
      { user: userId },
      { $set: { wednesday: newValue } },
      { new: true },
      (err, updatedProgress) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Cập nhật Thứ tư thành công:", updatedProgress);
        }
      }
    );
  } else if (dayOfWeek === 4) { 
    Progress.findOneAndUpdate(
      { user: userId },
      { $set: { thursday: newValue } },
      { new: true },
      (err, updatedProgress) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Cập nhật Thứ năm thành công:", updatedProgress);
        }
      }
    );
  } else if (dayOfWeek === 5) { 
    Progress.findOneAndUpdate(
      { user: userId },
      { $set: { friday: newValue } },
      { new: true },
      (err, updatedProgress) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Cập nhật Thứ sáu thành công:", updatedProgress);
        }
      }
    );
  } else if (dayOfWeek === 6) { 
    Progress.findOneAndUpdate(
      { user: userId },
      { $set: { saturday: newValue } },
      { new: true },
      (err, updatedProgress) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Cập nhật Thứ bảy thành công:", updatedProgress);
        }
      }
    );
  } else if (dayOfWeek === 0) { 
    Progress.findOneAndUpdate(
      { user: userId },
      { $set: { sunday: newValue } },
      { new: true },
      (err, updatedProgress) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Cập nhật Chủ nhật thành công:", updatedProgress);
        }
      }
    );
  }

  // Route GET để lấy giá trị progress
router.get('/progress/:userId', (req, res) => {
    const userId = req.params.userId;
  
    Progress.findOne({ user: userId }, (err, progress) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      if (!progress) {
        return res.status(404).json({ message: 'Không tìm thấy thông tin tiến độ.' });
      }
  
      return res.status(200).json({ progress });
    });
  });
  
  module.exports = router;