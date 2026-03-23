import { Request, Response } from "express";
import { askAIService, saveFlowService } from "../services/ai.service";
import catchAsync from "../middlewares/catchAsync";

export const askAI = catchAsync(async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const result = await askAIService(prompt);

  res.status(200).json({
    success: true,
    data: result,
  });
});

export const saveFlow = catchAsync(async (req: Request, res: Response) => {
  const { prompt, response } = req.body;

  if (!prompt || !response) {
    return res.status(400).json({
      success: false,
      message: "Prompt and Response are required",
    });
  }

  const savedData = await saveFlowService({ prompt, response });

  res.status(201).json({
    success: true,
    data: savedData,
  });
});
