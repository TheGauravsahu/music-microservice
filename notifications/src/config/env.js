import "dotenv/config";

export default {
  PORT: Number(process.env.PORT) || 3002,
  JWT_SECRET: process.env.JWT_SECRET,
};
