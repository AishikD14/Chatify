const router = require('express').Router();
const sha256 = require('sha256');
const nodemailer = require("nodemailer");
var otpGenerator = require('otp-generator');
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;