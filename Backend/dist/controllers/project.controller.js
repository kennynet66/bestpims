"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.projectController = exports.getProjects = void 0;
const uuid_1 = require("uuid");
const mssql_1 = __importDefault(require("mssql"));
const sql_config_1 = require("../config/sql.config");
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = mssql_1.default.connect(sql_config_1.sqlConfig);
        let result = (yield ((yield pool).request().execute('getProjects'))).recordset;
        return res.status(200).json({
            projects: result
        });
    }
    catch (error) {
        res.json({
            error
        });
    }
});
exports.getProjects = getProjects;
const projectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
        const { project_name, project_description, assigned_to, end_date } = req.body;
        console.log("Received body", req.body);
        const pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
        let result = (yield pool.request()
            .input("project_id", mssql_1.default.VarChar, id)
            .input("project_name", mssql_1.default.VarChar, project_name)
            .input("project_description", mssql_1.default.VarChar, project_description)
            .input("assigned_to", mssql_1.default.VarChar, assigned_to)
            .input("end_date", mssql_1.default.VarChar, end_date)
            .execute('createProject')).rowsAffected;
        return res.status(200).json({
            message: "success"
        });
    }
    catch (error) {
        return res.json({
            error
        });
    }
});
exports.projectController = projectController;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
        let result = (yield pool.request()
            .input("project_id", mssql_1.default.VarChar, id)
            .execute('deleteproject')).rowsAffected;
        console.log(result);
        return res.status(200).json({
            message: "success"
        });
    }
    catch (error) {
        return res.json({ error });
    }
});
exports.deleteProject = deleteProject;
