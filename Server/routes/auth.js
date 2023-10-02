var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const userModel = require('../models/user');

// http://localhost:3000/api/user/register
router.post('/register', async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        if (!user) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = { name, email, password: hash, role: 1 };
            await userModel.create(newUser);
            return res.status(200).json({ user: newUser });
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false });
    }
});
// http://localhost:3000/api/user/login
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        if (user) {
            let check = bcrypt.compareSync(password, user.password);
            if (check) {
                const token = jwt.sign({ user }, "secret", { expiresIn: '1h' });
                return res.status(200).json({ result: true, user: user, token });
            }
            return res.status(400).json({ result: false, user: null });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false, user: null });
    }
});

// http://localhost:3000/api/user/get-all-user
router.get('/get-all-user', async (req, res, next) => {
    try {
        const users = await userModel.find();
        if (users) {
            return res.status(200).json({ users });
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false });
    }
});


module.exports = router;