import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validation.middleware.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";

const authRouter = Router()

authRouter
    .post("/signin", validate(signinSchema), signin)
    .post("/signup", validate(signupSchema), signup)

export default authRouter