import { Router } from 'express';
import {loginView, loginPost} from "../controllers/login.controller.js";

const router = Router();

router.get("/login", loginView);
router.post("/login", loginPost);

export default router;