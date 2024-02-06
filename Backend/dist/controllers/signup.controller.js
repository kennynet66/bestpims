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
exports.signupController = void 0;
const mssql_1 = __importDefault(require("mssql"));
const uuid_1 = require("uuid");
const sql_config_1 = require("../config/sql.config");
const signupController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = (0, uuid_1.v4)();
    try {
        const { full_name, email, password } = req.body;
        const pool = yield mssql_1.default.connect(sql_config_1.sqlConfig);
        let result = (yield pool.request()
            .input("user_id", mssql_1.default.VarChar, id)
            .input("full_name", mssql_1.default.VarChar, full_name)
            .input("email", mssql_1.default.VarChar, email)
            .input("password", mssql_1.default.VarChar, password)
            .execute('createUser')).rowsAffected;
        console.log(result);
        // user.push(newUser);
        return res.json({
            message: "User created successfully",
            // user
        });
    }
    catch (error) {
        return res.json(error);
    }
});
exports.signupController = signupController;
