const express= require('express');
const cors = require('cors');
const mongoose=require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/api",(req,res)=>{
    res.json({"users":["userOne","userTwo"]})
});
const DATABASE = process.env.CLUSTER_CONNECTION
mongoose.connect(DATABASE,{useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=>{console.log(`Server listening on port ${PORT}`)});
    }).catch((err)=>{console.log(err.message)});
//routes
const food = require("./routes/foods.routes.js");
app.use("food", food);