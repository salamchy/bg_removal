import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "5mb",
  })
);

//api route
app.get("/", (req, res) => res.send("API is Working"));

export default app;
