import express from "express";
import employeesController from "../controllers/employeescontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(employeesController.getEmployees) //mostrar


router.route("/:id")

.put(employeesController.updateCustomer) //actualizar
.delete(employeesController.deleteEmployees) //borrar

export default router;


