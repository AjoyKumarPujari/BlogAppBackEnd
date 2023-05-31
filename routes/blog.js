const express = require("express");
const router = express.Router();
//import controller
const {dummyLink} = require("../controllers/PostController");

//mapping
router.get("/", dummyLink);

//export 
module.exports = router;