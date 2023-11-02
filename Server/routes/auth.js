var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const auth = require('../middlewares/auth');

const userModel = require('../models/user');

// mail sender details
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'vothanhthepct2020@gmail.com',
        pass: 'kunnlcokbzgpswxz'
    },
    tls: {
        rejectUnauthorized: false,
    }
});

// http://localhost:3000/api/user/verify-email
router.get('/verify-email', async (req, res, next) => {
    try {
        const { name, email, password } = req.query;
        const user = { name: name, email: email, password: password };
        if (user) {
            await userModel.create(user);
            return res.status(200).json({ user });
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false });
    }
});

// http://localhost:3000/api/user/register
router.post('/register', async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        if (!user) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = { name, email, password: hash, role: 1};
            // await userModel.create(newUser);
            // send verification mail to user
            let mailDetails = {
                from: ' "Verify your email" <vothanhthepct2020@gmail.com>',
                to: newUser.email,
                subject: 'Codewithid - Verify your mail',
                html: `<h2>${newUser.email}! Thanks for register on our site </h2>
                        <h4>Please verify your mail to continue...</h4>
                        <a href="http://localhost:3000/api/user/verify-email?name=${newUser.name}&email=${newUser.email}&password=${newUser.password}">Verify Your Email</a>
                `
            };

            //sending mail
            transporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log('Error Occurs');
                } else {
                    console.log('Email sent successfully');
                }
            });
            return res.status(200).json({ user: newUser });
        } else {
            return res.status(400).json({ result: false, message: 'Email đã tồn tại' });
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
                const token = jwt.sign({ user }, "secret");
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

//http://localhost:3000/api/user/send-mail
router.post('/send-mail', async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email: email });
        if (user) {
            let mailDetails = {
                from: ' "Verify your email" <vothanhthepct2020@gmail.com>',
                to: user.email,
                subject: 'Codewithid - Verify your mail',
                html: `<h2>${user.email}! Thanks for register on our site </h2>
                        <h4>Please verify your mail to continue...</h4>
                        <a href="http://localhost:3000?email=${user.email}">Verify Your Email</a>
                `
            };

            //sending mail
            transporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log('Error Occurs');
                } else {
                    console.log('Email sent successfully');
                }
            });
            return res.status(200).json({ result: true });
        }
    } catch (error) {
        return res.status(400).json({ result: true, message: error.message });
    }
});

// http://localhost:3000/api/user/forgot-password
router.get('/forgot-password', async (req, res, next) => {
    try {
        const { email } = req.query;
        const { password, confirmPassword } = req.body;
        const user = await userModel.findOne({ email: email });
        console.log("User: " + user);
        if (user) {
            if (password != confirmPassword) {
                return res.status(400).json({ result: false, message: "Mật khẩu không trùng khớp" });
            } else {
                user.password = password ? password : user.password;
                await user.save();
                return res.status(200).json({ result: true, message: "Đổi mật khẩu thành công" });
            }
        }
        return res.status(400).json({ result: false, message: "Không user này" });
    } catch (error) {
        return res.status(400).json({ result: false, message: error.message });
    }
});

// http://localhost:3000/api/user/logout
router.get('/logout',[auth.authenApp], function (req, res) {
    req.session.destroy();
    res.status(200).json({ result: true, message: "Đăng xuất thành công" });
});

// http://localhost:3000/api/user/vothanhthepct2020@gmail.com/edit-profile
router.post('/:email/edit-profile', async (req, res, next) => {
    try {
        const { email } = req.params;
        const { name, address } = req.body;
        const user = await userModel.findOne({ email: email });
        console.log("User: " + user);
        if (user) {
            const image = 'https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg';
            user.name = name ? name : user.name;
            user.address = address ? address : user.address;
            user.image = image ? image : user.image;
            await user.save();
            return res.status(200).json({ result: true, message: "Cập nhật người dùng thành công" });
        }
        return res.status(400).json({ result: false, message: "Không user này" });
    } catch (error) {
        return res.status(400).json({ result: false, message: error.message });
    }
});

module.exports = router;