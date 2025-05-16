import customersModel from "../models/Customers.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import nodemailer from "nodemailer"
import crypto from "crypto"
import {config} from "../config.js"


const registerCustomerscontroller = {}
registerCustomerscontroller.registerCustomer = async (req, res) => {
    const {name, email,password,phone,dui, direction} = req.body; //req.body = lo que le pedimos al frontend
    try{
const existCustomer = await customersModel.findOne({email})

if (existCustomer){
return res.json ({message:"Customer already exist"})
}

    const passwordHash = await bcryptjs.hash(password, 10)

    const  newcustomer = new customersModel({name, email,password:passwordHash,phone,dui, direction});
    await newcustomer.save()
const verificationCode = crypto.randomBytes(3).toString("hex")
const expiresAt = Date.now() + 2 * 60 * 60 * 1000;

const tokenCode = jsonwebtoken.sign({

email,verificationCode, expiresAt},

    config.jwt.secret,
    {expiresIn:config.jwt.expiresIn},

(error, token) => {
    if (error) console.log ("error"+error);
    res.cookie("verificationCode", token,{maxAge:2 * 60 * 60 * 1000})
})

     //enviar correo
     const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: config.email.useremail,
            pass: config.email.userpassword
        }
     })


     const mailOptions = {
        from: config.email.useremail,
        to: email,
        subject: "Verificacion de correo",
        text:` Para verificar tu cuenta, utliza este codigo ${verificationCode}\n Este codigo expira en dos horas\n `
    }


  transporter.sendMail(mailOptions,(error, info)=>{

if (error) console.log("error aqui", error)
    res.json ({message: "Email sent"})
  })
   
  res.json ({message: "Customer registered, pls verify ur email"})

    }catch(error){
        res.json ({message: "error" + error})

    }
}


registerCustomerscontroller.verifyCodeEmail = async (req, res) => {
    const {verificationCode} = req.body;
    const token = req.cookie.verificationCode;

    if (!token){

        return res.json ({message: "register ur account before"})

    }

    try {
const decoded = jsonwebtoken.verify(token, config.jwt.secret)
const {email, verificationCode: storedCode} = decoded

if (verificationCode !== storedCode){
    return res.json ({message: "invalid verfication code"})
}

const customer = await customersModel.findOne({email})
if (!customer){
return res.json({message:"Customer not found"})
}

customer.isVerfied = true,
await customer.save()

res.clearCookie("verificationCode")
res.json({message: "email verify succesfull"})

    }catch(error){
res.json({message: "error"+ error})
    }
}

export default registerCustomerscontroller