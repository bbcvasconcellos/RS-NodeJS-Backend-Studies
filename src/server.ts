import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(port, () => {
  console.log("Running on port: ", port);
});
