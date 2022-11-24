import { Router } from "express";
import * as postulante from "../controllers/postulante.controller";
const router = Router();
router.get("/", postulante.getPostulante);
router.get("/search/:cod_alumno", postulante.searchPostulante);
export default router;
