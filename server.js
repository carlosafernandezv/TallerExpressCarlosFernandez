import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan"
import indexRouter from "./router/index.js"

const server = express()

const PORT = 8080

const ready = ()=> console.log("server ready port: "+PORT);

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(cors());
server.use(morgan('dev'))

//router
server.use('/api', indexRouter)



server.listen(PORT,ready) 


