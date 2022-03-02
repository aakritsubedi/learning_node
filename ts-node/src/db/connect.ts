import mongoose from "mongoose";
import config from "config";

import log from "../logger";

async function connect() {
  const DB_URI = config.get("dbUri") as string;

  try {
    const connection = await mongoose.connect(DB_URI);

    log.info("Database connected successfully");

    return connection;
  } catch (err) {
    log.error("DB Error:", err);
    process.exit(1);
  }
}

export default connect;
