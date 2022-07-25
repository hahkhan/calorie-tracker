const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        calories:{
            type: Number,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        data:{
            type: Date,
            required: true
        }
        
    },{
        timestamps: true,
    });
    const FoodModel = mongoose.model("Foods",foodSchema);
    module.exports = FoodModel;