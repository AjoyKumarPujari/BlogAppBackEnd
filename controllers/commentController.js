//import model
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

//business logic
exports.createComment = async (req, res) => {
    try {
        //fetch  title and description from response body
        const {post, user, body } = req.body;
        //create a new object 
        const comment = new Comment({
            post,user,body
        });
        //save the new comment into the data base
        const saveComment = await comment.save();

        //find post by ID and the new comments to its aomments array 
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: saveComment._id}},{new:true} )
                    .populate("comments")//populate the comments array with comment document
                    .exec();
        //response send
        res.json({
            post: updatedPost,
        });
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            succes: false,
            data:"Internal Server Error",
            message:err.message,
        });
        
    }
} 
