import { Router } from "express";
import { allEmployee, employeeByPosition, employeeByEmployeeName } from "../controllers/employees/read.js";

const routerEmployees = Router()

routerEmployees.get('/all', allEmployee)
routerEmployees.get('/position/:position',employeeByPosition)
routerEmployees.get('/employeeName/:employeeName',employeeByEmployeeName)

export default routerEmployees