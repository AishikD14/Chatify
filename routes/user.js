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
router.route('/login').post((req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email, password: password})
        .then(users => {
            if(!users){
                res.status(203).json({"message":'Failure'});
            }
            else{
                
                    res.json({"message":'Success',})        
            }
        })
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;