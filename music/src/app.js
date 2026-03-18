import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// * health route
app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "ok",
    success: true,
    message: "[MUSIC_SERVICE] 🚀 Server is running succesfully.",
  });
});

export default app;
