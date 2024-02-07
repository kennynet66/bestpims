import { Request, Response } from "express";
import mssql from 'mssql'
import { sqlConfig } from "../config/sql.config";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request().query('SELECT * FROM Users')).recordset

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