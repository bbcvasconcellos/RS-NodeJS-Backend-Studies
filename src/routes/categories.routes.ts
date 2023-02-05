import { Request, Response, Router } from "express";
import multer from "multer";

import { ListCategoryService } from "../modules/cars/services/listCategoryService";
import { CreateCategoryService } from "../modules/cars/services/createCategoryService";
import { ListCategoryController } from "../modules/cars/controller/listCategoryController";
import { CreateCategoryController } from "../modules/cars/controller/createCategoryController";
import { CategoriesRepository } from "../modules/cars/repositories/implementation/CategoriesRepository";
import { ImportCategoryService } from "../modules/cars/services/importCategoryService";
import { ImportCategoryController } from "../modules/cars/controller/importCategoryController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});
const categoriesRepository = CategoriesRepository.getInstance();

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  const createCategoryController = new CreateCategoryController(createCategoryService);

  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const listCategoryService = new ListCategoryService(categoriesRepository);
  const listCategoryController = new ListCategoryController(listCategoryService);

  return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request: Request, response: Response) => {
  const importCategoryService = new ImportCategoryService(categoriesRepository);
  const importCategoryController = new ImportCategoryController(importCategoryService);

  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
