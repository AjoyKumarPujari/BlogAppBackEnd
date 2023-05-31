const mongoose = require ("mongoose");

//route Handler
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    body:{
        type:String,
        require: true,
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Like",//reference to Like table
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment",//reference to Comment table
    }], 
});

//export
module.exports = mongoose.model("Post", postSchema);