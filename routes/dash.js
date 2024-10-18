const express = require('express');
const { auth, adminAuth ,municipal,public} = require("../middleware/auth");
const router = express.Router();
const User=require("../models/user");

router.get("/admin", [auth, adminAuth],async(req,res)=>{  
    const id=req.user.id;
    const admin_user=await User.findById(id);
    res.render('admin/admin-dash.ejs',{admin_user});
});

router.get("/public",[auth,public],async(req,res)=>{
   const user_id= req.user.id;
  
   const public_user=await User.findById(user_id);
   
    res.render('user/user-dash-2.ejs',{public_user});
})


router.get("/municipal",[auth,municipal],async(req,res)=>{
    const user_id= req.user.id;
   
   
    const municipal_user=await User.findById(user_id);
    res.render('municipal/municipal-dash.ejs',{municipal_user});
});
module.exports=router;