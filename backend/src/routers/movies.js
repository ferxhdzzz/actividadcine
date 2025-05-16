import express from "express";
import moviesControllers from "../controllers/moviescontrollers.js";
import multer from "multer"


//coloca los metodos que tendra la la ruta
const router = express.Router();

// carpeta local que guarde las carpetas subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(moviesControllers.getMovies) //mostrar
.post(upload.single("img"),moviesControllers.createMovies) //agregar

router.route("/:id")

.put(moviesControllers.updatesMovies) //actualizar
.delete(moviesControllers.deleteMovies) //borrar


export default router;

