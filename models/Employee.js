import { Schema, model } from "mongoose";

let collection = "employees"
let schema = new Schema({
    employeeName : {type:String,required:true},
    employeeID : {type:Number,required:true},
    position : {type:String,required:true},
    department : {type:String,required:true},
    email : {type:String,required:true},
    phone : {type:Number,required:true},
    hireDate :{type:Date,required:true},
    salary :{type:Number,required:true},
    active :{type:Boolean,required:true},
    manager :{type:String,required:true},
},{
    timestamps:true
})

let Employee = model(collection,schema)
export default Employee