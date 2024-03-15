import express from "express";
import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware";
import { demo } from "../controllers/demoController";
import { login, signup, verifyAuth } from "../controllers/auth";

const router:Router = express.Router();
router.get('/protected', verifyToken, demo); 
router.get('/verify',verifyToken, verifyAuth);
router.post('/login',login);
router.post('/signup',signup);
export default router;