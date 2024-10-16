import { Router } from "express";
import { allStore, storeByAddress, StoreByStoreName } from "../controllers/stores/read.js";
import { create } from "../controllers/stores/create.js";


const routerStores = Router()

routerStores.get('/all', allStore)
routerStores.get('/address/:address',storeByAddress)
routerStores.get('/storeName/:storeName',StoreByStoreName)
routerStores.post('/create',create)

export default routerStores