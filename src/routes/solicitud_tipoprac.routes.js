import { Router } from "express";
import * as solicitudtipoprac from "../controllers/solicitud_tipoprac.controller";
const router = Router();
router.get("/", solicitudtipoprac.getSolicitudesTipoprac);
export default router;
