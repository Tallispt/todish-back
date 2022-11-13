import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { SignUp, UserData } from "../protocols/auth.protocols.js";
import userRepository from "../repositories/user.repository.js";
import jwt from "jsonwebtoken";
import sessionRepository from "../repositories/session.repository.js";

async function signin(req: Request, res: Response) {
    const { username, password } = req.body as UserData

    try {
        const userData = await userRepository.findUserByUsername(username)
        if (!userData) return res.sendStatus(404)

        const isPasswordValid = await bcrypt.compare(password, userData.password)
        if (!isPasswordValid) return res.sendStatus(401)

        const token = jwt.sign({ userId: userData.id }, process.env.JWT_SECRET)

        await sessionRepository.create({ user_id: userData.id, token })

        res.status(200).send({ username, token })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

async function signup(req: Request, res: Response) {
    const { username, password } = req.body as SignUp

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt)


    try {
        await userRepository.create({
            username,
            password: hashPassword
        })
        res.sendStatus(200)

    } catch (error) {
        res.sendStatus(500)
    }
}

export {
    signin,
    signup
}
