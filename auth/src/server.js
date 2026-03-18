import app from "./app.js";
import env from "./config/env.js";
import { logger } from "./config/logger.js";

async function startServer() {
  app.listen(env.PORT, () => {
    logger.info(`[AUTH_SERVICE] Successfully started on port ${env.PORT}`);
  });
}

startServer();