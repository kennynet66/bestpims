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
exports.oneUser = exports.deleteUser = exports.getUsers = void 0;
const mssql_1 = __importDefault(require("mssql"));
const sql_config_1 = require("../config/sql.config");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
        let result = (yield pool.request().query('SELECT * FROM Users WHERE isAdmin = 0 AND isASSIGNED = 0')).recordset;
        return res.status(200).json({
            users: result
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error
        });
    }
});
exports.getUsers = getUsers;
exports.deleteUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user_id = req.params.id;
        const pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
        let result = (yield pool.request()
            .input("user_id", mssql_1.default.VarChar, user_id)
            .execute("deleteUser")).recordset;
        return res.status(200).json({
            success: "User deleted successfully",
            result
        });
    }
    catch (error) {
        return res.status(500).json({
            error
        });
    }
}));
exports.oneUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.params.id;
        const pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
        const result = (yield pool.request()
            .input("user_id", mssql_1.default.VarChar, user_id)
            .execute("oneUser")).recordset;
        return res.status(200).json({
            result
        });
    }
    catch (error) {
        res.status(500).json({
            error
        });
    }
}));
