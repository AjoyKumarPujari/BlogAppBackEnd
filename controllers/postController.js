const Post = require("../models/postModel");

exports.dummyLink = async (req, res) => {
    res.send("this is dummy route");
};

exports.createPost = async (req, res) => {
    try {
        //fetch  title and description from response body
        const {title, body } = req.body;
        //create a new object 
        const post = new Post({
            title,body,
        });
        const savePost = await post.save();
        res.json({
            post:savePost,
        });

    } catch (error) {
        return res.status(400).json({
            error:"Error while Creating The Post",
        })
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        //const posts = await Post.find();
        //const posts = await Post.find().populate("likes").populate("comments").exac();
        const posts = await Post.find().populate("comments").populate("likes");
        res.json({
            posts,
        })
    } catch (error) {
        return res.status(400).json({
            error:"Error while fetching The Post",
        });
    }
};