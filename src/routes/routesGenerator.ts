import { Router } from "express";
import { generateNames } from "../controllers/controllerGenerator";

const router = Router();

router.post("/generate", generateNames);

export default router;