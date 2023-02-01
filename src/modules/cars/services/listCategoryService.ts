import { Category } from "../models/Category";
import { ICategoriesRepository } from "../repositories/interfaces/ICategoriesRepository";

class ListCategoryService {
  constructor(private categoryRepository: ICategoriesRepository) {}
  execute(): Category[] {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryService };
