import { Request, Response } from "express";
import mssql from 'mssql'
import { sqlConfig } from "../config/sql.config";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request().query('SELECT * FROM Users WHERE isAdmin = 0 AND isASSIGNED = 0')).recordset

        return res.status(200).json({
            users: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error
        })
    }
}

export const deleteUser = (async(req: Request, res: Response)=>{
    try {
        let user_id: string = req.params.id;

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("user_id", mssql.VarChar, user_id)
        .execute("deleteUser")).recordset

        return res.status(200).json({
            success: "User deleted successfully",
            result
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
});

export const oneUser = (async (req: Request, res: Response) =>{
    try {
        const user_id: string = req.params.id

        const pool = await mssql.connect(sqlConfig);

        const result = (await pool.request()
        .input("user_id", mssql.VarChar, user_id)
        .execute("oneUser")).recordset

        return res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})