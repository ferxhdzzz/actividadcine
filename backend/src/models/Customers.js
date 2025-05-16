import{Schema, model} from "mongoose";

const customerSchema = new Schema ({
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

export default model ("Customers", customerSchema)