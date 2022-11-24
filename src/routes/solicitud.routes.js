import { Router } from "express";
import * as solicitud from "../controllers/solicitud.controller";
const router = Router();
router.post("/", solicitud.createSolicitud);
router.get("/:id", solicitud.getSolicitudesid);
router.get("/:id/:tipo", solicitud.getSolicitudesidtipo);
export default router;
