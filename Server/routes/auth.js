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
            const newUser = { name, email, password: hash, role: 1, verified: true };
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
            return res.status(400).json({ result: false, message: 'Email bi trung ' });
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

//http://localhost:3000/user/api/send-mail
router.post('/send-mail', async (req, res, next) => {
    const email = req.body.email
    //const isUser = await userController.findUserByEmail(email)
    if (email) {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'vothanhthepct2020@gmail.com',
                pass: 'kunnlcokbzgpswxz'
            }
        });

        // URL của API xác thực
        const authenticationUrl = 'https://example.com/authenticate';

        // Tạo một đường link trong email với href trỏ đến API xác thực
        const emailHtml = `
            <p>Nhấn vào xác thực để xác thực email:</p>
            <a href="${authenticationUrl}">xác thực</a>
        `;

        const mailOptions = {
            from: 'vothanhthepct2020@gmail.com',
            to: email,
            subject: 'XÁC THỰC EMAIL',
            html: emailHtml
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(200).json({ result: true, message: "send fail" })
            } else {
                res.status(200).json({ result: true, message: "send success" })
            }
        });
    } else {
        res.status(400).json({ result: false, message: "email is not exist!" })
    }

})

module.exports = router;