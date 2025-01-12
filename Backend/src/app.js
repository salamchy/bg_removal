import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

//api route
app.get("/", (req, res) => res.send("API is Working"));
app.use("/api/user", userRouter);

export default app;
