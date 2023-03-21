INSERT INTO department (id,department_name)
VALUES  (1, 'Finance'),
        (2, 'Sales'),
        (3, 'Legal'),
        (4, 'Enginerring');

INSERT INTO roles (id, roles_title, roles_salary, department_id)
VALUES  (1, 'Accountant', 55000.00, 1),
        (2, 'Accounting Manager', 100000.00, 1),
        (3, 'Sales Rep', 45000.00, 2),
        (4, 'Sales Manager', 75000.00, 2),
        (5, 'Lawyer', 95000.00, 3),
        (6, 'Legal Team Manager', 110000.00, 3),
        (7, 'Software Engineer', 80000.00, 4),
        (8, 'Engineering Team Manager' 145000.00, 4):

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (3,'Garrus','Vakarian',2,NULL),
        (6,'Liara',"T'Soni",4,NULL),
        (8,'Mordin','Solus',6,NULL),
        (11,'Harper','Henderson',8,NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1,'Ashley','Williams',1,3),
        (2,'Thane','Krios',1,3),
        (4,'Jacob','Taylor',3,6),
        (5,'Urdnot','Wrex',3,6),
        (7,'Miranda','Lawson',5,8),
        (9,'Kaidan','Alenko',7,11),
        (10,'Tali','Zorah',7,11)
