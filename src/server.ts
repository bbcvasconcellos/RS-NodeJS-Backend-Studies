import express from "express";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";

import swaggerFile from "./swagger.json";

import "./database";
import "./shared/container";
import { router } from "./routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(port, () => {
  console.log("Running on port: ", port);
});
