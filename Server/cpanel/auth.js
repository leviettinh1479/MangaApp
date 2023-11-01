var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

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

// http://localhost:3000/getAllUser
router.get('/getAllUser', async (req, res, next) => {
    try {
        const users = await userModel.find({role: 1});
        const userData = users.map(users => {
            return {
              _id: users._id,
              name: users.name,
              email: users.email,
              avatar: users.avatar,
            };
          });
        res.render('tableUser', { userData });
    } catch (error) {
        return res.status(400).json({ result: false, message: error.message });
    }
});

// http://localhost:3000/login
router.get('/login', async (req, res, next) => {
    try {
        res.render('login')
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false, message: error.message });
    }
});

// http://localhost:3000/register
router.get('/register', async (req, res, next) => {
    try {
        res.render('register')
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false, message: error.message });
    }
});

// http://localhost:3000/login
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await userModel.findOne({ email: email });
        if (user.role == 0) {
            let check = bcrypt.compareSync(password, user.password);
            if (check) {
                const token = jwt.sign({ _id: user._id, role: user.role }, "secret");
                // req.session.token = token;
                console.log("Token", token);
                return res.redirect('home');
            }
            return res.redirect('login');
        }else {
            return res.redirect('login');
        }

        // if(user) {
        //     const token = jwt.sign({ _id: user._id, name: user.name }, "secret");
        //     req.session.token = token;
        //     console.log("Tokemn", token);
        //     return res.redirect('home');
        // }
        // return res.redirect('login');

    } catch (error) {
        console.log(error);
        res.status(400).json({ result: false, user: null });
    }
});

// http://localhost:3000/verify-email
router.get('/verify-email', async (req, res, next) => {
    try {
        const { name, email, password } = req.query;
        const user = { name: name, email: email, password: password };
        if (user) {
            await userModel.create(user);
            return res.render('login');
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false });
    }
});

// http://localhost:3000/register
router.post('/register', async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        if (!user) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = { name, email, password: hash, role: 1};
            // send verification mail to user
            let mailDetails = {
                from: ' "Verify your email" <vothanhthepct2020@gmail.com>',
                to: newUser.email,
                subject: 'Codewithid - Verify your mail',
                html: `<h2>${newUser.email}! Thanks for register on our site </h2>
                        <h4>Please verify your mail to continue...</h4>
                        <a href="http://localhost:3000/verify-email?name=${newUser.name}&email=${newUser.email}&password=${newUser.password}">Verify Your Email</a>
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
            return res.redirect('login');
        } else {
            return res.status(400).json({ result: false, message: 'Email đã tồn tại' });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false, message: error.message });
    }
});

router.get('/forgot-password', function(req, res) {
    res.render('forgot-password', );
});

// http://localhost:3000/forgot-password
router.post('/forgot-password', async (req, res, next) => {
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

router.get('/verify-emai-l', function (req, res) {
    res.render("verifyEmail");
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
                        <a href="http://localhost:3000/forgot-password?email=${user.email}">Verify Your Email</a>
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
            return res.render("verifyEmail");
        }
    } catch (error) {
        return res.status(400).json({ result: true, message: error.message });
    }
});

module.exports = router;