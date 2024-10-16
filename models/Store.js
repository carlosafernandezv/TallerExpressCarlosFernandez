import { Schema, model } from "mongoose";


let collection = "stores"
let schema = new Schema({
    storeName : {type:String,required:true},
    address : {type:String,required:true},
    phone : {type:Number,required:true},
    email : {type:String,required:true},
    owner : {type:String,required:true},
    openingHours : {type:String,required:true},
    closingHours : {type:String,required:true},
    numberOfEmployees :{type:Number,required:true},
    active :{type:Boolean,required:true},
    openingDate :{type:Date,required:true},
    
},{
    timestamps:true
})

let Store = model(collection,schema)
export default Store