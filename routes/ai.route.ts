import { Router } from "express";
import { askAI, saveFlow } from "../controllers/ai.controller";

const router = Router();

router.post("/ask-ai", askAI);
router.post("/save", saveFlow);

export default router;
