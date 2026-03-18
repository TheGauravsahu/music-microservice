import app from "./app.js";
import env from "./config/env.js";
import { logger } from "./config/logger.js";
import { connectToDB } from "./config/db.js";

async function startServer() {
  try {
    await connectToDB();
    app.listen(env.PORT, () => {
      logger.info(`[MUSIC_SERVICE] Successfully started on port ${env.PORT}`);
    });
  } catch (e) {
    logger.error("Failed to start server", e);
    process.exit(1);
  }
}

startServer();