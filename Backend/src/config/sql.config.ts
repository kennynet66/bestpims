import mssql from 'mssql';
import dotenv from 'dotenv';
dotenv.config({
        path: '../../.env'
    });

export const sqlConfig = {
    user: "sa",
    database: "Bestpims",
    password: "Boomplay@1",
    server: "DESKTOP-5DPD39H\\MSSQLSERVER1",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

console.log(sqlConfig);
