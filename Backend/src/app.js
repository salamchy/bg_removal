import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

const app = express();

// Set Content Security Policy
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' https://clerk.accounts.dev https://cdn.jsdelivr.net https://js.sentry-cdn.com https://browser.sentry-cdn.com"
  );
  next();
});

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
