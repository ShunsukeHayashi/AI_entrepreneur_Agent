import express from "express";
import healthRouter from "./routes/health";

const app = express();

app.disable("x-powered-by");
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "AI Entrepreneur Agent backend service" });
});

app.use("/health", healthRouter);

export default app;
