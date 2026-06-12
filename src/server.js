const express=require("express");
const app=express();
const port=3000;

// route
app.get("/",(req,res)=>{
    res.send("Hello from Express server");
});

// Server start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 