import { Router } from 'express';
const router = Router();
import {rootController} from "../models/root.controller.js";

router.get('/', rootController);

export default router;