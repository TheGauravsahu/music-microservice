import express from "express";
import { musicController } from "../controllers/music.controller.js";
import { upload } from "../middlewares/upload.middleware.js";

const r = express.Router();

/**
 * @name createMusic
 * @description Create music and upload file
 * @route /api/musics/createMusic
 */
r.post(
  "/createMusic",
  upload.fields([
    { name: "music", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  musicController.createMusic,
);

export default r;