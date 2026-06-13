// Import mysql2 package
const mysql = require("mysql2");


// Create MySQL connection pool
// Pool = multiple database connections handle kar sakta hai
const db = mysql.createPool({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME,


    // Maximum connections
    connectionLimit: 10

});



// Test Database Connection

db.getConnection((error, connection)=>{


    if(error){

        console.log("❌ Database Connection Failed");

        console.log(error.message);

        return;

    }


    console.log("✅ MySQL Database Connected Successfully");


    // Connection release back to pool
    connection.release();


});



// Export database instance
module.exports = db;