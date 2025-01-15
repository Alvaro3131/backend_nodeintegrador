import { Router } from "express";
import * as postulante from "../controllers/postulante.controller.js";
const router = Router();

router.get("/:id", postulante.datosPostulante);
router.get("/listar/todos", postulante.getPostulante);
router.post("/registrar", postulante.crearPostulante);
router.post("/update/cambiar/:idpostu/:idusuario", postulante.updatePostulante);
router.put("/update/estado/:id", postulante.updateestadoPostulante);
router.get("/search/:codigo_alumno", postulante.getPostulantesPorCodigo);


export default router;
