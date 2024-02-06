import { Request, Response } from "express";
import mssql from 'mssql'
import { v4 } from 'uuid';
import { sqlConfig } from "../config/sql.config";
import { loginInterface, signupInterface } from "../interface/auth.interface";

export const signupController = async (req:Request, res:Response) => {
    
    let id = v4();
    try {
        const {full_name, email, password}:signupInterface = req.body;

        const pool = await mssql.connect(sqlConfig);

        let result = (await pool.request()
        .input("user_id", mssql.VarChar, id)
        .input("full_name", mssql.VarChar, full_name)
        .input("email", mssql.VarChar, email)
        .input("password", mssql.VarChar, password)
        .execute('createUser')).rowsAffected

        console.log(result);
        
        // user.push(newUser);
        return res.json({
            message:"User created successfully",
            // user
        })
    } catch (error) {
        return res.json(error);
    }
}


export const loginController = async(req: Request, res: Response) => {
    try {
        const {email, password, rememberMe}:loginInterface = req.body
    } catch (error) {
        return res.json({error})
    }
}