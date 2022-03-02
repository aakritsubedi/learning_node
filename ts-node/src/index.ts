import config from "config";
import express from "express";

import log from "./logger";
import connect from "./db/connect";

import routes from "./routes";

const PORT = config.get("port") as number;
const HOST = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, HOST, () => {
  log.info(`SERVER IS RUNNING AT http://${HOST}:${PORT}`);
  
  // Connect to the database server
  connect();
  // Initialize the routes
  routes(app);
});
