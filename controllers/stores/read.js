import Store from "../../models/Store.js";

let allStore = async (req,res,next) => {
    try {
        let all = await  Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let storeByAddress =  async (req,res,next) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.address
        let all = await  Store.find({address:roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let StoreByStoreName =  async (req,res,next) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.storeName
        let all = await  Store.find({storeName : roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}


export {allStore,storeByAddress,StoreByStoreName}
