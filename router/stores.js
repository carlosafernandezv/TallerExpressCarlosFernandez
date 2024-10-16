import { Router } from "express";
import { allStore, storeByAddress, StoreByStoreName } from "../controllers/stores/read.js";

const routerStores = Router()

routerStores.get('/all', allStore)
routerStores.get('/address/:address',storeByAddress)
routerStores.get('/storeName/:storeName',StoreByStoreName)

export default routerStores