const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        trim: true
    },
},{timestamps: true,});
const UserModel = mongoose.model("User",userSchema);
module.exports = UserModel;