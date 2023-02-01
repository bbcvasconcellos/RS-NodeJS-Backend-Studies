import { Request, Response } from "express";
import { CategoriesRepository } from "../repositories/implementation/CategoriesRepository";
import { ListCategoryService } from "../services/listCategoryService";

class ListCategoryController {
  constructor(private listCategoryService: ListCategoryService) {}
  handle(request: Request, response: Response): Response {
    const categories = this.listCategoryService.execute();

    return response.json(categories);
  }
}

export { ListCategoryController };
