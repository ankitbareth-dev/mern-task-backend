import { Request, Response, NextFunction } from "express";

export const askAI = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { prompt } = req.body;
  } catch (error) {
    next(error);
  }
};
