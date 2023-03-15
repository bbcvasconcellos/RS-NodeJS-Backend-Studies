import { Repository } from "typeorm";
import dataSource from "../../../../database";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../models/User";
import { IUsersRepository } from "../interfaces/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({ name, username, email, password, driver_license }: ICreateUserDTO) {
    const user = this.repository.create({ name, username, email, password, driver_license });

    await this.repository.save(user);
  }
}

export { UsersRepository };
