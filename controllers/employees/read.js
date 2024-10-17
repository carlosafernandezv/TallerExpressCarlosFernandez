import Employee from "../../models/Employee.js";


let allEmployee = async (req,res,next) => {
    try {
        let all = await  Employee.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let employeeByPosition =  async (req,res,next) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.position
        let all = await  Employee.find({position:roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let employeeByEmployeeName =  async (req,res,next) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.employeeName
        let all = await  Employee.find({employeeName : roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}


export {allEmployee,employeeByPosition,employeeByEmployeeName}
