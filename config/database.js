const mongoose = require("mongoose");

//data which are define in env file is loaded on process object
require("dotenv").config();

//connection establish between your app and database
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,//configurations
        useUnifiedTopology: true,//configurations
    })
    .then(()=> console.log("Connection Establish nodejs with mongocompas"))
    .catch((error)=> {
        console.log("Receieved an Error")
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;

//connection sure between your app and db