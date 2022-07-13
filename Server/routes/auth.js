const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken")
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

router.post("/login",async (req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username})
        !user && res.status(401).json("Wrong Credentials!")
    const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
    );
    const accessToken = jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin,
    },
    process.env.JWT_SEC,
    {
        expiresIn:"3d"
    })
    const EnteredPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    EnteredPassword !== req.body.password && res.body.password && res.status(401).json("Wrong Credentials!");
    const {password,...otherDetails}=user._doc;
    res.status(200).json(...otherDetails)    
}catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;
