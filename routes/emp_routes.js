let express=require('express');
let router=express.Router();

router.post("/register",(req,res)=>{
    let data = req.body
    res.send("register page called");
})
router.post("/login",(req,res)=>{
    res.send("login page called");
})
router.get("/viewtasks",(req,res)=>{
    res.send("viewtasks page called");
})
router.get("/viewtodo",(req,res)=>{
    res.send("view to do page called");
})
router.put("/updateprofile",(req,res)=>{
    res.send("update profile page called");
})
module.exports=router;