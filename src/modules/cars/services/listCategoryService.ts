import { inject, injectable } from "tsyringe";
import { Category } from "../models/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

@injectable()
class ListCategoryService {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryService };
