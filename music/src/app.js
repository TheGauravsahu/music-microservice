import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import musicRouter from "./routes/music.routes.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// * Routers
app.use("/api/musics", musicRouter);

// * health route
app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "ok",
    success: true,
    message: "[MUSIC_SERVICE] 🚀 Server is running succesfully.",
  });
});

// * global error handler
app.use(errorHandler);

export default app;
