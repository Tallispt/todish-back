import express from 'express';
// import cors from 'cors';
import { authRouter } from './routers/auth.router.js';

const app = express()
app
    // .use(cors)
    .use(express.json())
    .use(authRouter)


import dotenv from 'dotenv';
dotenv.config()

app.listen(process.env.PORT, () => console.log(`Listening to port ${process.env.PORT}`))