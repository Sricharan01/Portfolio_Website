const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    subscribe:{type:String, required:true, unique:true}
    
})

const Subscribe = new mongoose.model("Subscriber", userschema);

module.exports = Subscribe;