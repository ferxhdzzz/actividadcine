const employeesController = {};

import employeesModel from "../models/Employees.js";

//get - select

employeesController.getEmployees = async (req, res) => {

    const employees = await employeesModel.find()
    res.json (employees)
}

//delete

employeesController.deleteEmployees = async (req, res) => {
await employeesModel.findOneAndDelete(req.params.id)
res.json({message: "employee deleted"})
}

// actualizar - post

employeesController.updateCustomer = async (req, res) =>{
const {name, email, password, phone,direction,position,date_contratation,salary,DUI} = req.body; // solicito los valores
await employeesModel.findByIdAndUpdate(req.params.id, {
    name, 
    email, 
    password,
     phone, 
     direction,
     position,
     date_contratation,
     salary,
     DUI
}, {new: true});
res.json({message: "employee deleted"})
}

export default employeesController;