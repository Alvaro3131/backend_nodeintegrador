import { Router } from "express";
import * as solicitud from "../controllers/solicitud.controller";
const router = Router();
router.post("/", solicitud.createSolicitud);
router.put("/:id", solicitud.updateSolicitud);
router.get("/:id", solicitud.getSolicitudesid);
router.get("/search/:id", solicitud.getSolicitudesporsuid);
router.get("/actu/:id", solicitud.getSolicitudesActual);
router.get("/:id/:tipo", solicitud.getSolicitudesidtipo);
router.get(
  "/estado/search/:idsolicitud/:idsolestado",
  solicitud.getSolicitudesPorEstadoyId
);
router.get("/estado/nuevo/:id", solicitud.getSolicitudesPorEstado);
router.get("/estado/nuevo/:id/:codigo", solicitud.getSolicitudesPorEstadoDni);
router.delete("/delete/:id/:idpostulante", solicitud.rechazarSolicitud);
router.post("/observarsolicitud/:id", solicitud.observarSolicitud);
router.post("/validarsolicitud/", solicitud.validarSolicitud);
router.post("/agregarcarta/", solicitud.agregarCartayGuia);
export default router;
