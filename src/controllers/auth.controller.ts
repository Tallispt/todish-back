import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { SignUp, UserData } from "../protocols/auth.protocols.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";
import userRepository from "../repositories/user.repository.js";

async function signin(req: Request, res: Response) {
    const data = req.body as UserData

    const { error } = signinSchema.validate(data)
    if (error) return res.status(403).send(error.message)

    try {
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(400)
    }
}

async function signup(req: Request, res: Response) {
    const { username, password, confirmPassword } = req.body as SignUp

    const { error } = signupSchema.validate({ username, password, confirmPassword })
    if (error) return res.status(403).send(error.message)

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt)

    const data: UserData = {
        username,
        password: hashPassword
    }

    try {
        await userRepository.create(data)
        res.sendStatus(200)
        //await connection.query("INSERT INTO users (username, password) VALUES($1, $2), [data.username, hashPassword]")

    } catch (error) {
        res.sendStatus(400)
    }
}

const authControllers = {
    signin,
    signup
}

export default authControllers