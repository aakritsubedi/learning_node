import config from "config";
import express from "express";

const PORT = config.get("port") as number;
const HOST = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, HOST, () => {
  console.log(`SERVER IS RUNNING AT http://${HOST}:${PORT}`); 
});