import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
  }),
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

export default app;
