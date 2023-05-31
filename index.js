const express = require ("express");
const app = express();


app.listen(3000, ()=>{
    console.log("App is running Successfully");
})

app.get("/", (req, res) => {
    res.send(`<h1>Home Page<h1>`);
    console.log("Home Page");
})