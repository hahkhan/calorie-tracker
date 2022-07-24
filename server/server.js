const express= require('express');
const cors = require('cors');
const mongoose=require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORt || 5000;
app.use(cors());
app.use(express.json());
app.get("/api",(req,res)=>{
    res.json({"users":["userOne","userTwo"]})
})
app.listen(port,()=>{console.log('Server listening on port 5000')});