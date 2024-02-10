import express, { NextFunction, Request, Response, json } from 'express'
import dotenv from 'dotenv';
import router from './routes/auth.routes';
import projectRouter from './routes/project.routes';
import user_routes from './routes/user.routes';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { requireAuth } from './middleware/auth.middleware';
dotenv.config();

const app = express();

app.use(json())
app.use(cors());

app.use('/auth', router);
app.use('/project', projectRouter)
app.use('/users', user_routes)

app.get('*', requireAuth)

app.use((error: Error, req: Request, res: Response, next: NextFunction)=> {
    res.json({
        message: error.message
    })
})

const PORT: number = 5000

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})
