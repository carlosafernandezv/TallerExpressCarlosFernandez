import { Router } from "express";
import { allProduct,productByCategory, productByProductName } from "../controllers/products/read.js";

const routerProducts = Router()

routerProducts.get('/all', allProduct)
routerProducts.get('/category/:category',productByCategory)
routerProducts.get('/productName/:productName',productByProductName)

export default routerProducts