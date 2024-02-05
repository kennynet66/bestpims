import { Request, Response } from "express";
import { loginInterface } from "../interface/login.interface";

export const loginController = async(req: Request, res: Response) => {
    try {
        const {email, password, rememberMe}:loginInterface = req.body
    } catch (error) {
        return res.json({error})
    }
}