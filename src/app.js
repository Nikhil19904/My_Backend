const express = require("express");
const cors = require("cors");

const app = express();


// Middleware

app.use(express.json());


// Allow frontend request
app.use(cors());



// Test API

app.get("/",(req,res)=>{

    res.json({

        message:"Backend connected successfully 🚀"

    });

});



module.exports = app;