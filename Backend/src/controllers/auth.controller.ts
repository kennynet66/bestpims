// Import reqquired libraries
import { Request, Response } from "express";
import mssql from 'mssql'
import { v4 } from 'uuid';
import { sqlConfig } from "../config/sql.config";
import { loginInterface, signupInterface } from "../interface/auth.interface";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

// Create a token
const maxAge = 3 * 24 * 60 * 60
const createToken = (id: string) => {
    console.log("creating token.....");
    
    const token = jwt.sign({ id }, "jdhg78ygh9eh934hbui3br783490hjr390h", {
        expiresIn: maxAge
    })

    return token
}

// This controller creates a new user and saves their data to the DB
export const signupController = async (req: Request, res: Response) => {
    // Generate a random ID for each user
    let id = v4();
    try {
        // Get the request body
        const { full_name, email, password }: signupInterface = req.body;
        
        // hash the password using the bcrypt library
        const hash_pwd = await bcrypt.hash(password, 5);
        // Create new pool connection
        const pool = await mssql.connect(sqlConfig);
        // execute a stored procedure to store the user data
        let result = (await pool.request()
            .input("user_id", mssql.VarChar, id)
            .input("full_name", mssql.VarChar, full_name)
            .input("email", mssql.VarChar, email)
            .input("password", mssql.VarChar, hash_pwd)
            .execute('createUser')).recordset

        return res.json({
            message: "User created successfully",
            result
        })
    } catch (error) {
        return res.json(error);
    }
}

// Login a user
export const loginController = async (req: Request, res: Response) => {
    try {
        // get the request body
        const { email, password }: loginInterface = req.body
        
        // Create a new pool connection
        const pool = await mssql.connect(sqlConfig);
        // execute a stored procedure to get & verify login details
        let user = (await pool.request()
            .input("email", mssql.VarChar, email)
            .execute("loginUser")).recordset

            // check for a record with the parsed email
            // record not found: return an error
            if (user[0]?.email == email) {
            const token = createToken(user[0].user_id)
            
            // Compare pwd from the request body and the hashed pwd from the db
            const isPwd = await bcrypt.compare(password, user[0].password)
            // console.log(isPwd);
            
            // Incorrect pwd: return an error
            // correct pwd: return success message
            if (!isPwd) {
                return res.status(401).json({
                    passerror: "Incorrect Password"
                })
            } else {
                return res.status(200).json({
                    success: "Login success",
                    token
                })
            }
        } else {
            return res.status(401).json({
                emailerror: "User not found"
            })
        }
    } catch (error) {
        return res.json({ error })
    }
}