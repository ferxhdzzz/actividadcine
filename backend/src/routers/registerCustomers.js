import express from "express";
import registerCustomerscontroller from "../controllers/registerCustomerscontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.post(registerCustomerscontroller.registerCustomer) //agregar

//api/registerCustomers/verifyCodeEmail
router.route("/verifyCodeEmail").post(registerCustomerscontroller.verifyCodeEmail)



export default router;
