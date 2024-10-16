import { Router } from "express";
import { allEmployee, employeeByPosition, employeeByEmployeeName } from "../controllers/employees/read.js";
import { create } from "../controllers/employees/create.js";
const routerEmployees = Router()

routerEmployees.get('/all', allEmployee)
routerEmployees.get('/position/:position',employeeByPosition)
routerEmployees.get('/employeeName/:employeeName',employeeByEmployeeName)
routerEmployees.post('/create',create)

export default routerEmployees