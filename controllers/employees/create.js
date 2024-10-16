import Employee from "../../models/Employee.js";

let create = async (req,res) =>{
    try {
        let employee = req.body
        let all = await Employee.create(employee)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export {create}