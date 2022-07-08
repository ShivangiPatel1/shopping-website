const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();
//Register

router.post("/register", async (req, res) => {
    var encryptPassword = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: encryptPassword,
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (e) {
        res.status(500).json(e);
    }
});

//Login 

router.post("/login",(req,res)=>{
    const user = await User.findOne({username:req.body.username})

    const hashedPassword = CryptoJS.AES.decrypt()
})
module.exports = router;
