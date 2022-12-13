import { Router } from "express";
import { validate } from "@/middlewares/validation.middleware.js";
import { signinSchema, signupSchema } from "@/schemas/auth.schema.js";
import { signin, signup } from "@/controllers/auth.controller";

const authRouter = Router()

authRouter
    .post("/signin", validate(signinSchema), signin)
    .post("/signup", validate(signupSchema), signup)

export default authRouter