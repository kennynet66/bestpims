import express, { NextFunction, Request, Response, json } from 'express'
import dotenv from 'dotenv';
import router from './routes/auth.routes';
import projectRouter from './routes/project.routes';
import user_routes from './routes/user.routes';
dotenv.config();

const app = express();

app.use(json())

app.use('/auth', router);
app.use('/project', projectRouter)
app.use('/user', user_routes)

app.use((error: Error, req: Request, res: Response, next: NextFunction)=> {
    res.json({
        message: error.message
    })
})

const PORT: number = 5000

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})
