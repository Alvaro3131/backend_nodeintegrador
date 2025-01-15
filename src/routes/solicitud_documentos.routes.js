import { Router } from "express";
import * as solicituddocumentos from "../controllers/solicitud_documentos.controller.js";
const router = Router();
router.post("/documentosfinales", solicituddocumentos.subirDocumentosfinales);
router.post("/documentofinal", solicituddocumentos.subirDocumentofinal);
router.put("/documentosfinales", solicituddocumentos.supdateDocumentosfinales);
export default router;
