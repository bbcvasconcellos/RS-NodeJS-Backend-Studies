import { Request, Response, Router } from "express";
import { CreateCategoryController } from "../modules/cars/controller/createCategoryController";
import { ListCategoryController } from "../modules/cars/controller/listCategoryController";
import { CategoriesRepository } from "../modules/cars/repositories/implementation/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/createCategoryService";
import { ListCategoryService } from "../modules/cars/services/listCategoryService";

const categoriesRoutes = Router();
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

export { categoriesRoutes };
