import { Router } from "express";
import * as postulante from "../controllers/postulante.controller";
const router = Router();

router.get("/:id", postulante.datosPostulante);
router.get("/listar/todos", postulante.getPostulante);


export default router;
