import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller.js";
const router = Router();

router.post("/", authCtrl.login);

export default router;
