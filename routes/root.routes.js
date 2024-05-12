import { Router } from 'express';
const router = Router();
import {rootController} from "../controllers/root.controller.js";

router.get('/', rootController);

export default router;