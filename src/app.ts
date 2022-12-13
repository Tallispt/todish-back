import cors from 'cors';
import express from 'express';
import authRouter from '@/routers/auth.router.js';
import todoRouter from '@/routers/todo.router.js';
import { loadEnv } from '@/config/env.js';
import { connectDb } from '@/config/prisma.js';

loadEnv()

const app = express()
app
    .use(cors())
    .use(express.json())
    .use(authRouter)
    .use(todoRouter)

export function init() {
    connectDb();
    return Promise.resolve(app);
}

export default app;