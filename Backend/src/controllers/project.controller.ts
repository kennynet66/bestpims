import { Request, Response } from "express";
import { v4 } from "uuid";
import mssql from 'mssql'
import { sqlConfig } from "../config/sql.config";


export const getProjects = async (req: Request, res: Response)=> {
    try {
        const pool = mssql.connect(sqlConfig)

        let result = (await ((await pool).request().execute('getProjects'))).recordset;

        return res.status(200).json({
            users: result
        })
    } catch (error) {
        res.json({
            error
        })
    }
}

export const projectController = async (req: Request, res:Response) => {
    const id = v4()

    const { project_name, project_description, assigned_to, end_date } = req.body
    try {
        const pool = await mssql.connect(sqlConfig);

        let result = (await pool.request()
        .input("project_id", mssql.VarChar, id)
        .input("project_name", mssql.VarChar, project_name)
        .input("project_description", mssql.VarChar, project_description)
        .input("assigned_to", mssql.VarChar, assigned_to)
        .input("end_date", mssql.VarChar, end_date)
        .execute('createProject')).rowsAffected;

        console.log(result);
        
        return res.status(200).json({
            message: "Project created successfully"
        })
    } catch (error) {
        return res.json({
            error
        })
    }
}

export const deleteProject = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("project_id", mssql.VarChar, id)
        .execute('deleteproject')).rowsAffected

        console.log(result);

        return res.status(200).json({
            message: "Project deleted successfully"
        })
        
        
    } catch (error) {
        return res.json({error})
    }
}