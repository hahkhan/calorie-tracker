const express= require('express');
const cors = require('cors');
const mongoose=require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors(),(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    next()
});
app.use(express.json());

const DATABASE = process.env.CLUSTER_CONNECTION
mongoose.connect(DATABASE,{useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=>{console.log(`Server listening on port ${PORT}`)});
    }).catch((err)=>{console.log(err.message)});
//routes
const food = require("./routes/foods.routes.js");
app.use("/food", food);

const users = require("./routes/users.routes.js");
app.use("/users", users);