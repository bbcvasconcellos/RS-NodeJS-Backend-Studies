import { Request, Response } from "express";
import { ImportCategoryService } from "../services/importCategoryService";

class ImportCategoryController {
  constructor(private importCategoryService: ImportCategoryService) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryService.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
