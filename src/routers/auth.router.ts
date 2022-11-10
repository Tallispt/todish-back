import { Router } from "express";
import authControllers from "../controllers/auth.controller.js";

const authRouter = Router()

authRouter.post("/signin", authControllers.signin)
authRouter.post("/signup", authControllers.signup)

export { authRouter }