import Employee from "../../models/Employee.js";


let allEmployee = async (req,res) => {
    try {
        let all = await  Employee.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }        
}

let employeeByPosition =  async (req,res) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.position
        let all = await  Employee.find({position:roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }        
}

let employeeByEmployeeName =  async (req,res) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.employeeName
        let all = await  Employee.find({employeeName : roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }        
}


export {allEmployee,employeeByPosition,employeeByEmployeeName}
