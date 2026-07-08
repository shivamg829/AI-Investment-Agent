import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import researchRoutes from "./routes/research.routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-investment-agent-sepia.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api", researchRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "InvestOnly API is running",
  });
});

export default app;