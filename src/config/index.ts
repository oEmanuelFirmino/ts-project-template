import { config } from "dotenv";

config();

export default {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL || "",
};
