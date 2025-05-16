//array de metodos
const moviesController = {};

import moviesModel from "../models/Movies.js";
import {v2 as cloudinary} from "cloudinary"
import {config} from "../config.js"

cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinay_api_secret
})
//get - select

moviesController.getMovies = async (req, res) => {

    const movies = await moviesModel.find()
    res.json (movies)
}

//post - agregar
//tittle, descripction, director, gender,year,duration,img
moviesController.createMovies= async (req, res) => {
    try {
        
  
    const {tittle, descripction, director, gender,year,duration} = req.body; //req.body = lo que le pedimos al frontend
    let imgURL = ""
if(req.file){
const result = await cloudinary.uploader.upload(
    req.file.path,
    {
        folder: "public",
        allowed_formats: ["png","jpg", "jpeg","svg"],
    }
)
imgURL = result.secure_url
console.log(result.secure_url)
}

    const  newmovies = new moviesModel({tittle, descripction, director, gender,year,duration, img:imgURL});
    await newmovies.save()
    res.json({message: "movie saved"})

} catch (error) {
        console.log("error"+error)
}}
 
//delete

moviesController.deleteMovies = async (req, res) => {
await moviesModel.findOneAndDelete(req.params.id)
res.json({message: "movie deleted"})
}

// actualizar - post
moviesController.updatesMovies = async (req, res) =>{
const {tittle, descripction, director, gender,year,duration, img:imgURL} = req.body; // solicito los valores
await moviesModel.findByIdAndUpdate(req.params.id, {
    tittle,
     descripction,
      director, 
      gender,
      year,
      duration,
      img:imgURL
}, {new: true});
res.json({message: "movie deleted"})
}

export default moviesController;
