const customersController = {};

import customersModel from "../models/Customers.js";

//get - select

customersController.getCustomers = async (req, res) => {

    const customers = await customersModel.find()
    res.json (customers)
}
      
//delete

customersController.deleteCustomer = async (req, res) => {
await customersModel.findOneAndDelete(req.params.id)
res.json({message: "customer deleted"})
}

// actualizar - post

customersController.updateCustomer = async (req, res) =>{
const {name, email,password,phone,dui, direction} = req.body; // solicito los valores
await customersModel.findByIdAndUpdate(req.params.id, {
    name, 
    email,
    password,
    phone,
    dui, 
    direction
}, {new: true});
res.json({message: "customer deleted"})
}

export default customersController;

