import { Router } from "express";
import Product from "../models/Product.js";

const router = Router()

router.get('/all',

    async (req,res) => {
        try {
            let all = await Product.find()
            return res.status(200).json({
                response: all
            })
        } catch (error) {
            return res.status(500).json({
                response: error
            })
        }        
    }
)

export default router