import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";
import "./database";
import "./shared/container";

import { AppError } from "./errors/AppError";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, reponse: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return reponse.status(err.statusCode).json({
        message: err.message,
      });
    }

    return reponse.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.get("/", (request, response) => {
  return response.json({ message: "I'm alive!" });
});

app.listen(3333, () => console.log("Server is running!"));
