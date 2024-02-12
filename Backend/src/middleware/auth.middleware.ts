import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

export const requireAuth = ((req: Request, res: Response, next: NextFunction)=>{
    try {
        let token = req.headers['token'] as string
        
        if(token) {
            jwt.verify(token, "jdhg78ygh9eh934hbui3br783490hjr390h", (err, decodedToken) =>{
                if(err) {
                    res.status(400).json({
                        err
                    })
                } else {
                    next();
                }
            })
        } else {
            res.status(400).json({
                message: "You do not have access"
            })
        }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
});
export const requireAdmin = ((req: Request, res: Response, next: NextFunction)=>{
    try {
        let token = req.headers['token'] as string
        
        if(token) {
            jwt.verify(token, "sdtfgvys5648v63f76f7f236723f8ggf8te7", (err, decodedToken) =>{
                if(err) {
                    res.status(400).json({
                        err
                    })
                } else {
                    next();
                }
            })
        } else {
            res.status(400).json({
                message: "You do not have access"
            })
        }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
});