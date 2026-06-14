import {Route} from "express";
import { registerUser } from "../controllers/user.controller";

const router=express.Router();

router.get("/",(req,res)=>{
    res.json({
        message:"All users"
    });
});

export default router;
