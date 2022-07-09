const {verifyToken} = require("./verifyToken")
const router = require("express").Router();
 
router.put(":/id",verifyToken,(req,res)=>{
if(req.user.id==req.params.id || req.user.isAdmin){
    next()
}
else {
    res.status(403).json("You are not alowed to do that!");
  }
})

module.exports = router