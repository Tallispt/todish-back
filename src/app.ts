import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import authRouter from './routers/auth.router.js';
import todoRouter from './routers/todo.router.js';

dotenv.config()

const app = express()
app
    .use(cors())
    .use(express.json())
    .use(authRouter)
    .use(todoRouter)


app.listen(process.env.PORT, () => console.log(`Listening to port ${process.env.PORT}`))