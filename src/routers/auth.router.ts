import { Router } from "express";
import { signin, signup } from "../controllers/auth.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validation.middleware.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";

const authRouter = Router()

authRouter.post("/signin", validate(signinSchema), signin)
authRouter.post("/signup", validate(signupSchema), signup)
authRouter.get("/test", auth)

export { authRouter }