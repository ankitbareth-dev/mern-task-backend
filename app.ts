import express, { Application, Request, Response } from "express";
import cors from "cors";

import aiRoutes from "./routes/ai.route";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app: Application = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/api", aiRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

app.use(globalErrorHandler);

export default app;
