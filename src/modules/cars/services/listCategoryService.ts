import { Category } from "../models/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

class ListCategoryService {
  constructor(private categoryRepository: ICategoriesRepository) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryService };
