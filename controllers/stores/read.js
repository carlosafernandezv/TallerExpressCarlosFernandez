import Store from "../../models/Store.js";

let allStore = async (req,res) => {
    try {
        let all = await  Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }        
}

let storeByAddres =  async (req,res) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.x
        let all = await  User.find({role : roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }        
}

let userById =  async (req,res) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.id
        let all = await  User.findById(roleQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }        
}


export {allStore,userByRole,userById} 