import { Router } from "express";
import * as solicitud from "../controllers/solicitud.controller";
const router = Router();
router.post("/", solicitud.createSolicitud);
export default router;
