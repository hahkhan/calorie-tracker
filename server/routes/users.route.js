const express = requre("express");
const router = express.Router();
let UserModel = require("./../models/user.model.js");
router.route("/").get((req,res)=>{
    UserModel.find()
    .then((users)=>res.json(users))
    .catch((err)=>res.status(400).json(err))
});
router.route("/add"),post((req,res)=>{
    const username = req.body.username;
    const CreatedUser = new UserModel((username));
    CreatedUser.save()
    .then(()=>res.json("New User added")).catch((err)=>res.status(400).json(err))
});
export default router;