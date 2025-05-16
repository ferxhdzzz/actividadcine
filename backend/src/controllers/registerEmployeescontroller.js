import registerEmployeesModel from "../models/Employees.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"

const registeremployeesController = {};

//post - agregar
          
registeremployeesController.registerEmployees = async (req, res) => {
    const {name, email, password, phone, direction,position,date_contratation,salary,DUI} = req.body; //req.body = lo que le pedimos al frontend

try {
const existemployee = await registerEmployeesModel.findOne({email})


if(existemployee){
    return res.json({message:"employee already exist"})
}

//encriptar
const passwordhash = await bcryptjs.hash(password,10)

//guardar todo

const  newemployee = new registerEmployeesModel({name, email, password:passwordhash, phone, direction,position,date_contratation,salary,DUI});
await newemployee.save()
res.json({message: "employee saved"})

 //token
 jsonwebtoken.sign(
 //q voy a guardar
 {id: newemployee._id},
 config.jwt.secret,
 {expiresIn:config.jwt.expiresIn},
 (error,token) =>{
if (error)console.log("error"+error)
    res.cookie("authToken",token)
res.json({message: "empleado guardado"})
    
}
)
 //secret word (env)





}catch(error){
    console.log("error"+error)


}
}

 export default registeremployeesController;