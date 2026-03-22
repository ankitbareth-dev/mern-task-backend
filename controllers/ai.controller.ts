import { Request, Response } from "express";
import { askAIService } from "../services/ai.service";
import catchAsync from "../middlewares/catchAsync";

export const askAI = catchAsync(async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const result = await askAIService(prompt);

  res.status(200).json({
    success: true,
    data: result,
  });
});
