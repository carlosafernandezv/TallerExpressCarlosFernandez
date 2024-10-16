import Product from "../../models/Product.js";

let create = async (req,res) =>{
    try {
        let product = req.body
        let all = await Product.create(product)
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