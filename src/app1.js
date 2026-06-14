import express from "express";
// import cors from ;


const app=express();

app.use(express.json());
app.use(cors());

// routes import
import userRoutes from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users",userRoutes);

export default app;
