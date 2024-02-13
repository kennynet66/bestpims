import { Request, Response } from "express";
import { v4 } from "uuid";
import mssql from 'mssql'
import { sqlConfig } from "../config/sql.config";
import jwt from "jsonwebtoken";


export const getProjects = async (req: Request, res: Response)=> {
    try {
        const pool = mssql.connect(sqlConfig)

        let result = (await ((await pool).request().execute('getProjects'))).recordset;

        return res.status(200).json({
            projects: result
        })
    } catch (error) {
        res.json({
            error
        })
    }
}

export const projectController = async (req: Request, res:Response) => {
    try {
        const id = v4()
    
        const { project_name, project_description, assigned_to, end_date, asignee_email,asignee_name } = req.body
        console.log("Received body", req.body);
        
        const pool = await mssql.connect(sqlConfig);

        let result = (await pool.request()
        .input("project_id", mssql.VarChar, id)
        .input("project_name", mssql.VarChar, project_name)
        .input("project_description", mssql.VarChar, project_description)
        .input("assigned_to", mssql.VarChar, assigned_to)
        .input("end_date", mssql.VarChar, end_date)
        .input("asignee_email", mssql.VarChar, asignee_email)
        .input("asignee_name", mssql.VarChar, asignee_name)
        .execute('createProject')).rowsAffected;

        
        return res.status(200).json({
            message: "success"
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
        const { assigned_to } = req.body
        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("project_id", mssql.VarChar, id)
        .input("assigned_to", mssql.VarChar, assigned_to)
        .execute('deleteproject')).rowsAffected

        console.log(result);

        return res.status(200).json({
            message: "success"
        })
        
        
    } catch (error) {
        return res.json({error})
    }
}

export const completeProject = (async(req: Request, res:Response)=>{
    try {
        const id = req.params.id
        const pool = await mssql.connect(sqlConfig);

        const { assigned_to } = req.body

        let result = (await pool.request()
        .input("project_id", mssql.VarChar, id)
        .input("assigned_to", mssql.VarChar, assigned_to)
        .execute("completeProject")).recordset

        res.status(200).json({
            success: "Project completed",
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})

export const userProjects = (async(req: Request, res: Response)=>{
    try {
        const pool = await mssql.connect(sqlConfig);
        let token = req.headers['token'] as string
        
        let user_id = jwt.verify(token, "jdhg78ygh9eh934hbui3br783490hjr390h", (err, decodedToken: any) =>{
            return decodedToken.id
        })
        
        const result = (await pool.request()
        .input("user_id", mssql.VarChar, user_id)
        .execute('userProjects')).recordset
        res.status(200).json({
            id: user_id,
            projects: result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})