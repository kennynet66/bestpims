import { Request, Response } from "express";
import { signupInterface } from "../interface/signup.interface";

let user:signupInterface[] = []

export const signupController = (req:Request, res:Response) => {
    const {full_name, email, password}:signupInterface = req.body;

    let id = "to be filled by uuid";
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