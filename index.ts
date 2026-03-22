import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});

if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not defined");
  process.exit(1);
}

const PORT = Number(process.env.PORT) || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB disconnected");
  process.exit(0);
});
