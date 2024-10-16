import { Schema, model } from "mongoose";

let collection = "products"
let schema = new Schema({
    productName : {type:String,required:true},               // String: product name   
    description : {type:String,required:true},        // String: product description
    price :{type:Number,required:true},               // Number: product price
    stock :{type:Number,required:true},             // Number: stock quantity
    category : {type:String,required:true},           // String: product category (e.g., "Electronics", "Clothing")
    weight : {type:Number,required:true},             // String: SKU (unique product code)
    available : {type:Boolean,required:true},     // Boolean: whether the product is featured or not
    releaseDate : {type:Date,required:true},           // Number: discount percentage
    manufacturer : {type:String,required:true},       // String: product creation date
    productCode: {type:String,required:true},  
    brand : {type:String,required:true},        // Boolean: whether the product is new or not
},{
    timestamps:true
})

let Product = model(collection,schema)
export default Product