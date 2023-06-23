import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import router from "./routes/routes.js"
const app=express();
mongoose.connect("mongodb://127.0.0.1:27017/formulario")
.then (()=>{console.log("conectado a mongo")})


app.use(cors())
app.use(express.json()) 
app.use(router)



app.listen(3000,()=>console.log("escuchando en 3000"))