import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/interfaces/IUsersRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void> {
    await this.userRepository.create({ name, username, email, password, driver_license });
  }
}

export { CreateUserService };
