import{Schema, model} from "mongoose";

const employeesSchema = new Schema ({
    name:{
type: String,
require: true
    },

    email:{
type: String,
require: true
    },

   password: {
        type: String,
        require: true,
        
    },
    phone: {
        type: String,
        require: true,
       
    },  
    direction: {
        type: String,
        require: true,
       
    },  
    
    position: {
        type: String,
        require: true,
       
    }, 
    
    date_contratation: {
        type: Number,
        require: true,
       
    },  
    
    salary: {
        type: Number,
        require: true,
       
    }, 
    DUI: {
        type: Number,
        require: true,
       
    }, 

    
}, {
    timestamps:true,
    strict: false
})

export default model ("Employees", employeesSchema)