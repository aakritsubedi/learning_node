import config from "config";
import { Express, Request, Response } from "express";

const HOST = config.get("host") as string;
const PORT = config.get("port") as number;

export default function (app: Express) {
  app.get("/info", (req: Request, res: Response) => {
    res.status(200).json({
      status: "OK",
      server: `Server is running at http://${HOST}:${PORT}`,
      database: `Database server is connected successfully.`
    });
  });
}
