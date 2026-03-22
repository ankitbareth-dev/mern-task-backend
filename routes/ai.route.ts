import { Router } from "express";
import { askAI } from "../controllers/ai.controller";

const router = Router();

router.post("/ask-ai", askAI);

export default router;
