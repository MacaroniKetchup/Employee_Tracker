const inquirer = require('inquirer');
const {db, dbP} = require('../config/connection');

const deptExists = async (departmentName) => {
    const connection = await dbP;
    const [rows] = await connection.query(`SELECT * FROM department WHERE department_name =?`, [departmentName]);
    return rows.length > 0;
}

const viewDepts = `SELECT * FROM department;`;

const addDeptPrompt = [
    {
        name: 'department_name',
        type: 'input',
        message: 'What is the name of the department you are adding?',
        validate: async (input) => {
            const exists = await deptExists(input);
            const isNameFormat = /^[A-Za-z \s]{1,30}$/.test(input);
            return !isNameFormat ? "Please enter a department name." : (exist ? "Department you entered currently exists, Enter a new Department Name" : true);
        }

    }];

const addDept = (({department_name}) => {
    const mySql = `INSERT INTO department (department_name) VALUES (?)` ;
    const param = department_name;
    db.query(mySql, param, (err,res) => {});
});

const deleteDeptPrompt = [
    {
        type: 'list',
        name: 'delete_department',
        message: 'Which department do you wish to delete?',
        choices: async () => {
            const connection = await dbP;
            const [rows] = await connection.query(`SELECT department_name FROM department`);
            return rows.map(row.department_name);

        }

    }
];

const deleteDept = async (response) => {
    const connection = await dbP;
    const mySql = `DELETE FROM department WHERE department_name =?;`;
    params = [response.delete_department];
    await connection.query(mySql,params);
}

module.exports = {
    viewDepts,
    addDept,
    addDeptPrompt,
    deleteDept,
    deleteDeptPrompt
};