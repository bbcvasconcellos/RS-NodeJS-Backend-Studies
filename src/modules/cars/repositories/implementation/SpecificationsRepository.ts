import { Repository } from "typeorm";

import { ICreateSpecificationDTO, ISpecificationRepository } from "../interfaces/ISpecificationRepository";
import { Specification } from "../../models/Specification";
import dataSource from "../../../../database";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = dataSource.getRepository("specification");
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ where: { name } });

    return specification;
  }
}

export { SpecificationRepository };
