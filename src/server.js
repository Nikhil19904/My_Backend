// Load environment variables
require("dotenv").config();


// Import express app
const app = require("./app");


// Import database connection
require("./db/db");



// Port configuration

const PORT = process.env.PORT || 3000;



// Start server

app.listen(PORT,()=>{


    console.log(
        `🚀 Server running on port ${PORT}`
    );


});