const express = require("express");
const router = express.Router();
//import controller
const {dummyLink} = require("../controllers/PostController");
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController");
const {likePost, unlikePost} = require("../controllers/LikeController");



//mapping
router.get("/", dummyLink);
//create comments route
router.post("/comments/create",createComment);
//create Post route
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
//create Like route
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);






module.exports = router;