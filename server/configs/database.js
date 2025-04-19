const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("DB conncected successfully."))
    .catch((error)=>{
        console.log("Error while connecting to database.")
        console.error(error);
        process.exit(1);
    });
};

module.exports = dbConnect;