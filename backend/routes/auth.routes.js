import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

//route for authentication
router.post("/signup", signup)

//route for login
router.post("/login", login)

//route for Logout
router.post("/logout", logout)

export default router;