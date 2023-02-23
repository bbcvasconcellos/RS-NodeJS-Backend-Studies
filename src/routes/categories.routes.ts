import { Router } from "express";
import multer from "multer";

import { ListCategoryController } from "../modules/cars/controller/listCategoryController";
import { CreateCategoryController } from "../modules/cars/controller/createCategoryController";
import { ImportCategoryController } from "../modules/cars/controller/importCategoryController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post("/", createCategoryController.handle); // express passa req e res automaticamente para o handle

categoriesRoutes.get("/", listCategoryController.handle);

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes };
