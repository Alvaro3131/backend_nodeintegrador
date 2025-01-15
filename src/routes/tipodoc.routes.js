import { Router } from "express";
import * as tipodoc from "../controllers/tipodoc.controller.js";
const router = Router();
router.get("/", tipodoc.gettipodos);
export default router;
