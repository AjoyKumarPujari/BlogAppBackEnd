const express = require ("express");
const app = express();

//load config from env file
require("dotenv").config;
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

const blog = require("./routes/blog");

//mount
app.use("/app/v1", blog);

//start server
app.listen(PORT, () => {
    console.log(`Server Started successfully  at port ${PORT}`)
})

//connection of DB
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req, res) => {
    res.send(`<h1>This is Home Page</h1>`);
})