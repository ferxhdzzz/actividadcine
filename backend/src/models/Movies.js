import{Schema, model} from "mongoose";

const movieSchema = new Schema ({
    tittle:{
type: String,
require: true
    },

    description:{
type: String,
require: true
    },

   director: {
        type: String,
        require: true,
        
    },
    gender: {
        type: String,
        require: true,
       
    },  
    year: {
        type: Number,
        require: true,
       
    },  
    duracion: {
        type: Number,
        require: true,
       
    },  
    img: {
        type: String,
        require: true,
       
    },  

    
}, {
    timestamps:true,
    strict: false
})

export default model ("Movies", movieSchema)