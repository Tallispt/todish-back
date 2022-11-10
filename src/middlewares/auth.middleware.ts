import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken'

async function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "");

    try {

        return next()
    } catch (error) {

    }
}