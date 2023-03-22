const inquirer = require('inquirer');
const {dbP} = require('../config/connection');

const idRoles = async (id) => {
    const connection = await dbP;
    const [rows] = await connection.query('SELECT * FROM roles WHERE id =?', [id]);
    return rows.length > 0;
}

const idDept = async (id) => {
    const connection = await dbP;
    const [rows] = await connection.query('SELECT * FROM WHERE id =?', [id]);
    return rows.length > 0;
};

const viewRoles = `SELECT roles.id AS ID,
                   roles_title AS Role,
                   roles_salary AS Salary,
                   department_name AS Department
                   FROM roles INNER JOIN department
                   ON roles.department_id = department.id;`;

const newRolePrompt = [
    {
        name: 'role_id',
        type: 'input',
        message: 'Enter a new role id that is different than other role ids',
        validate: async (input) => {
            const isNumber = /^[0-9]+$/.test(input);
            const exists = await idRoles(input);
            return !isNumber
            ? (console.log (` Enter valid id Number.`), false)
            : (await idExistsRoles(input))
            ? (console.log(` Employee Id currently exists. Enter new Id`), false)
            : true;
        }
    },
    {
        name: 'role_salary',
        type: 'input',
        message: 'How much is this roles current salary?',
        validate: (input) => {
            return input === isNaN? console.log('Enter Salary')
            : true }
    },
    {
        name: department_id,
        type: input,
        message: 'Enter the the correct Department ID this role is associated with.',
        validate: async (input) => {
            const exists = await idDept(input);
            return !exists
            ? console.log('Entered ID does not match department IDs in database.')
            : true}
    }];

    const newRole = async ({role_id, role_title, role_salary, department_id}) => {
        const connection = await dbP;
        const mySql = `INSERT INTO roles (id, roles_title, roles_salary, department_id)
                     VALUES (?, ?, ?, ?);`;
                     const params = [role_id, role_title, role_salary, department_id];
                     connection.query(mySql,params)
    };

    const deleteRolePrompt =  [
        {
            type: 'list',
            name: 'delete_role',
            message: 'Select a role you wish to delete.',
            choices: async () => {
                const connection = await dbP;
                const [rows] = await connection.query(`SELECT roles_title FROM roles`);
                return rows.map(row => row.roles_title);
            }
        }
    ];

    const deleteRole = async (response) => {
        const connection = await dbP;
        const mySql = `DELETE FROM roles WHERE roles_title =?;`;
        const params = [response.delete_role];
        await connection.query(mySql,params);
    }

    module.exports = {
        viewRoles,
        newRole,
        newRolePrompt,
        deleteRole,
        deleteRolePrompt
    };