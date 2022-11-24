import { Router } from "express";
import * as solicituddocumentos from "../controllers/solicitud_documentos.controller";
const router = Router();
router.post("/documentosfinales", solicituddocumentos.subirDocumentosfinales);
export default router;
