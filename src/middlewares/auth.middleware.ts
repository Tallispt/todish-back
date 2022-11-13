import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

async function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "");

    const userId = jwt.verify(token, process.env.JWT_SECRET)
    console.log(userId)
    try {

        return next()
    } catch (error) {

    }
}