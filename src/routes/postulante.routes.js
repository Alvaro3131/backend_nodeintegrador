import { Router } from "express";
import * as postulante from "../controllers/postulante.controller";
const router = Router();

router.get("/:id", postulante.datosPostulante);
router.get("/listar/todos", postulante.getPostulante);
router.post("/registrar", postulante.crearPostulante);
router.post("/update/cambiar/:idpostu/:idusuario", postulante.updatePostulante);
router.put("/delete/estado/:id", postulante.updateestadoPostulante);


export default router;
