import express, { NextFunction, Request, Response, json } from 'express'
import { router } from './routes/auth.routes';
import { projectRouter } from './routes/project.routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(json())

app.use('/users', router);
app.use('/project', projectRouter)

app.use((error: Error, req: Request, res: Response, next: NextFunction)=> {
    res.json({
        message: error.message
    })
})

const PORT: number = 5000

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})
