import "dotenv/config.js"
import "../../config/database.js"
import Employee from "../Employee.js"


let employees = [
    {
        "employeeName": "Luis Martinez",
        "employeeID": 1001,
        "position": "Gerente",
        "department": "Administración",
        "email": "luis.martinez@example.com",
        "phone": 3001112233,
        "hireDate": "2015-06-20",
        "salary": 80000,
        "active": true,
        "manager": "N/A"
    },
    {
        "employeeName": "Ana Torres",
        "employeeID": 1002,
        "position": "Asistente Administrativa",
        "department": "Administración",
        "email": "ana.torres@example.com",
        "phone": 3001223344,
        "hireDate": "2017-09-15",
        "salary": 50000,
        "active": true,
        "manager": "Luis Martinez"
    },
    {
        "employeeName": "Carlos Perez",
        "employeeID": 1003,
        "position": "Desarrollador",
        "department": "IT",
        "email": "carlos.perez@example.com",
        "phone": 3001334455,
        "hireDate": "2018-03-10",
        "salary": 75000,
        "active": true,
        "manager": "Luis Martinez"
    },
    {
        "employeeName": "Mariana Rios",
        "employeeID": 1004,
        "position": "Diseñadora Gráfica",
        "department": "Marketing",
        "email": "mariana.rios@example.com",
        "phone": 3001445566,
        "hireDate": "2019-01-25",
        "salary": 60000,
        "active": true,
        "manager": "Luis Martinez"
    },
    {
        "employeeName": "Pedro Gomez",
        "employeeID": 1005,
        "position": "Vendedor",
        "department": "Ventas",
        "email": "pedro.gomez@example.com",
        "phone": 3001556677,
        "hireDate": "2020-02-14",
        "salary": 40000,
        "active": true,
        "manager": "Ana Torres"
    },
    {
        "employeeName": "Lucia Suarez",
        "employeeID": 1006,
        "position": "Contadora",
        "department": "Finanzas",
        "email": "lucia.suarez@example.com",
        "phone": 3001667788,
        "hireDate": "2021-05-08",
        "salary": 70000,
        "active": true,
        "manager": "Luis Martinez"
    },
    {
        "employeeName": "Jorge Ramirez",
        "employeeID": 1007,
        "position": "Atención al Cliente",
        "department": "Servicio al Cliente",
        "email": "jorge.ramirez@example.com",
        "phone": 3001778899,
        "hireDate": "2022-06-12",
        "salary": 45000,
        "active": true,
        "manager": "Ana Torres"
    },
    {
        "employeeName": "Sofia Herrera",
        "employeeID": 1008,
        "position": "Analista de Datos",
        "department": "IT",
        "email": "sofia.herrera@example.com",
        "phone": 3001889900,
        "hireDate": "2020-07-23",
        "salary": 72000,
        "active": true,
        "manager": "Carlos Perez"
    },
    {
        "employeeName": "Ricardo Fernandez",
        "employeeID": 1009,
        "position": "Especialista en Marketing",
        "department": "Marketing",
        "email": "ricardo.fernandez@example.com",
        "phone": 3001990011,
        "hireDate": "2019-11-30",
        "salary": 65000,
        "active": true,
        "manager": "Mariana Rios"
    },
    {
        "employeeName": "Daniela Vargas",
        "employeeID": 1010,
        "position": "Jefe de Ventas",
        "department": "Ventas",
        "email": "daniela.vargas@example.com",
        "phone": 3002111122,
        "hireDate": "2017-04-19",
        "salary": 85000,
        "active": true,
        "manager": "Luis Martinez"
    },
    {
        "employeeName": "Esteban Castro",
        "employeeID": 1011,
        "position": "Técnico de Soporte",
        "department": "IT",
        "email": "esteban.castro@example.com",
        "phone": 3002222233,
        "hireDate": "2021-09-05",
        "salary": 55000,
        "active": true,
        "manager": "Carlos Perez"
    },
    {
        "employeeName": "Veronica Diaz",
        "employeeID": 1012,
        "position": "Diseñadora UX/UI",
        "department": "IT",
        "email": "veronica.diaz@example.com",
        "phone": 3002333344,
        "hireDate": "2018-12-16",
        "salary": 70000,
        "active": true,
        "manager": "Carlos Perez"
    },
    {
        "employeeName": "Miguel Gutierrez",
        "employeeID": 1013,
        "position": "Coordinador de Eventos",
        "department": "Marketing",
        "email": "miguel.gutierrez@example.com",
        "phone": 3002444455,
        "hireDate": "2016-02-27",
        "salary": 62000,
        "active": true,
        "manager": "Mariana Rios"
    },
    {
        "employeeName": "Carolina Mendoza",
        "employeeID": 1014,
        "position": "Asistente de Finanzas",
        "department": "Finanzas",
        "email": "carolina.mendoza@example.com",
        "phone": 3002555566,
        "hireDate": "2022-11-01",
        "salary": 48000,
        "active": true,
        "manager": "Lucia Suarez"
    },
    {
        "employeeName": "Alberto Lopez",
        "employeeID": 1015,
        "position": "Recepcionista",
        "department": "Administración",
        "email": "alberto.lopez@example.com",
        "phone": 3002666677,
        "hireDate": "2023-01-10",
        "salary": 35000,
        "active": true,
        "manager": "Ana Torres"
    }
]




Employee.insertMany(employees)