import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/interfaces/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementation/CategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/interfaces/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementation/SpecificationsRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/interfaces/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementation/UsersRepository";

//registra um singleton para ICategoryRepository
container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);

container.registerSingleton<ISpecificationRepository>("SpecificationRepository", SpecificationRepository);

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
