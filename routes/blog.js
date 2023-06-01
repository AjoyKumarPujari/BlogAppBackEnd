const express = require("express");
const router = express.Router();
//import controller
const {dummyLink} = require("../controllers/PostController");
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController");



//mapping
router.get("/", dummyLink);
//create comments route
router.post("/comments/create",createComment);
//create Post route
router.get("/posts",getAllPosts);




module.exports = router;