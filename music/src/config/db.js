import mongoose from "mongoose";
import env from "./env.js";
import { logger } from "./logger.js";

export async function connectToDB() {
  try {
    await mongoose.connect(env.MONGO_URI);
    logger.info("✅ Database connected successfully");
  } catch (e) {
    logger.error("Failed to connect to db", e);
  }
}
