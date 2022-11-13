import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import sessionRepository from '../repositories/session.repository';
import userRepository from '../repositories/user.repository.js';

export async function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) return res.sendStatus(401)

    try {
        const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload

        const session = await sessionRepository.findSessionByToken(token)
        if (!session) return res.sendStatus(401)

        res.locals.userId = userId
        next()
    } catch (error) {
        console.log(error)
        res.sendStatus(401)
    }
}

type JWTPayload = {
    userId: number
}