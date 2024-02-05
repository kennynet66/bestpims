import { Request, Response } from "express";
import { signupInterface } from "../interface/signup.interface";
import { v4 } from 'uuid';


let user:signupInterface[] = []

export const signupController = (req:Request, res:Response) => {
    const {full_name, email, password}:signupInterface = req.body;

    let id = v4();
    try {
        let newUser = {user_id:id, full_name, email, password}
        user.push(newUser);
        return res.json({
            message:"User created successfully",
            user
        })
    } catch (error) {
        return res.json(error);
    }
}