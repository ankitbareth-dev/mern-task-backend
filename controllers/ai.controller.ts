import { Request, Response, NextFunction } from "express";
import { askAIService } from "../services/ai.service";

export const askAI = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { prompt } = req.body;

    const result = await askAIService(prompt);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
