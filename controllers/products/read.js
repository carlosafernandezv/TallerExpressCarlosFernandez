import Product from "../../models/Product.js";

let allProduct = async (req,res,next) => {
    try {
        let all = await Product.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let productByProductName =  async (req,res,next) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.productName
        let all = await  Product.find({productName : roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let productByCategory =  async (req,res,next) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.category
        let all = await  Product.find({category : roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}


export {allProduct,productByCategory, productByProductName}
