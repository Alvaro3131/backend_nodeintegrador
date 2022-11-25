import { Router } from "express";
import * as usuario from "../controllers/usuario.controller";
const router = Router();
router.get("/supervisor", usuario.getSupervisores);
router.post("/supervisor", usuario.createSupervisor);
router.get("/supervisor/:dni", usuario.getSupervisoresdni);
router.put("/supervisor/:id", usuario.updateSupervisor);
export default router;
