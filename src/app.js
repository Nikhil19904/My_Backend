const express = require("express");
const cors = require("cors");

const app = express();


// Middleware
app.use(express.json());
// Allow frontend request
app.use(cors());

// routes import 

import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/users",userRouter)

// good pratice->with API 
app.use("/api/v1/users", userRouter)


http://localhsot:8000/users/register




// Test API

app.get("/",(req,res)=>{

    res.json({

        message:"Backend connected successfully 🚀"

    });

});



module.exports = app;