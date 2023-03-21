const mysql = require('mysql2');

const mysqlPro = require('myslql2/promise');

// db connection login
// login is defalted for security reasons, must input your user and password in to run application
const connectionConfig = {
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'root',
    database: 'normandy_roster',
};

const dbPro = mysqlPro.createConnection(connectionConfig);
const db = mysql.createConnection(connectionConfig);

module.exports = {db, dbPro};