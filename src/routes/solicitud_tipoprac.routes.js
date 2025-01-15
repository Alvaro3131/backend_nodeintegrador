import { Router } from "express";
import * as solicitudtipoprac from "../controllers/solicitud_tipoprac.controller.js";
const router = Router();
router.get("/", solicitudtipoprac.getSolicitudesTipoprac);
export default router;
