import { Router } from "express";
import { allProduct,productByCategory, productByProductName } from "../controllers/products/read.js";
import { create } from "../controllers/products/create.js";

const routerProducts = Router()

routerProducts.get('/all', allProduct)
routerProducts.get('/category/:category',productByCategory)
routerProducts.get('/productName/:productName',productByProductName)
routerProducts.post('/create',create)

export default routerProducts