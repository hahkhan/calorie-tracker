const express = require("express");
const router = express.Router();
let  FoodModel = require("./../models/food.model.js")
router.route("/").get((req,res)=>{
    FoodModel.find()
    .then((foods)=>res.json(foods))
    .catch((err)=>res.status(400).json(err))
});

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const description= req.body.description;
    const calories = Number(req.body.calories);
    const date = Date.parse(req.body.date);
    const newFood = new FoodModel(
        {
            name,
            calories,
            description,
            date,
        }
    );
    newFood.save()
    .then(()=>res.json("New Food added"))
    .catch((err)=>{res.status(400).json(err)})
});

router.route("/:id").put((req,res)=>{
    FoodModel.findById(req.params.id)
    .then((food)=>{
        food.name = req.body.name;
        food.description = req.body.description;
        food.calories= Number(req.body.calories);
        food.date = Date.parse(req.body.date);
        food.save()
        .then(()=>res.json(`Updated Food with ID ${req.params.id}`))
        .catch((err)=>res.status(400).json(err));
    }).cathc(err=>res.status(400).json(err));
}).get((req,res)=>{
    FoodModel.findById(req.params.id)
    .then((food)=>res.json(food))
    .catch((err)=>res.status(400).json(err));
}).delete((req,res)=>{
    FoodModel.findByIdAndDelete(req.params.id)
    .then(()=>{res.json(`Food with id: ${req.params.id} was successfully deleted`)})
    .catch((err)=>res.status(400).json(err));
});

module.exports = router; 